#!/usr/bin/env python3
"""
Servidor estático simples para preview local do build de produção.
Suporta gzip, headers de segurança e cache para assets imutáveis.
"""
import gzip
import mimetypes
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

ROOT = Path(__file__).parent / "dist"
PORT = int(os.environ.get("PORT", 8000))

mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("image/avif", ".avif")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")

COMPRESSIBLE = {"text/html", "text/css", "text/javascript", "application/javascript", "application/json", "image/svg+xml", "text/plain"}

CACHE_IMMUTABLE = ("/_astro/", "/fonts/", ".webp", ".avif", ".svg", ".png", ".jpg", ".woff2", ".woff")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        # Security headers
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")

        # Cache: 1 ano para assets com hash, sem cache para HTML
        path = self.path
        if any(s in path for s in CACHE_IMMUTABLE):
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        elif path.endswith((".html", "/")) or path == "/":
            self.send_header("Cache-Control", "public, max-age=0, must-revalidate")

        super().end_headers()

    def _send_compressed(self, content_type, content):
        if content_type in COMPRESSIBLE and "gzip" in self.headers.get("Accept-Encoding", ""):
            encoded = gzip.compress(content)
            self.send_header("Content-Encoding", "gzip")
            self.send_header("Content-Length", str(len(encoded)))
            self.end_headers()
            self.wfile.write(encoded)
        else:
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)

    def do_GET(self):
        # SPA fallback para clean URLs
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not self.path.startswith(("/_astro", "/fonts", "/api")):
            fallback = ROOT / "index.html"
            if fallback.exists():
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self._send_compressed("text/html", fallback.read_bytes())
                return
        return super().do_GET()

    def log_message(self, format, *args):
        # Log compacto
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")


if __name__ == "__main__":
    print(f"Serving {ROOT} at http://localhost:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()