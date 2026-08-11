# Guia de Deploy — Vercel

> Passo a passo para fazer deploy da LP Produtividade Sincera na Vercel
> resolvendo o erro `404: NOT_FOUND Code: NOT_FOUND`.

---

## ⚠️ Por que deu 404 antes?

A Vercel esperava arquivos em um local específico, mas encontrou:

- ❌ **Sem `vercel.json`** → Vercel não sabia que era um projeto Astro
- ❌ **Sem `@astrojs/vercel` adapter** → Output ia só pra `dist/`, não para `.vercel/output/static/`
- ❌ **Output não estava em `.vercel/output/static/`** → Vercel Build Output API v3 procura exatamente ali

**Agora está corrigido.** O adapter gera a estrutura correta automaticamente.

---

## 📦 O que foi adicionado

| Arquivo | Função |
|---|---|
| `package.json` | + `@astrojs/vercel` + script `vercel-build` |
| `astro.config.mjs` | + `adapter: vercel({ imageService, webAnalytics })` |
| `vercel.json` (raiz) | Config para **deploy da raiz do monorepo** |
| `vercel.json` (em landing-page/) | Config para **deploy isolado da pasta landing-page** |
| `.vercelignore` | Ignora arquivos desnecessários no upload |
| `.gitignore` (raiz) | Padrão Astro + exclui `docs/` |

Após `npm run build`, a Vercel encontra:
```
.vercel/output/
├── config.json              # Config gerada pelo adapter
└── static/
    ├── index.html           # ← a Vercel serve este arquivo
    ├── _astro/...           # CSS + JS chunks
    ├── favicon.svg
    ├── robots.txt
    ├── sitemap-0.xml
    └── tiktok-pixel.js
```

---

## 🚀 Cenários de Deploy

### **Cenário A — Deploy só da pasta `landing-page/`** (RECOMENDADO)

**Vantagens:** Mais simples, menos risco de erro de paths.

1. **Crie um repositório novo** no GitHub (ex: `produtividade-sincera`)
2. **Faça push apenas do conteúdo de `landing-page/`** (não da raiz):

   ```bash
   cd "/home/ludy/projetos/Marilia Cordeiro/landing-page"
   git init
   git add .
   git commit -m "feat: LP Produtividade Sincera v2"
   git branch -M main
   git remote add origin https://github.com/SEU-USER/produtividade-sincera.git
   git push -u origin main
   ```

3. **Na Vercel:** [vercel.com/new](https://vercel.com/new) → Importar o repo
4. **Configurações do projeto na Vercel:**
   - Framework Preset: **Astro** (auto-detectado)
   - Root Directory: **./** (vazio)
   - Build Command: `npm run build` (padrão)
   - Output Directory: deixe vazio (adapter gera o path correto)
   - Install Command: `npm install`

5. **Clique Deploy.** Sem configurações extras.

> ✅ Esta é a abordagem mais limpa. Sem `vercel.json` customizado necessário — o adapter cuida de tudo.

---

### **Cenário B — Deploy a partir da raiz do monorepo**

**Quando usar:** Você já tem o repo com `landing-page/` dentro e quer manter `docs/` versionado junto.

O `vercel.json` na raiz já está configurado para:

```json
{
  "framework": "astro",
  "buildCommand": "cd landing-page && npm install && npm run build",
  "outputDirectory": "landing-page/.vercel/output/static"
}
```

1. **Push da raiz do projeto** (com tudo):
   ```bash
   cd "/home/ludy/projetos/Marilia Cordeiro"
   git init  # se ainda não foi
   git add .
   git commit -m "feat: monorepo LP Produtividade Sincera"
   git branch -M main
   git remote add origin https://github.com/SEU-USER/SEU-REPO.git
   git push -u origin main
   ```

2. **Na Vercel:** importe o repo
3. Vercel detecta o `vercel.json` na raiz e usa a config dele.

---

### **Cenário C — Deploy via CLI (sem GitHub)**

```bash
cd "/home/ludy/projetos/Marilia Cordeiro/landing-page"
npm install -g vercel
vercel login
vercel --prod
```

A CLI detecta Astro automaticamente e faz deploy.

---

## ⚙️ Variáveis de Ambiente

Nenhuma variável obrigatória. As opcionais (para tracking real):

| Variável | Onde usar | Exemplo |
|---|---|---|
| `GOOGLE_ADS_CONVERSION_LABEL` | `src/scripts/tracking.ts` | `abc123XYZ` |
| `META_PIXEL_ID` | `src/layouts/Layout.astro` | `123456789012345` |
| `TIKTOK_PIXEL_ID` | `public/tiktok-pixel.js` | `CPU8E4JC77U3QO8GT0M0` |
| `SITE_URL` | `astro.config.mjs` (já configurado) | `https://lp.mariliacordeiro.com` |

Para configurar na Vercel: **Project Settings → Environment Variables**.

---

## 🔍 Verificação Pós-Deploy

Após o deploy, valide:

```bash
# 1. Status code
curl -I https://sua-url.vercel.app
# Esperado: HTTP/2 200

# 2. Headers de segurança
curl -sI https://sua-url.vercel.app | grep -E "X-Frame|X-Content|Referrer"
# Esperado: 3 headers presentes

# 3. Assets servidos
curl -I https://sua-url.vercel.app/_astro/index.D6fGAacC.css
# Esperado: cache-control: public, max-age=31536000, immutable

# 4. Schema.org presente
curl -s https://sua-url.vercel.app | grep -c "application/ld+json"
# Esperado: 4 (Course, FAQ, Breadcrumb, Organization)

# 5. Lighthouse
# Abrir https://sua-url.vercel.app no Chrome
# DevTools → Lighthouse → Generate Report
# Performance esperado: 95+
```

---

## 🔄 Próximos Deploys

Para deploys subsequentes:

```bash
git add .
git commit -m "..."
git push
```

Vercel detecta automaticamente e faz redeploy. Preview deploys são gerados para cada PR.

---

## 🆘 Troubleshooting

### "404: NOT_FOUND" ainda aparece

1. Confirme que o adapter está em `astro.config.mjs`:
   ```js
   import vercel from '@astrojs/vercel/static';
   export default defineConfig({ adapter: vercel(), ... });
   ```
2. Rode `npm run build` local — deve gerar `.vercel/output/static/`
3. Verifique que `vercel.json` (se existir) tem `outputDirectory` correto

### "Build failed" no deploy

1. Veja o log completo na Vercel
2. Geralmente é erro de import ou dependência
3. Rode `npm install && npm run build` local para reproduzir

### "Module not found" no adapter

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Custom domain (mariliacordeiro.com/produtividade-sincera)

Como a LP atual está em `mariliacordeiro.com/produtividade-sincera/`,
você tem 3 opções para deploy:

1. **Subdomain dedicada** (recomendado): `lp.mariliacordeiro.com`
2. **Path dentro do domínio principal**: configurar proxy reverso (nginx) no servidor da Marília
3. **Substituir a LP inteira**: apontar `mariliacordeiro.com/produtividade-sincera` para o novo deploy (requer mudar config WordPress ou usar Vercel DNS)

Para a Vercel configurar domínio customizado: **Project Settings → Domains**.

---

## 📞 Contato

Problemas com o deploy? Cole o log de erro completo em https://vercel.com/help ou consulte a doc oficial: https://vercel.com/docs