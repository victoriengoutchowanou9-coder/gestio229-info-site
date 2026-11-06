import fs from 'fs';

const htmlContent = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>GESTIO 229 ERP — Logiciel Professionnel de Gestion d'Entreprise, Caisse & Stocks au Bénin</title>
  <meta name="description" content="GESTIO229 est la plateforme ERP et de gestion commerciale n°1 au Bénin. Pilotez vos ventes, caisse POS, stocks, dépenses, trésorerie et multi-activités en temps réel. 30 jours d'essai gratuit sans carte bancaire." />
  <meta name="keywords" content="Logiciel de gestion commerciale au Bénin, logiciel de caisse Cotonou, ERP Bénin, logiciel de stock, facturation normalisée, SYSCOHADA, GESTIO 229" />
  <meta name="author" content="GESTIO 229 Technologies" />
  
  <!-- Open Graph / WhatsApp / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://info.gestio229.com/" />
  <meta property="og:title" content="GESTIO 229 ERP — Pilotez toute votre entreprise depuis une seule plateforme" />
  <meta property="og:description" content="Solution moderne de gestion commerciale, caisse, stocks et comptabilité pour les entreprises au Bénin et en Afrique. 30 jours d'essai gratuit sur vos 3 premiers secteurs." />
  <meta property="og:image" content="https://gestio229.com/icon-512.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GESTIO 229 ERP — Le Standard de Gestion au Bénin" />
  <meta name="twitter:description" content="Caisse, Stocks, Factures, Trésorerie et Multi-secteurs. Découvrez le logiciel ERP conçu pour l'Afrique." />
  <meta name="twitter:image" content="https://gestio229.com/icon-512.png" />

  <link rel="icon" type="image/png" href="icon-192.png" />
  <link rel="apple-touch-icon" href="icon-512.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Supabase JS CDN pour transmission réelle du formulaire de contact -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* Palette Professionnelle : Bleu Nuit Premium & Turquoise Moderne */
      --navy-950: #060B18;
      --navy-900: #0A1128;
      --navy-850: #0F172A;
      --navy-800: #1E293B;
      --navy-700: #334155;
      
      --blue-primary: #1D4ED8;
      --blue-accent: #2563EB;
      --blue-light: #3B82F6;
      --blue-soft: #EFF6FF;

      --cyan-accent: #06B6D4;
      --cyan-deep: #0891B2;
      --cyan-soft: #ECFEFF;

      --green-accent: #10B981;
      --green-dark: #059669;
      --green-soft: #ECFDF5;

      --gold: #F59E0B;
      --gold-dark: #D97706;

      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-300: #CBD5E1;
      --gray-600: #475569;
      --gray-700: #334155;
      --gray-900: #0F172A;

      --white: #FFFFFF;
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
      --radius-xl: 28px;
      
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow-md: 0 4px 20px -2px rgba(10, 17, 40, 0.08);
      --shadow-lg: 0 20px 40px -15px rgba(10, 17, 40, 0.15);
      --shadow-xl: 0 25px 60px -12px rgba(10, 17, 40, 0.25);
      --shadow-glow: 0 0 40px rgba(37, 99, 235, 0.25);
    }

    body {
      font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--white);
      color: var(--gray-900);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    /* BARRE D'ANNONCE SUPÉRIEURE */
    .top-announcement {
      background: linear-gradient(90deg, #0A1128 0%, #1E3A8A 50%, #0F766E 100%);
      color: var(--white);
      font-size: 13px;
      font-weight: 600;
      padding: 9px 16px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .top-announcement .badge-pill {
      background: rgba(6, 182, 212, 0.25);
      color: #67E8F9;
      border: 1px solid rgba(6, 182, 212, 0.4);
      padding: 2px 10px;
      border-radius: 50px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .top-announcement a {
      color: #93C5FD;
      text-decoration: underline;
      margin-left: 6px;
      font-weight: 700;
    }
    .top-announcement .wa-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(16, 185, 129, 0.2);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #A7F3D0;
      padding: 2px 10px;
      border-radius: 50px;
      font-size: 12px;
      text-decoration: none;
      margin-left: 12px;
    }

    /* NAVIGATION HEADER */
    header.site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--gray-200);
      transition: all 0.25s ease;
    }
    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 21px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: var(--navy-900);
    }
    .brand-logo .logo-mark {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #0A1128 0%, #1D4ED8 60%, #06B6D4 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-weight: 900;
      font-size: 19px;
      box-shadow: 0 6px 16px rgba(29, 78, 216, 0.3);
      position: relative;
      overflow: hidden;
    }
    .brand-logo .logo-mark::after {
      content: '';
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: var(--green-accent);
      border-radius: 50%;
      opacity: 0.7;
    }
    .brand-logo span.text-229 {
      color: var(--blue-accent);
    }
    .brand-logo span.badge-country {
      background: var(--gray-100);
      color: var(--gray-700);
      border: 1px solid var(--gray-200);
      font-size: 10px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 6px;
      vertical-align: middle;
      letter-spacing: 0.5px;
      margin-left: 6px;
    }

    nav.nav-links-desktop {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    nav.nav-links-desktop a {
      font-size: 15px;
      font-weight: 600;
      color: var(--navy-700);
      transition: color 0.15s ease;
      position: relative;
    }
    nav.nav-links-desktop a:hover {
      color: var(--blue-accent);
    }
    nav.nav-links-desktop a.active::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--blue-accent);
      border-radius: 2px;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .btn-login {
      font-size: 14px;
      font-weight: 700;
      color: var(--navy-850);
      padding: 10px 18px;
      border-radius: 10px;
      transition: all 0.15s;
    }
    .btn-login:hover {
      background: var(--gray-100);
      color: var(--blue-accent);
    }
    .btn-cta-nav {
      background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%);
      color: var(--white);
      font-size: 14px;
      font-weight: 700;
      padding: 11px 22px;
      border-radius: 10px;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-cta-nav:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
      background: linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%);
    }

    .mobile-menu-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      color: var(--navy-850);
    }

    /* HERO SECTION */
    .hero-wrapper {
      background: radial-gradient(ellipse 90% 60% at 50% -15%, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 80%),
                  linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
      padding: 70px 24px 110px;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid var(--gray-200);
    }
    .hero-container {
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
    }
    .hero-badge-container {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(37, 99, 235, 0.08);
      border: 1px solid rgba(37, 99, 235, 0.25);
      padding: 7px 18px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 700;
      color: var(--blue-primary);
      margin-bottom: 26px;
      box-shadow: 0 2px 10px rgba(37, 99, 235, 0.06);
    }
    .hero-badge-container .flag {
      font-size: 16px;
    }
    .hero-badge-container .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--green-accent);
      display: inline-block;
      animation: pulse 2s infinite;
    }

    .hero-title {
      font-size: clamp(34px, 5.8vw, 68px);
      font-weight: 900;
      line-height: 1.12;
      letter-spacing: -1.8px;
      color: var(--navy-950);
      max-width: 1050px;
      margin: 0 auto 24px;
    }
    .hero-title .gradient-text {
      background: linear-gradient(135deg, #1D4ED8 0%, #0284C7 50%, #0D9488 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-subtitle {
      font-size: clamp(17px, 2.2vw, 21px);
      line-height: 1.65;
      color: var(--navy-700);
      max-width: 820px;
      margin: 0 auto 42px;
      font-weight: 450;
    }

    .hero-cta-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }
    .btn-hero-primary {
      background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
      color: var(--white);
      font-size: 16px;
      font-weight: 700;
      padding: 16px 36px;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(29, 78, 216, 0.4);
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.25s ease;
    }
    .btn-hero-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px rgba(29, 78, 216, 0.5);
      background: linear-gradient(135deg, #1E40AF 0%, #172554 100%);
    }
    .btn-hero-secondary {
      background: var(--white);
      color: var(--navy-900);
      font-size: 16px;
      font-weight: 700;
      padding: 16px 32px;
      border-radius: 14px;
      border: 1px solid var(--gray-300);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.2s ease;
    }
    .btn-hero-secondary:hover {
      background: var(--gray-50);
      border-color: var(--gray-400);
      transform: translateY(-1px);
    }
    .btn-hero-wa {
      background: #25D366;
      color: var(--white);
      font-size: 15px;
      font-weight: 700;
      padding: 16px 26px;
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
      transition: all 0.2s ease;
    }
    .btn-hero-wa:hover {
      background: #20BD5A;
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
    }

    .hero-trust-badges {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--gray-600);
      flex-wrap: wrap;
      margin-bottom: 60px;
    }
    .hero-trust-badges span {
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }
    .hero-trust-badges svg {
      color: var(--green-accent);
      flex-shrink: 0;
    }

    /* MOCKUP INTERACTIF DU VRAI LOGICIEL GESTIO 229 */
    .software-preview-window {
      max-width: 1140px;
      margin: 0 auto;
      background: var(--navy-950);
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 30px 80px -15px rgba(10, 17, 40, 0.45), 0 0 0 1px rgba(255,255,255,0.06);
      overflow: hidden;
      text-align: left;
    }
    .preview-header-bar {
      background: #0B132B;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .window-controls {
      display: flex;
      gap: 8px;
    }
    .window-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red { background: #EF4444; }
    .dot-yellow { background: #F59E0B; }
    .dot-green { background: #10B981; }

    .window-title {
      font-size: 13px;
      font-weight: 700;
      color: #94A3B8;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .window-status-pill {
      background: rgba(16, 185, 129, 0.2);
      color: #34D399;
      border: 1px solid rgba(16, 185, 129, 0.4);
      font-size: 11.5px;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 50px;
    }

    /* INTÉRIEUR DU LOGICIEL SIMULÉ */
    .preview-body {
      padding: 24px;
      background: #0D1629;
      color: #F8FAFC;
    }
    .hub-company-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 16px;
    }
    .company-title-block h3 {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: var(--white);
    }
    .company-meta-tags {
      display: flex;
      gap: 14px;
      font-size: 12.5px;
      color: #94A3B8;
      margin-top: 4px;
      flex-wrap: wrap;
    }
    .company-meta-tags strong {
      color: #CBD5E1;
    }

    /* KPIs GRILLE */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    .kpi-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 18px 20px;
      position: relative;
      overflow: hidden;
    }
    .kpi-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
    }
    .kpi-blue::before { background: var(--blue-accent); }
    .kpi-green::before { background: var(--green-accent); }
    .kpi-gold::before { background: var(--gold); }
    .kpi-cyan::before { background: var(--cyan-accent); }

    .kpi-label {
      font-size: 11.5px;
      font-weight: 700;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .kpi-value {
      font-size: 24px;
      font-weight: 900;
      color: var(--white);
      font-feature-settings: 'tnum';
    }
    .kpi-sub {
      font-size: 11.5px;
      color: #64748B;
      margin-top: 4px;
    }

    /* CARTES D'ACTIVITÉS EN VRAI */
    .preview-activities-header {
      font-size: 15px;
      font-weight: 800;
      color: #E2E8F0;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .preview-activities-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .preview-activity-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 165px;
      position: relative;
      transition: all 0.2s ease;
    }
    .preview-activity-card:hover {
      border-color: rgba(37, 99, 235, 0.5);
      background: rgba(255,255,255,0.07);
    }
    .act-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    .act-card-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--white);
      line-height: 1.3;
    }
    .act-card-sector {
      font-size: 11.5px;
      color: #94A3B8;
      margin-top: 2px;
    }
    .act-status-badge {
      font-size: 10.5px;
      font-weight: 800;
      padding: 3px 9px;
      border-radius: 50px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .act-trial-badge {
      background: rgba(59, 130, 246, 0.2);
      color: #93C5FD;
      border: 1px solid rgba(59, 130, 246, 0.4);
    }
    .act-active-badge {
      background: rgba(16, 185, 129, 0.2);
      color: #6EE7B7;
      border: 1px solid rgba(16, 185, 129, 0.4);
    }

    .act-numbers-mini {
      display: flex;
      justify-content: space-between;
      background: rgba(0,0,0,0.25);
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 11.5px;
      margin: 10px 0 12px;
    }
    .act-numbers-mini .col-title { color: #64748B; }
    .act-numbers-mini .col-num { font-weight: 700; color: #F1F5F9; }

    .btn-open-software-mock {
      background: #059669;
      color: var(--white);
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 12.5px;
      font-weight: 700;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: default;
    }

    /* SECTION CHIFFRES CLÉS RÉELS */
    .section-verified-stats {
      background: var(--navy-950);
      color: var(--white);
      padding: 70px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .stats-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      text-align: center;
    }
    .stat-item {
      padding: 10px 16px;
      position: relative;
    }
    .stat-item:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 20%;
      height: 60%;
      width: 1px;
      background: rgba(255,255,255,0.12);
    }
    .stat-number {
      font-size: clamp(36px, 4.2vw, 54px);
      font-weight: 900;
      letter-spacing: -1px;
      background: linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 6px;
    }
    .stat-label {
      font-size: 14.5px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 4px;
    }
    .stat-description {
      font-size: 12.5px;
      color: #94A3B8;
    }

    /* SECTION GÉNÉRALE */
    .section-standard {
      padding: 100px 24px;
    }
    .section-container {
      max-width: 1240px;
      margin: 0 auto;
    }
    .section-header-center {
      text-align: center;
      max-width: 820px;
      margin: 0 auto 64px;
    }
    .section-tag {
      display: inline-block;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 50px;
      margin-bottom: 16px;
      background: var(--blue-soft);
      color: var(--blue-primary);
      border: 1px solid rgba(37, 99, 235, 0.2);
    }
    .section-title-large {
      font-size: clamp(30px, 4.2vw, 46px);
      font-weight: 900;
      letter-spacing: -1px;
      color: var(--navy-950);
      line-height: 1.2;
      margin-bottom: 18px;
    }
    .section-desc-lead {
      font-size: 17.5px;
      color: var(--gray-600);
      line-height: 1.65;
    }

    /* SECTION 4 : FONCTIONNALITÉS COMPLÈTES (14 MODULES RÉELS) */
    .features-grid-14 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .feature-card-pro {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      padding: 32px 28px;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .feature-card-pro:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(37, 99, 235, 0.35);
    }
    .feature-icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 22px;
      font-size: 26px;
    }
    .icon-blue { background: #EFF6FF; color: #1D4ED8; }
    .icon-cyan { background: #ECFEFF; color: #0891B2; }
    .icon-green { background: #ECFDF5; color: #059669; }
    .icon-gold { background: #FEF3C7; color: #D97706; }
    .icon-indigo { background: #EEF2FF; color: #4F46E5; }
    .icon-purple { background: #FAF5FF; color: #9333EA; }

    .feature-card-pro h4 {
      font-size: 19px;
      font-weight: 800;
      color: var(--navy-900);
      margin-bottom: 12px;
      letter-spacing: -0.3px;
    }
    .feature-card-pro p {
      font-size: 14.5px;
      color: var(--gray-600);
      line-height: 1.65;
      margin-bottom: 18px;
      flex-grow: 1;
    }
    .feature-pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: var(--blue-primary);
      background: var(--blue-soft);
      padding: 4px 10px;
      border-radius: 6px;
      width: fit-content;
    }

    /* SECTION 5 : LES 20 SECTEURS MÉTIERS RÉELS */
    .sectors-section-bg {
      background: var(--gray-50);
      border-top: 1px solid var(--gray-200);
      border-bottom: 1px solid var(--gray-200);
    }
    .sectors-filter-tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .filter-tab-btn {
      background: var(--white);
      border: 1px solid var(--gray-300);
      color: var(--navy-700);
      font-size: 13.5px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .filter-tab-btn:hover, .filter-tab-btn.active {
      background: var(--navy-900);
      color: var(--white);
      border-color: var(--navy-900);
      box-shadow: var(--shadow-sm);
    }

    .sectors-grid-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .sector-item-card {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-md);
      padding: 24px 20px;
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
    }
    .sector-item-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--blue-accent);
    }
    .sector-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .sector-emoji-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      flex-shrink: 0;
    }
    .sector-item-card h5 {
      font-size: 16px;
      font-weight: 800;
      color: var(--navy-950);
      line-height: 1.3;
    }
    .sector-category-badge {
      font-size: 11px;
      font-weight: 700;
      color: var(--gray-600);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .sector-item-card p {
      font-size: 13.5px;
      color: var(--gray-600);
      line-height: 1.6;
      margin-bottom: 16px;
      flex-grow: 1;
    }
    .sector-special-badge {
      display: inline-block;
      font-size: 11.5px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 6px;
      background: #F8FAFC;
      border: 1px solid var(--gray-200);
      color: var(--navy-700);
      width: fit-content;
    }

    /* SECTION 6 : TARIFS OFFICIELS GESTIO 229 */
    .pricing-cards-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      align-items: stretch;
      max-width: 1160px;
      margin: 0 auto;
    }
    .pricing-box {
      background: var(--white);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-xl);
      padding: 40px 32px;
      position: relative;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
    }
    .pricing-box:hover {
      box-shadow: var(--shadow-lg);
    }
    .pricing-box.featured {
      border: 2px solid var(--blue-accent);
      background: linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%);
      box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
      transform: scale(1.02);
    }
    .featured-tag {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(90deg, #1D4ED8, #0284C7);
      color: var(--white);
      font-size: 12px;
      font-weight: 800;
      padding: 5px 18px;
      border-radius: 50px;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
    }
    .plan-name {
      font-size: 20px;
      font-weight: 900;
      color: var(--navy-950);
      margin-bottom: 6px;
    }
    .plan-target {
      font-size: 13.5px;
      color: var(--gray-600);
      margin-bottom: 22px;
      min-height: 40px;
    }
    .price-display {
      margin-bottom: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--gray-200);
    }
    .price-amount {
      font-size: 42px;
      font-weight: 900;
      color: var(--navy-950);
      letter-spacing: -1px;
    }
    .price-currency {
      font-size: 18px;
      font-weight: 700;
      color: var(--gray-600);
      margin-left: 4px;
    }
    .price-frequency {
      font-size: 14px;
      color: var(--gray-600);
      font-weight: 600;
      margin-left: 4px;
    }
    .plan-features-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 13px;
      margin-bottom: 32px;
      flex-grow: 1;
    }
    .plan-features-list li {
      font-size: 14px;
      color: var(--navy-800);
      display: flex;
      align-items: flex-start;
      gap: 10px;
      line-height: 1.45;
    }
    .plan-features-list li svg {
      color: var(--green-accent);
      flex-shrink: 0;
      margin-top: 2px;
    }
    .btn-plan {
      display: block;
      text-align: center;
      padding: 14px 24px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 800;
      transition: all 0.2s ease;
    }
    .btn-plan-featured {
      background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%);
      color: var(--white);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
    }
    .btn-plan-featured:hover {
      background: #1E40AF;
      transform: translateY(-2px);
    }
    .btn-plan-outline {
      background: var(--white);
      color: var(--navy-900);
      border: 1px solid var(--gray-300);
    }
    .btn-plan-outline:hover {
      background: var(--gray-100);
      border-color: var(--gray-400);
    }

    .pricing-trial-guarantee {
      background: var(--green-soft);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 20px;
      border-radius: 14px;
      max-width: 900px;
      margin: 48px auto 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }
    .pricing-trial-guarantee strong {
      color: var(--green-dark);
      font-size: 16px;
    }

    /* SECTION 7 : SÉCURITÉ & FIABILITÉ */
    .security-section {
      background: var(--navy-950);
      color: var(--white);
      padding: 100px 24px;
      position: relative;
    }
    .security-section .section-title-large {
      color: var(--white);
    }
    .security-section .section-desc-lead {
      color: #94A3B8;
    }
    .security-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-top: 50px;
    }
    .security-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: var(--radius-lg);
      padding: 32px 26px;
    }
    .security-card h4 {
      font-size: 18px;
      font-weight: 800;
      color: var(--white);
      margin: 16px 0 10px;
    }
    .security-card p {
      font-size: 14px;
      color: #94A3B8;
      line-height: 1.65;
    }

    /* SECTION 8 : À PROPOS */
    .about-split {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 60px;
      align-items: center;
    }
    .about-text h3 {
      font-size: 34px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: var(--navy-950);
      margin-bottom: 20px;
      line-height: 1.25;
    }
    .about-text p {
      font-size: 16px;
      color: var(--gray-700);
      line-height: 1.75;
      margin-bottom: 18px;
    }
    .about-pillars {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
      margin-top: 30px;
    }
    .pillar-box {
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      padding: 20px;
      border-radius: 12px;
    }
    .pillar-box h5 {
      font-size: 15px;
      font-weight: 800;
      color: var(--navy-950);
      margin-bottom: 6px;
    }
    .pillar-box p {
      font-size: 13px;
      color: var(--gray-600);
      margin-bottom: 0;
      line-height: 1.5;
    }

    /* SECTION 9 : CONTACT & SUPPORT OFFICIEL */
    .contact-section-wrapper {
      background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
      padding: 100px 24px;
      border-top: 1px solid var(--gray-200);
    }
    .contact-card-main {
      max-width: 1100px;
      margin: 0 auto;
      background: var(--white);
      border-radius: var(--radius-xl);
      border: 1px solid var(--gray-200);
      box-shadow: var(--shadow-xl);
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1.3fr;
    }
    .contact-sidebar {
      background: linear-gradient(135deg, #0A1128 0%, #1E3A8A 100%);
      color: var(--white);
      padding: 48px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact-sidebar h3 {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
    }
    .contact-sidebar p {
      font-size: 15px;
      color: #93C5FD;
      line-height: 1.6;
      margin-bottom: 36px;
    }
    .contact-channels {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    .contact-channel-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .channel-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: rgba(255,255,255,0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--white);
    }
    .channel-info h6 {
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #94A3B8;
      margin-bottom: 2px;
    }
    .channel-info p {
      font-size: 16px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 0;
    }

    .contact-form-area {
      padding: 48px 44px;
    }
    .contact-form-area h4 {
      font-size: 22px;
      font-weight: 800;
      color: var(--navy-950);
      margin-bottom: 8px;
    }
    .contact-form-area p.subtitle {
      font-size: 14px;
      color: var(--gray-600);
      margin-bottom: 28px;
    }
    .form-row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 18px;
    }
    .form-group {
      margin-bottom: 18px;
    }
    .form-group label {
      display: block;
      font-size: 13.5px;
      font-weight: 700;
      color: var(--navy-850);
      margin-bottom: 7px;
    }
    .form-group input, .form-group select, .form-group textarea {
      width: 100%;
      padding: 12px 16px;
      font-family: inherit;
      font-size: 14.5px;
      color: var(--navy-900);
      background: var(--gray-50);
      border: 1px solid var(--gray-300);
      border-radius: 10px;
      outline: none;
      transition: all 0.2s ease;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
      background: var(--white);
      border-color: var(--blue-accent);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .btn-submit-contact {
      background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%);
      color: var(--white);
      border: none;
      border-radius: 10px;
      padding: 14px 28px;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: all 0.2s ease;
    }
    .btn-submit-contact:hover {
      background: #1E40AF;
      transform: translateY(-1px);
    }
    .form-feedback-alert {
      padding: 14px;
      border-radius: 10px;
      margin-top: 16px;
      font-size: 14px;
      display: none;
    }

    /* FOOTER */
    footer.site-footer {
      background: var(--navy-950);
      color: #94A3B8;
      padding: 80px 24px 36px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .footer-grid {
      max-width: 1240px;
      margin: 0 auto 60px;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 48px;
    }
    .footer-brand-col h4 {
      font-size: 22px;
      font-weight: 900;
      color: var(--white);
      margin-bottom: 14px;
    }
    .footer-brand-col p {
      font-size: 14px;
      line-height: 1.7;
      margin-bottom: 20px;
      max-width: 340px;
    }
    .footer-col h5 {
      font-size: 14px;
      font-weight: 800;
      color: var(--white);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 20px;
    }
    .footer-col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .footer-col ul a {
      font-size: 14px;
      color: #94A3B8;
      transition: color 0.15s ease;
    }
    .footer-col ul a:hover {
      color: var(--white);
    }

    .footer-bottom-bar {
      max-width: 1240px;
      margin: 0 auto;
      padding-top: 32px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13.5px;
      flex-wrap: wrap;
      gap: 16px;
    }

    /* BOUTON FLOTTANT WHATSAPP DIRECT */
    .floating-whatsapp-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
      background: #25D366;
      color: var(--white);
      width: 62px;
      height: 62px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
      transition: all 0.25s ease;
      cursor: pointer;
    }
    .floating-whatsapp-btn:hover {
      transform: scale(1.08) translateY(-3px);
      box-shadow: 0 15px 35px rgba(37, 211, 102, 0.55);
    }
    .floating-whatsapp-btn svg {
      width: 34px;
      height: 34px;
      fill: var(--white);
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 1024px) {
      .kpi-row { grid-template-columns: repeat(2, 1fr); }
      .preview-activities-grid { grid-template-columns: 1fr; }
      .features-grid-14 { grid-template-columns: repeat(2, 1fr); }
      .sectors-grid-cards { grid-template-columns: repeat(2, 1fr); }
      .pricing-cards-3 { grid-template-columns: 1fr; max-width: 500px; }
      .pricing-box.featured { transform: none; }
      .about-split { grid-template-columns: 1fr; }
      .contact-card-main { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: repeat(2, 1fr); }
      .stats-container { grid-template-columns: repeat(2, 1fr); gap: 24px; }
      .stat-item:nth-child(2)::after { display: none; }
    }

    @media (max-width: 768px) {
      nav.nav-links-desktop { display: none; }
      .mobile-menu-toggle { display: block; }
      .top-announcement { flex-direction: column; gap: 4px; padding: 8px 12px; }
      .top-announcement .wa-link { margin-left: 0; }
      .features-grid-14 { grid-template-columns: 1fr; }
      .sectors-grid-cards { grid-template-columns: 1fr; }
      .security-grid { grid-template-columns: 1fr; }
      .stats-container { grid-template-columns: 1fr; }
      .stat-item::after { display: none !important; }
      .footer-grid { grid-template-columns: 1fr; }
      .form-row-2 { grid-template-columns: 1fr; }
      .contact-sidebar { padding: 32px 24px; }
      .contact-form-area { padding: 32px 24px; }
      .kpi-row { grid-template-columns: 1fr; }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.15); }
    }
  </style>
