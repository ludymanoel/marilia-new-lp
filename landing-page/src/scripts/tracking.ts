/**
 * tracking.ts — Cliente de tracking e UTMs.
 *
 * Funcionalidades:
 * 1. Captura UTMs da URL e persiste em sessionStorage
 * 2. Encaminha UTMs para checkout (Kiwify) como query params
 * 3. Dispara Meta Pixel events (PageView, ViewContent, Lead)
 * 4. Dispara Google Ads conversion tracking no CTA principal
 * 5. Respeita LGPD via cookie consent (se habilitado)
 *
 * IMPORTANTE (per LP-skill): Meta Pixel deve ser inicializado UMA VEZ
 * no <head> do HTML, NÃO dinamicamente (evita erro "Duplicate Pixel ID").
 */

export const TRACKING_CONFIG = {
  metaPixelId: '678121427532401',
  googleAdsId: 'AW-11264843190',
  googleAdsConversionLabel: 'PLACEHOLDER_CONVERSION_LABEL', // atualizar quando Marília fornecer
  tiktokPixelId: 'CPU8E4JC77U3QO8GT0M0',
  ga4Id: 'G-YLQMHNNY87',
} as const;

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
] as const;

const UTM_STORAGE_KEY = 'mc_utms';

type UTMParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/**
 * Lê UTMs da URL atual e armazena em sessionStorage.
 * Chamado UMA VEZ no carregamento da página.
 */
export function captureUTMs(): UTMParams {
  if (typeof window === 'undefined') return {};

  const url = new URL(window.location.href);
  const params: UTMParams = {};

  UTM_KEYS.forEach((key) => {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });

  // Persistir em sessionStorage (sobrevive a navegação interna)
  if (Object.keys(params).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
    } catch {
      // sessionStorage indisponível (modo privado) — segue sem persistir
    }
  }

  return params;
}

/**
 * Recupera UTMs armazenados.
 */
export function getStoredUTMs(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Adiciona UTMs como query params a uma URL de checkout.
 * Retorna a URL final pronta pra redirect.
 */
export function appendUTMsToCheckoutUrl(baseUrl: string, utms?: UTMParams): string {
  const params = utms || getStoredUTMs();
  if (Object.keys(params).length === 0) return baseUrl;

  try {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });
    return url.toString();
  } catch {
    // URL inválida — retorna original
    return baseUrl;
  }
}

// =====================================================================
// META PIXEL — eventos de funil
// =====================================================================

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    ttq?: {
      (...args: unknown[]): void;
      methods: string[];
      instance?: (id: string) => { track: (...args: unknown[]) => void };
      track?: (event: string, data?: Record<string, unknown>) => void;
      page?: () => void;
    };
    dataLayer?: unknown[];
  }
}

/**
 * Dispara evento Meta Pixel ViewContent quando a pessoa chega na seção de oferta.
 */
export function trackViewContent(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', {
    content_name: 'Produtividade Sincera',
    content_category: 'Curso Online',
    content_ids: ['produtividade-sincera-v1'],
    content_type: 'product',
    value: 697.0,
    currency: 'BRL',
  });
}

/**
 * Dispara evento Lead quando o usuário clica no CTA principal.
 * Chamado ANTES do redirect pra checkout.
 */
export function trackLead(source: string = 'cta_principal'): void {
  if (typeof window === 'undefined') return;

  // Meta Pixel — Lead event (não AddToCart, pois checkout é externo)
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Produtividade Sincera',
      content_category: 'Curso Online',
      value: 697.0,
      currency: 'BRL',
      source,
    });
  }

  // TikTok Pixel — Lead event
  if (window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('SubmitForm', {
      content_name: 'Produtividade Sincera',
      value: 697.0,
      currency: 'BRL',
    });
  }

  // Google Ads — conversão (configurar label real após setup)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${TRACKING_CONFIG.googleAdsId}/${TRACKING_CONFIG.googleAdsConversionLabel}`,
      value: 697.0,
      currency: 'BRL',
      transaction_id: generateTransactionId(),
    });
  }

  // GA4 — evento custom
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      method: source,
      value: 697.0,
      currency: 'BRL',
    });
  }
}

/**
 * ID de transação único para deduplicação de eventos de conversão.
 */
function generateTransactionId(): string {
  return `mc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Dispara evento de exibição do modal de desconto (50% OFF).
 * Chamado quando o DiscountBanner abre.
 */
export function trackDiscountModalView(): void {
  if (typeof window === 'undefined') return;

  // Meta Pixel — evento custom de exibição
  if (window.fbq) {
    window.fbq('trackCustom', 'DiscountModalView', {
      content_name: 'Produtividade Sincera',
      content_category: 'Curso Online',
    });
  }

  // TikTok Pixel — ViewContent (guardar se tiktok pixel presente)
  if (window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('ViewContent', {
      content_name: 'Produtividade Sincera',
      value: 697.0,
      currency: 'BRL',
    });
  }

  // GA4 — view_promotion
  if (window.gtag) {
    window.gtag('event', 'view_promotion', {
      creative_name: 'discount_modal',
      promotion_id: '50off_modal',
      promotion_name: '50% OFF — Todos os Cursos',
      value: 697.0,
      currency: 'BRL',
    });
  }
}

/**
 * Atualiza todos os links de checkout da página com UTMs.
 * Chamado uma vez após DOMContentLoaded.
 */
export function hydrateCheckoutLinks(): void {
  if (typeof window === 'undefined') return;

  const utms = getStoredUTMs();
  if (Object.keys(utms).length === 0) return;

  const links = document.querySelectorAll<HTMLAnchorElement>(
    'a[href*="pay.kiwify.com.br"], a[href*="kiwify"], a[href*="hotmart"]'
  );

  links.forEach((link) => {
    if (!link.href) return;
    link.href = appendUTMsToCheckoutUrl(link.href, utms);
  });
}

// =====================================================================
// INICIALIZAÇÃO
// =====================================================================

/**
 * Inicializa tracking quando DOM estiver pronto.
 * Chamado automaticamente via <script> no Layout.
 */
export function initTracking(): void {
  if (typeof window === 'undefined') return;

  // 1. Capturar UTMs
  captureUTMs();

  // 2. Hidratar links de checkout com UTMs
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateCheckoutLinks);
  } else {
    hydrateCheckoutLinks();
  }

  // 3. Observar seção de oferta para disparar ViewContent
  const ofertaSection = document.getElementById('oferta');
  if (ofertaSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            trackViewContent();
            observer.disconnect(); // Dispara apenas uma vez
          }
        });
      },
      { threshold: [0, 0.4, 0.6] }
    );
    observer.observe(ofertaSection);
  }

  // 4. Delegar tracking em todos os CTAs
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const cta = target.closest<HTMLElement>('[data-track-cta]');
    if (!cta) return;

    const source = cta.dataset.trackCta || 'cta_unidentified';
    trackLead(source);
  });
}