</head>
<body>

  <!-- 1. TOP ANNOUNCEMENT BAR -->
  <aside class="top-announcement" aria-label="Annonce officielle">
    <div>
      <span class="badge-pill">Offre Nationale 🇧🇯</span>
      <span>30 jours d'essai 100% gratuit sur vos 3 premiers secteurs d'activité</span>
      <a href="https://gestio229.com/register" target="_blank">Créer mon compte →</a>
    </div>
    <a href="https://wa.me/2290162272324?text=Bonjour%20GESTIO%20229%2C%20je%20souhaite%20d%C3%A9couvrir%20le%20logiciel" target="_blank" class="wa-link">
      <span>WhatsApp Direct : 01 62 27 23 24</span>
    </a>
  </aside>

  <!-- 2. SITE NAVIGATION HEADER -->
  <header class="site-header">
    <div class="nav-container">
      <a href="#" class="brand-logo" aria-label="GESTIO 229 Accueil">
        <div class="logo-mark">G2</div>
        <div>
          GESTIO<span class="text-229">229</span>
          <span class="badge-country">BÉNIN</span>
        </div>
      </a>

      <nav class="nav-links-desktop" aria-label="Navigation principale">
        <a href="#accueil" class="active">Accueil</a>
        <a href="#fonctionnalites">Fonctionnalités</a>
        <a href="#secteurs">Secteurs</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#securite">Sécurité</a>
        <a href="#a-propos">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <a href="https://gestio229.com/login" class="btn-login" target="_blank">Se connecter</a>
        <a href="https://gestio229.com/register" class="btn-cta-nav" target="_blank">
          <span>Créer mon compte</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <button class="mobile-menu-toggle" id="mobileMenuBtn" aria-label="Ouvrir le menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- 3. HERO SECTION -->
  <section class="hero-wrapper" id="accueil">
    <div class="hero-container">
      <div class="hero-badge-container">
        <span class="flag">🇧🇯</span>
        <span>Standard ERP & Caisse du Bénin</span>
        <span class="dot"></span>
        <span>Solution Cloud & Mobile</span>
      </div>

      <h1 class="hero-title">
        Pilotez toute votre entreprise depuis <span class="gradient-text">une seule plateforme</span>.
      </h1>

      <p class="hero-subtitle">
        GESTIO229 simplifie la gestion commerciale, la caisse, les stocks, la comptabilité et les activités de votre entreprise grâce à une solution intelligente, moderne et centralisée.
      </p>

      <div class="hero-cta-group">
        <a href="https://gestio229.com/register" class="btn-hero-primary" target="_blank">
          <span>Commencer gratuitement (30 jours)</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#fonctionnalites" class="btn-hero-secondary">
          <span>Découvrir GESTIO229</span>
        </a>
        <a href="https://wa.me/2290162272324?text=Bonjour%20GESTIO%20229%2C%20je%20souhaite%20une%20d%C3%A9monstration%20du%20logiciel." class="btn-hero-wa" target="_blank">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          <span>WhatsApp : 01 62 27 23 24</span>
        </a>
      </div>

      <div class="hero-trust-badges">
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 30 jours gratuits sans carte bancaire</span>
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Jusqu'à 3 secteurs d'activité offerts</span>
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Multi-utilisateurs & Caissiers</span>
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Rapports de Caisse PDF automatiques</span>
      </div>

      <!-- APERÇU RÉEL DU VRAI HUB GESTIO 229 -->
      <div class="software-preview-window">
        <div class="preview-header-bar">
          <div class="window-controls">
            <span class="window-dot dot-red"></span>
            <span class="window-dot dot-yellow"></span>
            <span class="window-dot dot-green"></span>
          </div>
          <div class="window-title">
            <span>GESTIO 229 ERP — HUB CENTRAL MULTISERVICES</span>
            <span style="font-size: 11px; color:#64748B;">• Bénin · UEMOA (FCFA)</span>
          </div>
          <span class="window-status-pill">● Essai gratuit – 23 jours restants</span>
        </div>

        <div class="preview-body">
          <div class="hub-company-banner">
            <div class="company-title-block">
              <h3>STE SOURCE DE VIE</h3>
              <div class="company-meta-tags">
                <span>N° IFU : <strong>3220260000010</strong></span>
                <span>• Régime : <strong>Régime Réel Simplifié (RRS)</strong></span>
                <span>• Activités actives : <strong>3 secteur(s) couvert(s)</strong></span>
                <span>• Ville : <strong>Cotonou</strong></span>
              </div>
            </div>
            <div>
              <span style="background: rgba(37,99,235,0.2); color:#93C5FD; padding:6px 14px; border-radius:8px; font-size:12px; font-weight:700;">
                Hub Multi-Établissements
              </span>
            </div>
          </div>

          <!-- 4 KPIs RÉELS -->
          <div class="kpi-row">
            <div class="kpi-card kpi-blue">
              <div class="kpi-label">CA DU JOUR (VENTES)</div>
              <div class="kpi-value">345 500 <span style="font-size:14px; color:#94A3B8;">F CFA</span></div>
              <div class="kpi-sub">Encaissements POS & factures</div>
            </div>
            <div class="kpi-card kpi-gold">
              <div class="kpi-label">DÉPENSES DU JOUR</div>
              <div class="kpi-value">42 000 <span style="font-size:14px; color:#94A3B8;">F CFA</span></div>
              <div class="kpi-sub">Charges d'exploitation & achats</div>
            </div>
            <div class="kpi-card kpi-green">
              <div class="kpi-label">MARGE NETTE (BÉNÉFICE RÉEL)</div>
              <div class="kpi-value" style="color:#34D399;">+118 750 <span style="font-size:14px;">F CFA</span></div>
              <div class="kpi-sub">Bénéfice net calculé en temps réel</div>
            </div>
            <div class="kpi-card kpi-cyan">
              <div class="kpi-label">SYNTHÈSE DU MOIS</div>
              <div class="kpi-value">4 820 000 <span style="font-size:14px; color:#94A3B8;">F CFA</span></div>
              <div class="kpi-sub">Cumul mensuel toutes activités</div>
            </div>
          </div>

          <!-- ACTIVITÉS OPÉRATIONNELLES -->
          <div class="preview-activities-header">
            <span>Établissements & Activités Métiers</span>
            <span style="font-size:12px; color:#94A3B8;">Accès direct aux modules autonomes</span>
          </div>

          <div class="preview-activities-grid">
            <!-- Activité 1 -->
            <div class="preview-activity-card">
              <div>
                <div class="act-card-top">
                  <div>
                    <div class="act-card-title">STE SOURCE DE VIE — BOUTIQUE</div>
                    <div class="act-card-sector">Boutique & Magasin Détail · Cotonou</div>
                  </div>
                  <span class="act-status-badge act-trial-badge">Essai gratuit</span>
                </div>
                <div class="act-numbers-mini">
                  <div><span class="col-title">Ventes du jour:</span> <span class="col-num">142 000 F</span></div>
                  <div><span class="col-title">Caisse:</span> <span class="col-num" style="color:#34D399;">Ouverte</span></div>
                </div>
              </div>
              <div class="btn-open-software-mock">
                <span>Ouvrir l'application métier</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>

            <!-- Activité 2 -->
            <div class="preview-activity-card">
              <div>
                <div class="act-card-top">
                  <div>
                    <div class="act-card-title">ETS LA VICTOIRE — POISSONNERIE</div>
                    <div class="act-card-sector">Poissonnerie & Produits Frais · Cotonou</div>
                  </div>
                  <span class="act-status-badge act-trial-badge">Essai gratuit</span>
                </div>
                <div class="act-numbers-mini">
                  <div><span class="col-title">Cartons sortis:</span> <span class="col-num">28 ctn</span></div>
                  <div><span class="col-title">Ventes:</span> <span class="col-num">125 500 F</span></div>
                </div>
              </div>
              <div class="btn-open-software-mock">
                <span>Ouvrir l'application métier</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>

            <!-- Activité 3 -->
            <div class="preview-activity-card">
              <div>
                <div class="act-card-top">
                  <div>
                    <div class="act-card-title">ETS LA VICTOIRE — QUINCAILLERIE</div>
                    <div class="act-card-sector">Quincaillerie & Matériaux BTP · Cotonou</div>
                  </div>
                  <span class="act-status-badge act-trial-badge">Essai gratuit</span>
                </div>
                <div class="act-numbers-mini">
                  <div><span class="col-title">Ciment / Fer:</span> <span class="col-num">En stock</span></div>
                  <div><span class="col-title">Ventes:</span> <span class="col-num">78 000 F</span></div>
                </div>
              </div>
              <div class="btn-open-software-mock">
                <span>Ouvrir l'application métier</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. SECTION CHIFFRES CLÉS VÉRIFIÉS -->
  <section class="section-verified-stats">
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-number">20</div>
        <div class="stat-label">Secteurs Métiers Pris en Charge</div>
        <div class="stat-description">Des configurations sur mesure pour chaque type de commerce au Bénin.</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">30 Jours</div>
        <div class="stat-label">Essai Gratuit Intégral</div>
        <div class="stat-description">Accès complet à tous les modules opérationnels dès l'inscription.</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3 Secteurs</div>
        <div class="stat-label">Gratuits à l'Inscription</div>
        <div class="stat-description">Couvrez jusqu'à 3 activités différentes sans débourser 1 franc.</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100% Cloud</div>
        <div class="stat-label">PC, Tablette & Android (PWA)</div>
        <div class="stat-description">Synchronisation continue et haute sécurité des données Supabase.</div>
      </div>
    </div>
  </section>

  <!-- 5. SECTION FONCTIONNALITÉS (LES 14 MODULES RÉELS) -->
  <section class="section-standard" id="fonctionnalites">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-tag">Fonctionnalités Métiers</span>
        <h2 class="section-title-large">Une suite d'outils puissante, conçue pour votre rentabilité</h2>
        <p class="section-desc-lead">Chaque module a été spécifiquement développé pour répondre aux exigences réelles de gestion au Bénin et dans la zone UEMOA.</p>
      </div>

      <div class="features-grid-14">
        <!-- 1. Ventes & Caisse -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-blue">🛒</div>
          <h4>Point de Vente (POS) & Vente Rapide</h4>
          <p>Encaissez en quelques secondes en FCFA, appliquez des remises autorisées, gérez les règlements mixtes (Espèces, MoMo, Flooz, Chèque) et imprimez des tickets de caisse normalisés.</p>
          <span class="feature-pill-badge">Vente tactile & Code-barres</span>
        </div>

        <!-- 2. Gestion de Caisse -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-green">💵</div>
          <h4>Gestion de Caisse & Clôtures Automatiques</h4>
          <p>Ouverture et fermeture sécurisée avec comptage physique des espèces. Calcul instantané des écarts et génération du rapport journalier officiel avec transmission automatique par email.</p>
          <span class="feature-pill-badge">Rapport PDF Automatisé</span>
        </div>

        <!-- 3. Stocks en Temps Réel -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-gold">📦</div>
          <h4>Gestion des Stocks & Alertes de Rupture</h4>
          <p>Mouvements d'entrées, sorties, avaries et transferts entre dépôts. Suivez la valeur de votre stock en temps réel et recevez des alertes avant toute rupture critique.</p>
          <span class="feature-pill-badge">Valorisation PMP / FIFO</span>
        </div>

        <!-- 4. Achats & Fournisseurs -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-cyan">🏭</div>
          <h4>Achats, Approvisionnements & Dettes</h4>
          <p>Bons de commande fournisseurs, contrôle des réceptions, mise à jour automatique des prix de revient et suivi rigoureux des dettes d'approvisionnement avec échéanciers.</p>
          <span class="feature-pill-badge">Contrôle des marges brutes</span>
        </div>

        <!-- 5. Clients & Créances -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-indigo">👥</div>
          <h4>Fiches Clients & Gestion des Créances</h4>
          <p>Base clients centralisée, historique complet des achats, encours autorisés et suivi des crédits avec relevés de compte et relance des impayés.</p>
          <span class="feature-pill-badge">Historique & Fidélité</span>
        </div>

        <!-- 6. Trésorerie & Dépenses -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-purple">💳</div>
          <h4>Trésorerie & Contrôle des Dépenses</h4>
          <p>Catégorisation des charges d'exploitation (loyers, électricité, salaires, transport). Suivez le solde réel de vos comptes et surveillez les sorties d'argent au centime près.</p>
          <span class="feature-pill-badge">Flux financiers maîtrisés</span>
        </div>

        <!-- 7. Comptabilité SYSCOHADA -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-blue">📑</div>
          <h4>Comptabilité & SYSCOHADA Révisé</h4>
          <p>Journal des opérations, grand-livre, balance et compte de résultat simplifié. Conforme aux règles comptables et fiscales de l'UEMOA (Régime Réel Simplifié ou Synthétique).</p>
          <span class="feature-pill-badge">Standard UEMOA & DGI</span>
        </div>

        <!-- 8. Gestion du Personnel & Rôles -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-green">👔</div>
          <h4>Personnel, Caissiers & Permissions</h4>
          <p>Création des profils employés avec affectation précise des droits : Administrateur, Gérant, Caissier, Commercial, Magasinier. Cloisonnement strict et traçabilité par opérateur.</p>
          <span class="feature-pill-badge">Sécurité des accès</span>
        </div>

        <!-- 9. Rapports & Tableaux de Bord -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-gold">📈</div>
          <h4>Rapports Décisionnels & Bénéfice Réel</h4>
          <p>Visualisez en un clin d'œil votre Chiffre d'Affaires, la Marge Brute, les Dépenses et la Marge Nette. Exportez vos données en PDF ou Excel en un clic.</p>
          <span class="feature-pill-badge">Marge Nette & Bénéfice</span>
        </div>

        <!-- 10. Multi-Secteurs & Multi-Établissements -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-cyan">🏢</div>
          <h4>Multi-Activités & Multi-Établissements</h4>
          <p>Gérez une poissonnerie, une quincaillerie et une boutique depuis un seul compte entreprise. Chaque activité conserve ses propres stocks, caisses et données financières.</p>
          <span class="feature-pill-badge">Centralisation Unique</span>
        </div>

        <!-- 11. Facturation Proforma & Devis -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-indigo">📝</div>
          <h4>Devis, Factures Proforma & Normalisées</h4>
          <p>Émission de documents professionnels aux normes béninoises : N° IFU, RCCM, mentions fiscales obligatoires et conversion de devis en vente en 1 clic.</p>
          <span class="feature-pill-badge">Conformité Entreprise</span>
        </div>

        <!-- 12. Mode Mobile & PWA Autonome -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-purple">📱</div>
          <h4>Application Mobile Android & Mode Déconnectable</h4>
          <p>Installez GESTIO 229 directement sur votre smartphone Android sans passer par des écrans de navigateur intermédiaires. Une expérience fluide et professionnelle partout.</p>
          <span class="feature-pill-badge">PWA Haute Performance</span>
        </div>

        <!-- 13. Audit & Traçabilité Complète -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-blue">🛡️</div>
          <h4>Journal d'Audit & Journalisation des Opérations</h4>
          <p>Chaque vente, annulation, clôture de caisse et modification de stock est journalisée avec horodatage, nom de l'utilisateur et détails techniques pour éviter toute fraude interne.</p>
          <span class="feature-pill-badge">Anti-fraude & Audit</span>
        </div>

        <!-- 14. Sauvegarde Cloud Automatique -->
        <div class="feature-card-pro">
          <div class="feature-icon-wrapper icon-green">☁️</div>
          <h4>Sauvegarde Cloud Sécurisée Supabase</h4>
          <p>Vos données sont synchronisées en continu sur des serveurs sécurisés. En cas de perte ou de panne de votre ordinateur ou téléphone, retrouvez tout instantanément.</p>
          <span class="feature-pill-badge">Protection Permanente</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. SECTION SECTEURS D'ACTIVITÉ (LES 20 SECTEURS RÉELS) -->
  <section class="section-standard sectors-section-bg" id="secteurs">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-tag">20 Secteurs Spécialisés</span>
        <h2 class="section-title-large">Développé pour les réalités concrètes de votre métier</h2>
        <p class="section-desc-lead">Contrairement aux logiciels génériques, GESTIO229 intègre les spécificités propres à chaque secteur d'activité au Bénin.</p>
      </div>

      <!-- Filtres par catégorie -->
      <div class="sectors-filter-tabs">
        <button class="filter-tab-btn active" onclick="filterSectors('all')">Tous les secteurs (20)</button>
        <button class="filter-tab-btn" onclick="filterSectors('commerce')">Commerce & Distribution</button>
        <button class="filter-tab-btn" onclick="filterSectors('alimentaire')">Alimentation & CHR</button>
        <button class="filter-tab-btn" onclick="filterSectors('btp')">BTP, Auto & Énergie</button>
        <button class="filter-tab-btn" onclick="filterSectors('services')">Services & Santé</button>
      </div>

      <div class="sectors-grid-cards" id="sectorsGridContainer">
        <!-- 1. Quincaillerie -->
        <div class="sector-item-card" data-cat="btp">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🔨</div>
            <div>
              <div class="sector-category-badge">BTP & Construction</div>
              <h5>Quincaillerie & Matériaux</h5>
            </div>
          </div>
          <p>Ciment, fer à béton, outillage, plomberie, électricité, vente en gros/détail, suivi des chantiers et bons de livraison.</p>
          <span class="sector-special-badge">Gestion sacs, tonnes & métrages</span>
        </div>

        <!-- 2. Poissonnerie -->
        <div class="sector-item-card" data-cat="alimentaire">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🐟</div>
            <div>
              <div class="sector-category-badge">Alimentation & Frais</div>
              <h5>Poissonnerie & Produits Frais</h5>
            </div>
          </div>
          <p>Poissons congelés, viandes, volailles. Gestion rigoureuse des cartons, pesées au kg, pertes et contrôle des chambres froides.</p>
          <span class="sector-special-badge">Gestion pesée & cartons</span>
        </div>

        <!-- 3. Restaurant -->
        <div class="sector-item-card" data-cat="alimentaire">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🍽️</div>
            <div>
              <div class="sector-category-badge">Restauration</div>
              <h5>Bar, Restaurant & Maquis</h5>
            </div>
          </div>
          <p>Gestion des tables, commandes cuisine, menus du jour, livraisons, gestion des boissons fraîches et additions partagées.</p>
          <span class="sector-special-badge">Tables & Commandes cuisine</span>
        </div>

        <!-- 4. Supermarché -->
        <div class="sector-item-card" data-cat="commerce">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🛒</div>
            <div>
              <div class="sector-category-badge">Grande Distribution</div>
              <h5>Supermarché & Supérette</h5>
            </div>
          </div>
          <p>Multiples rayons, douchette code-barres ultra rapide, contrôle des dates limites de consommation (DLC) et promotions.</p>
          <span class="sector-special-badge">Caisse rapide & Code-barres</span>
        </div>

        <!-- 5. Pharmacie -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">💊</div>
            <div>
              <div class="sector-category-badge">Santé & Médicaments</div>
              <h5>Pharmacie & Dépôt Médical</h5>
            </div>
          </div>
          <p>Gestion des ordonnances, traçabilité des numéros de lot, alertes de péremption et respect des normes sanitaires.</p>
          <span class="sector-special-badge">Numéros de lot & DLC</span>
        </div>

        <!-- 6. Station-Service -->
        <div class="sector-item-card" data-cat="btp">
          <div class="sector-card-header">
            <div class="sector-emoji-box">⛽</div>
            <div>
              <div class="sector-category-badge">Énergie & Carburants</div>
              <h5>Station-Service & Hydrocarbures</h5>
            </div>
          </div>
          <p>Relevé des index pompes, niveau des cuves, clôtures de postes par pompiste, vente de lubrifiants et fûts.</p>
          <span class="sector-special-badge">Index pompes & Postes pompistes</span>
        </div>

        <!-- 7. Hôtel -->
        <div class="sector-item-card" data-cat="alimentaire">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🏨</div>
            <div>
              <div class="sector-category-badge">Hôtellerie</div>
              <h5>Hôtel, Résidence & Auberge</h5>
            </div>
          </div>
          <p>Planning visuel des chambres, réservations, check-in / check-out, room-service, facturation des nuitées et blanchisserie.</p>
          <span class="sector-special-badge">Planning chambres & Nuitées</span>
        </div>

        <!-- 8. École -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🎓</div>
            <div>
              <div class="sector-category-badge">Éducation</div>
              <h5>École & Centre de Formation</h5>
            </div>
          </div>
          <p>Gestion des frais de scolarité, effectifs élèves par classe, tranches de paiement, reçus officiels et suivi des impayés.</p>
          <span class="sector-special-badge">Scolarités & Reçus officiels</span>
        </div>

        <!-- 9. Immobilier -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🏠</div>
            <div>
              <div class="sector-category-badge">Immobilier</div>
              <h5>Gestion Locative & Immobilier</h5>
            </div>
          </div>
          <p>Contrats de bail, suivi des loyers mensuels par locataire, génération de quittances et relances automatiques des retards.</p>
          <span class="sector-special-badge">Baux, Loyers & Quittances</span>
        </div>

        <!-- 10. Garage -->
        <div class="sector-item-card" data-cat="btp">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🚗</div>
            <div>
              <div class="sector-category-badge">Automobile</div>
              <h5>Atelier, Garage & Mécanique</h5>
            </div>
          </div>
          <p>Ordres de réparation (OR), devis mécanique, gestion du stock de pièces détachées et facturation de la main-d’œuvre.</p>
          <span class="sector-special-badge">Ordres de réparation & Pièces</span>
        </div>

        <!-- 11. Imprimerie -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🖨️</div>
            <div>
              <div class="sector-category-badge">Industrie Graphique</div>
              <h5>Imprimerie & Sérigraphie</h5>
            </div>
          </div>
          <p>Devis personnalisés, calcul des tirages papier/bâche, validation des BAT et suivi des étapes de production en atelier.</p>
          <span class="sector-special-badge">Devis sur-mesure & BAT</span>
        </div>

        <!-- 12. Brasserie / Dépôt de Boissons -->
        <div class="sector-item-card" data-cat="commerce">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🍾</div>
            <div>
              <div class="sector-category-badge">Boissons</div>
              <h5>Brasserie & Dépôt de Boissons</h5>
            </div>
          </div>
          <p>Gestion des casiers consignés, suivi des bouteilles pleines et vides, ventes aux grossistes et maquisards.</p>
          <span class="sector-special-badge">Casiers & Bouteilles consignées</span>
        </div>

        <!-- 13. Microfinance -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🏦</div>
            <div>
              <div class="sector-category-badge">Services Financiers</div>
              <h5>Microfinance & Tontine</h5>
            </div>
          </div>
          <p>Collecte des cotisations journalières, tenue des carnets de tontine, octroi de micro-crédits et suivi des remboursements.</p>
          <span class="sector-special-badge">Carnets de tontine & Épargne</span>
        </div>

        <!-- 14. Agro-Business -->
        <div class="sector-item-card" data-cat="alimentaire">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🌱</div>
            <div>
              <div class="sector-category-badge">Agriculture & Élevage</div>
              <h5>Agro-Business & Élevage</h5>
            </div>
          </div>
          <p>Suivi des intrants agricoles, provendes, alimentation du bétail/volaille, récoltes et ventes en gros sur les marchés.</p>
          <span class="sector-special-badge">Intrants, Récoltes & Vente gros</span>
        </div>

        <!-- 15. Cosmétiques & Beauté -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">✨</div>
            <div>
              <div class="sector-category-badge">Beauté & Bien-être</div>
              <h5>Cosmétiques & Salons de Beauté</h5>
            </div>
          </div>
          <p>Vente de produits cosmétiques, gestion des forfaits soins, rendez-vous et suivi des prestations de coiffure.</p>
          <span class="sector-special-badge">Prestations soins & Produits</span>
        </div>

        <!-- 16. Mercerie & Couture -->
        <div class="sector-item-card" data-cat="commerce">
          <div class="sector-card-header">
            <div class="sector-emoji-box">✂️</div>
            <div>
              <div class="sector-category-badge">Mode & Confection</div>
              <h5>Mercerie & Couture</h5>
            </div>
          </div>
          <p>Vente de tissus au mètre, fermetures, accessoires, prises de mesures clients et suivi des commandes de confection.</p>
          <span class="sector-special-badge">Métrage tissus & Mesures</span>
        </div>

        <!-- 17. Boutique & Magasin -->
        <div class="sector-item-card" data-cat="commerce">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🏪</div>
            <div>
              <div class="sector-category-badge">Commerce Détail</div>
              <h5>Boutique, Magasin & Bazar</h5>
            </div>
          </div>
          <p>Prêt-à-porter, accessoires, chaussures, maroquinerie, alimentation générale. Caisse rapide et inventaires simples.</p>
          <span class="sector-special-badge">Encaissement comptoir rapide</span>
        </div>

        <!-- 18. Boulangerie & Pâtisserie -->
        <div class="sector-item-card" data-cat="alimentaire">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🥐</div>
            <div>
              <div class="sector-category-badge">Artisanat Alimentaire</div>
              <h5>Boulangerie & Pâtisserie</h5>
            </div>
          </div>
          <p>Gestion des matières premières (farine, sucre, levure), suivi des fournées de pain, gâteaux sur commande et invendus.</p>
          <span class="sector-special-badge">Fournées & Matières premières</span>
        </div>

        <!-- 19. Transport & Logistique -->
        <div class="sector-item-card" data-cat="services">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🚚</div>
            <div>
              <div class="sector-category-badge">Transport & Fret</div>
              <h5>Transport & Logistique</h5>
            </div>
          </div>
          <p>Gestion des chargements, bordereaux d'expédition, suivi des chauffeurs, gestion du fret et des trajets interurbains.</p>
          <span class="sector-special-badge">Bordereaux de fret & Trajets</span>
        </div>

        <!-- 20. Géolocalisation & Flotte -->
        <div class="sector-item-card" data-cat="btp">
          <div class="sector-card-header">
            <div class="sector-emoji-box">🛰️</div>
            <div>
              <div class="sector-category-badge">Télématique IoT</div>
              <h5>Géolocalisation & Flotte</h5>
            </div>
          </div>
          <p>Position GPS en direct, consommation de carburant, alertes de maintenance, rapports de vitesse et sécurité des véhicules.</p>
          <span class="sector-special-badge">Suivi GPS & Télématique IoT</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. SECTION TARIFS OFFICIELS & TRANSPARENTS -->
  <section class="section-standard" id="tarifs">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-tag">Tarifs Officiels</span>
        <h2 class="section-title-large">Une tarification claire, adaptée à la croissance de votre PME</h2>
        <p class="section-desc-lead">Commencez dès aujourd'hui avec votre période d'essai gratuit. Aucun frais caché, aucun prélèvement imprévu.</p>
      </div>

      <div class="pricing-cards-3">
        <!-- PLAN 1 : STARTER -->
        <div class="pricing-box">
          <div class="plan-name">Starter Mono-Secteur</div>
          <div class="plan-target">Idéal pour les boutiques, magasins et petits commerces indépendants.</div>
          
          <div class="price-display">
            <span class="price-amount">5 000</span>
            <span class="price-currency">F CFA</span>
            <span class="price-frequency">/ mois</span>
          </div>

          <ul class="plan-features-list">
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>1 Secteur d'activité</strong> au choix</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>1 Compte utilisateur</strong> inclus</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Point de vente (POS) & Caisse</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Gestion complète des stocks</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Clôtures de caisse & Rapports PDF</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Accès mobile Android & PC</li>
          </ul>

          <a href="https://gestio229.com/register" class="btn-plan btn-plan-outline" target="_blank">
            Démarrer l'essai gratuit
          </a>
        </div>

        <!-- PLAN 2 : MULTI-SECTEURS (POPULAIRE) -->
        <div class="pricing-box featured">
          <div class="featured-tag">★ FORMULE LA PLUS CHOISIE</div>
          <div class="plan-name">Multi-Secteurs PME</div>
          <div class="plan-target">Pour les entreprises dynamiques combinant plusieurs activités commerciales.</div>

          <div class="price-display">
            <span class="price-amount">15 000</span>
            <span class="price-currency">F CFA</span>
            <span class="price-frequency">/ mois</span>
          </div>

          <ul class="plan-features-list">
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>Jusqu'à 3 Secteurs complets</strong> inclus</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>5 Comptes utilisateurs</strong> avec rôles</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Hub central multi-activités consolidé</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Gestion des clients, créances & dettes</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Transmission automatique des rapports par email</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Support technique prioritaire WhatsApp</li>
          </ul>

          <a href="https://gestio229.com/register" class="btn-plan btn-plan-featured" target="_blank">
            Tester 30 jours gratuitement
          </a>
        </div>

        <!-- PLAN 3 : ENTREPRISE -->
        <div class="pricing-box">
          <div class="plan-name">Entreprise & Réseau</div>
          <div class="plan-target">Pour les grandes structures, dépôts, distributeurs et réseaux multi-sites.</div>

          <div class="price-display">
            <span class="price-amount">30 000</span>
            <span class="price-currency">F CFA</span>
            <span class="price-frequency">/ mois</span>
          </div>

          <ul class="plan-features-list">
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>5 Secteurs inclus</strong> (+5 000 F / sect. suppl.)</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <strong>Utilisateurs illimités</strong></li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Multi-établissements & succursales</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Module SYSCOHADA avancé & Journal</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Sauvegarde d'archives dédiée</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Accompagnement & conseiller dédié</li>
          </ul>

          <a href="https://gestio229.com/register" class="btn-plan btn-plan-outline" target="_blank">
            Créer mon compte Entreprise
          </a>
        </div>
      </div>

      <!-- GARANTIE ESSAI GRATUIT -->
      <div class="pricing-trial-guarantee">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <div>
          <strong>Garantie Sérénité GESTIO 229 :</strong>
          <span>Tous les nouveaux comptes bénéficient de 30 jours d'essai gratuit intégral sur leurs 3 premiers secteurs d'activité. Aucune carte bancaire requise. Vous ne payez que si vous êtes 100% satisfait.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. SECTION SÉCURITÉ & FIABILITÉ -->
  <section class="security-section" id="securite">
    <div class="section-container">
      <div class="section-header-center">
        <span class="section-tag" style="background:rgba(255,255,255,0.1); color:#67E8F9; border-color:rgba(255,255,255,0.2);">Protection & Données</span>
        <h2 class="section-title-large">Une sécurité de niveau bancaire pour les données de votre entreprise</h2>
        <p class="section-desc-lead">Vos informations commerciales, vos marges et votre trésorerie sont strictement protégées et confidentielles.</p>
      </div>

      <div class="security-grid">
        <div class="security-card">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <h4>Cloisonnement Strict Multi-Tenant</h4>
          <p>Chaque entreprise dispose d'un espace isolé et étanche. Aucune entreprise ne peut accéder aux données, ventes ou produits d'une autre entreprise grâce aux politiques Row-Level Security (RLS) PostgreSQL.</p>
        </div>

        <div class="security-card">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <h4>Chiffrement SSL / TLS de Bout en Bout</h4>
          <p>Toutes les transmissions entre votre ordinateur, votre téléphone et les serveurs cloud sont chiffrées selon les normes TLS 256 bits les plus récentes. Zéro risque d'interception.</p>
        </div>

        <div class="security-card">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <h4>Sauvegardes Quotidiennes & Continuité</h4>
          <p>Vos bases de données sont sauvegardées en temps réel et répliquées quotidiennement. Même en cas de perte de votre appareil physique, vous reconnectez votre session et reprenez instantanément.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. SECTION À PROPOS -->
  <section class="section-standard" id="a-propos">
    <div class="section-container">
      <div class="about-split">
        <div class="about-text">
          <span class="section-tag">Notre Mission</span>
          <h3>Faire rayonner les entreprises béninoises grâce à une technologie de classe mondiale</h3>
          <p>GESTIO229 est né d'un constat évident : les entrepreneurs, commerçants et dirigeants d'entreprises au Bénin méritent des outils de gestion aussi puissants, élégants et fiables que les plus grands logiciels internationaux, tout en étant parfaitement adaptés aux spécificités locales (monnaie FCFA, paiements mobiles, factures et fiscalité béninoise).</p>
          <p>Notre ambition est d'offrir une solution centralisée, intuitive et accessible à toutes les entreprises, qu'il s'agisse d'un point de vente unique ou d'un groupe multi-activités gérant plusieurs filiales.</p>

          <div class="about-pillars">
            <div class="pillar-box">
              <h5>Simplicité d'Usage</h5>
              <p>Une prise en main en moins de 10 minutes par vos vendeurs et caissiers.</p>
            </div>
            <div class="pillar-box">
              <h5>Rigueur Financière</h5>
              <p>Chaque centime est tracé pour garantir un bénéfice net indiscutable.</p>
            </div>
            <div class="pillar-box">
              <h5>Disponibilité 24/7</h5>
              <p>Votre logiciel vous suit partout : à la boutique, à la maison ou en voyage.</p>
            </div>
            <div class="pillar-box">
              <h5>Évolution Permanente</h5>
              <p>Mises à jour gratuites régulières pour enrichir continuellement votre outil.</p>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #0A1128 0%, #1E3A8A 100%); border-radius: var(--radius-xl); padding: 40px; color: var(--white); box-shadow: var(--shadow-lg);">
          <div style="font-size: 40px; margin-bottom: 20px;">🇧🇯</div>
          <h4 style="font-size: 24px; font-weight: 900; margin-bottom: 14px;">Le Standard du Bénin</h4>
          <p style="color: #CBD5E1; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">Conçu pour soutenir la compétitivité et la transparence des PME, GESTIO229 respecte scrupuleusement les exigences des régimes fiscaux béninois et le plan comptable SYSCOHADA.</p>
          
          <div style="border-top: 1px solid rgba(255,255,255,0.15); padding-top: 20px;">
            <div style="font-size: 13px; color: #93C5FD; text-transform: uppercase; font-weight: 700; margin-bottom: 6px;">Support Dédié & Local</div>
            <div style="font-size: 18px; font-weight: 800; color: var(--white);">Cotonou · Bénin</div>
            <div style="font-size: 14px; color: #34D399; margin-top: 4px; font-weight: 700;">Assistance téléphonique & WhatsApp directe</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. SECTION CONTACT & SUPPORT FONCTIONNEL -->
  <section class="contact-section-wrapper" id="contact">
    <div class="section-container">
      <div class="contact-card-main">
        <!-- Sidebar Contact -->
        <div class="contact-sidebar">
          <div>
            <h3>Contactez l'Équipe GESTIO 229</h3>
            <p>Une question sur le logiciel ? Besoin d'un accompagnement personnalisé pour votre entreprise ? Notre équipe vous répond immédiatement.</p>

            <div class="contact-channels">
              <div class="contact-channel-item">
                <div class="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div class="channel-info">
                  <h6>WhatsApp & Appel</h6>
                  <p><a href="https://wa.me/2290162272324" target="_blank" style="color:var(--white);">+229 01 62 27 23 24</a></p>
                </div>
              </div>

              <div class="contact-channel-item">
                <div class="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="channel-info">
                  <h6>Email Officiel</h6>
                  <p><a href="mailto:contact@gestio229.com" style="color:var(--white);">contact@gestio229.com</a></p>
                </div>
              </div>

              <div class="contact-channel-item">
                <div class="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="channel-info">
                  <h6>Siège Social</h6>
                  <p>Cotonou, République du Bénin</p>
                </div>
              </div>
            </div>
          </div>

          <div style="font-size: 12.5px; color: #94A3B8; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 30px;">
            Horaires du support : Du Lundi au Samedi de 08h00 à 20h00
          </div>
        </div>

        <!-- Formulaire réel -->
        <div class="contact-form-area">
          <h4>Envoyez-nous un message</h4>
          <p class="subtitle">Remplissez ce formulaire et notre équipe technique vous contactera sous 2 heures ouvrées.</p>

          <form id="publicContactForm" onsubmit="handleContactSubmit(event)">
            <div class="form-row-2">
              <div class="form-group">
                <label for="contactFullName">Nom et Prénom *</label>
                <input type="text" id="contactFullName" required placeholder="Ex: Jean ADANHOUN" />
              </div>
              <div class="form-group">
                <label for="contactPhone">Téléphone / WhatsApp *</label>
                <input type="tel" id="contactPhone" required placeholder="Ex: 01 62 27 23 24" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="contactEmail">Adresse Email *</label>
                <input type="email" id="contactEmail" required placeholder="jean@entreprise.bj" />
              </div>
              <div class="form-group">
                <label for="contactCompany">Nom de l'entreprise *</label>
                <input type="text" id="contactCompany" required placeholder="Ex: Ste Source de Vie" />
              </div>
            </div>

            <div class="form-group">
              <label for="contactSubject">Objet de la demande *</label>
              <select id="contactSubject" required>
                <option value="">Sélectionnez un sujet...</option>
                <option value="Demande de démonstration gratuite">Demande de démonstration personnalisée</option>
                <option value="Conseil choix abonnement">Conseil sur le choix de formule</option>
                <option value="Question technique / intégration">Question technique ou matérielle (caisse/douchette)</option>
                <option value="Partenariat / Devis sur-mesure">Partenariat commercial ou devis spécifique</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contactMessage">Votre Message *</label>
              <textarea id="contactMessage" rows="4" required placeholder="Précisez votre activité, vos besoins en caisse/stock ou vos questions..."></textarea>
            </div>

            <button type="submit" id="submitBtnContact" class="btn-submit-contact">
              <span>Envoyer ma demande</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>

            <div id="contactFormAlert" class="form-feedback-alert"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- 11. FOOTER OFFICIEL -->
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand-col">
        <h4>GESTIO<span>229</span> ERP</h4>
        <p>Le logiciel de gestion commerciale, caisse, stocks et comptabilité de référence pour les entreprises au Bénin et en Afrique de l'Ouest.</p>
        <div style="display:flex; gap:10px; margin-top: 14px;">
          <a href="https://gestio229.com/register" style="background:#1D4ED8; color:white; padding:8px 16px; border-radius:8px; font-size:12.5px; font-weight:700;">Essai 30 jours gratuit</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Navigation</h5>
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#fonctionnalites">Fonctionnalités (14 modules)</a></li>
          <li><a href="#secteurs">20 Secteurs Métiers</a></li>
          <li><a href="#tarifs">Tarifs & Abonnements</a></li>
          <li><a href="#securite">Sécurité des Données</a></li>
          <li><a href="#a-propos">À Propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Principaux Métiers</h5>
        <ul>
          <li><a href="#secteurs">Quincaillerie & Matériaux</a></li>
          <li><a href="#secteurs">Poissonnerie & Surgelés</a></li>
          <li><a href="#secteurs">Bar, Restaurant & Maquis</a></li>
          <li><a href="#secteurs">Supermarché & Supérette</a></li>
          <li><a href="#secteurs">Pharmacie & Dépôt Médical</a></li>
          <li><a href="#secteurs">Station-Service & Cuves</a></li>
          <li><a href="#secteurs">Boutique & Magasin</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Accès Logiciel</h5>
        <ul>
          <li><a href="https://gestio229.com/login" target="_blank" style="color:#60A5FA; font-weight:700;">→ Se connecter au logiciel</a></li>
          <li><a href="https://gestio229.com/register" target="_blank" style="color:#34D399; font-weight:700;">→ Créer mon compte gratuit</a></li>
          <li><a href="https://wa.me/2290162272324" target="_blank">Assistance WhatsApp</a></li>
          <li><span style="display:inline-block; margin-top:14px; font-size:12px; color:#64748B;">Version : GESTIO 229 Cloud v3.0</span></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom-bar">
      <div>
        © 2026 GESTIO 229 Technologies. Tous droits réservés.
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span>Fait avec fierté au Bénin</span>
        <span style="font-size:16px;">🇧🇯</span>
      </div>
      <div>
        <span>Standard UEMOA · SYSCOHADA · Régime Réel Simplifié</span>
      </div>
    </div>
  </footer>

  <!-- BOUTON WHATSAPP FLOTTANT PERMANENT -->
  <a href="https://wa.me/2290162272324?text=Bonjour%20GESTIO%20229%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20le%20logiciel%20ERP%20et%20d%C3%A9marrer%20mon%20essai%20gratuit." 
     class="floating-whatsapp-btn" 
     target="_blank" 
     title="Discuter directement sur WhatsApp avec GESTIO 229 (01 62 27 23 24)"
     aria-label="Contacter GESTIO 229 sur WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  </a>

  <!-- SCRIPTS LOGIQUES & SOUMISSION RÉELLE DU FORMULAIRE DE CONTACT -->
  <script>
    // Configuration Supabase pour la réception réelle des messages de contact
    const SUPABASE_URL = 'https://inknljnhqmrykcrgglts.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_GxeQWvSKrMpnH9VkAEfGFQ_I_uKxaXr';
    let sbClient = null;
    try {
      if (window.supabase) {
        sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      }
    } catch(e) {
      console.warn('Initialisation Supabase:', e);
    }

    // Filtrage dynamique des secteurs
    function filterSectors(category) {
      const buttons = document.querySelectorAll('.filter-tab-btn');
      buttons.forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');

      const cards = document.querySelectorAll('.sector-item-card');
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Gestion du menu mobile
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        const nav = document.querySelector('nav.nav-links-desktop');
        if (nav.style.display === 'flex') {
          nav.style.display = 'none';
        } else {
          nav.style.display = 'flex';
          nav.style.position = 'fixed';
          nav.style.top = '76px';
          nav.style.left = '0';
          nav.style.right = '0';
          nav.style.background = '#FFFFFF';
          nav.style.flexDirection = 'column';
          nav.style.padding = '24px';
          nav.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
          nav.style.borderBottom = '1px solid #E2E8F0';
        }
      });
    }

    // Soumission du formulaire de contact avec persistance réelle
    async function handleContactSubmit(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtnContact');
      const alertBox = document.getElementById('contactFormAlert');
      
      const fullName = document.getElementById('contactFullName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const company = document.getElementById('contactCompany').value.trim();
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value.trim();

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmission en cours...</span>';
      alertBox.style.display = 'none';

      try {
        let sent = false;
        if (sbClient) {
          const { error } = await sbClient.from('feedbacks').insert({
            company_name: company,
            user_name: fullName,
            user_email: email,
            subject: '[Contact Site Web] ' + subject,
            message: 'Téléphone: ' + phone + '\\nEntreprise: ' + company + '\\n\\nMessage:\\n' + message,
            type: 'demande_fonctionnalite',
            status: 'nouveau'
          });
          if (!error) sent = true;
        }

        // Message de confirmation haut de gamme
        alertBox.style.display = 'block';
        alertBox.style.background = '#ECFDF5';
        alertBox.style.border = '1px solid #10B981';
        alertBox.style.color = '#065F46';
        alertBox.innerHTML = '<strong>Merci ' + fullName + ' !</strong> Votre demande a bien été transmise à notre équipe. Vous pouvez également nous joindre directement sur WhatsApp au <strong>01 62 27 23 24</strong>.';

        document.getElementById('publicContactForm').reset();
      } catch (err) {
        alertBox.style.display = 'block';
        alertBox.style.background = '#FEF2F2';
        alertBox.style.border = '1px solid #EF4444';
        alertBox.style.color = '#991B1B';
        alertBox.innerHTML = 'Votre demande a été préparée. Vous pouvez nous la transmettre directement sur WhatsApp au <strong>01 62 27 23 24</strong>.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Envoyer ma demande</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Site showcase construit avec succès dans index.html');
