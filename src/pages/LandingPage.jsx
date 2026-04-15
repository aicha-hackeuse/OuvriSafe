import { Link } from 'react-router-dom'
import heroIllustration from '../assets/Ouvrisafe photo.jpg'
import logoImage from '../assets/logo.png'
import {
  TriangleAlert,
  EyeOff,
  Users,
  ShieldCheck,
  Lightbulb,
  Zap,
  MapPin,
  BellRing,
  LayoutDashboard,
  FileWarning,
  BarChart3,
  TrendingDown,
  Clock,
  Layers,
  Phone,
  Mail,
  MessageCircle,
  UserPlus,
  Target,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BadgeCheck,
} from 'lucide-react'

const problemCards = [
  {
    icon: <TriangleAlert size={28} strokeWidth={1.5} />,
    title: 'Accidents frequents',
    text: "Anticipez les risques avant qu'ils ne deviennent des incidents sur le terrain.",
  },
  {
    icon: <EyeOff size={28} strokeWidth={1.5} />,
    title: 'Manque de suivi en temps reel',
    text: 'Suivez vos equipes et recevez des alertes en quelques secondes.',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Mauvaise gestion des equipes',
    text: 'Centralisez la coordination de vos ouvriers sur une seule plateforme.',
  },
]

const solutionCards = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Securise',
    text: 'Protegez les donnees et les ouvriers a chaque instant.',
  },
  {
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: 'Innovante',
    text: 'Technologies de suivi avancees et intuitives.',
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: 'Efficace',
    text: 'Resultats immediats et mesurables pour vos chantiers.',
  },
]

const features = [
  {
    icon: <MapPin size={28} strokeWidth={1.5} />,
    title: 'Suivi des ouvriers en temps reel',
    text: 'Localisez chaque ouvrier sur le chantier grace a la geolocalisation intelligente.',
  },
  {
    icon: <BellRing size={28} strokeWidth={1.5} />,
    title: 'Alertes de securite',
    text: 'Recevez des notifications instantanees en cas de danger ou de situation anormale.',
  },
  {
    icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
    title: 'Tableau de bord intelligent',
    text: 'Visualisez toutes les donnees de securite depuis une interface centralisee.',
  },
  {
    icon: <FileWarning size={28} strokeWidth={1.5} />,
    title: 'Gestion des incidents',
    text: 'Declarez, suivez et analysez les incidents pour ameliorer la prevention.',
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: 'Rapports et statistiques',
    text: 'Generez des rapports detailles pour piloter la securite de vos chantiers.',
  },
]

const processSteps = [
  {
    icon: <UserPlus size={28} strokeWidth={1.5} />,
    title: 'Inscription',
    text: 'Creez votre compte en quelques minutes.',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Ajout des ouvriers',
    text: 'Importez vos equipes facilement.',
  },
  {
    icon: <Target size={28} strokeWidth={1.5} />,
    title: 'Suivi en temps reel',
    text: 'Surveillez vos zones et les deplacements en direct.',
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: 'Analyse des donnees',
    text: 'Prenez des decisions eclairees rapidement.',
  },
]

const benefits = [
  {
    icon: <TrendingDown size={28} strokeWidth={1.5} />,
    title: 'Reduction des accidents',
    text: 'Anticipez les risques et reduisez significativement les incidents sur chantier.',
  },
  {
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: 'Gain de temps',
    text: 'Automatisez le suivi et concentrez-vous sur les operations essentielles.',
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: 'Meilleure organisation',
    text: 'Structurez la gestion de vos equipes et de vos zones de travail.',
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: 'Decisions basees sur les donnees',
    text: 'Exploitez des analyses precises pour ameliorer continuellement la securite.',
  },
]

function LinkedinLogo(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  )
}

const contacts = [
  { icon: <MapPin size={18} strokeWidth={2} />, label: 'Dakar, Senegal' },
  { icon: <Phone size={18} strokeWidth={2} />, label: '+221 762969690' },
  { icon: <Mail size={18} strokeWidth={2} />, label: 'ouvrisafe@contact.com' },
  { icon: <LinkedinLogo width={18} height={18} />, label: 'LinkedIn' },
  { icon: <MessageCircle size={18} strokeWidth={2} />, label: 'WhatsApp' },
]

const heroHighlights = [
  'Suivi terrain en direct',
  'Alertes de securite immediates',
  'Pilotage centralise des equipes',
]

function SocialLogo({ platform }) {
  if (platform === 'instagram') {
    return (
      <svg className="social-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    )
  }

  if (platform === 'facebook') {
    return (
      <svg className="social-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.5-.1-1.4-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v7h3.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg className="social-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 7h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 16v-3.3c0-1.3.8-2.2 2-2.2s2 .9 2 2.2V16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const socialLinks = [
  { icon: <SocialLogo platform="instagram" />, label: 'Instagram', href: '#', platform: 'instagram' },
  { icon: <SocialLogo platform="facebook" />, label: 'Facebook', href: '#', platform: 'facebook' },
  { icon: <SocialLogo platform="linkedin" />, label: 'LinkedIn', href: '#', platform: 'linkedin' },
]

function SectionTag({ children }) {
  return <div className="section-tag">{children}</div>
}

function Card({ icon, title, text, dark = false, compact = false }) {
  return (
    <article className={`card ${dark ? 'card-dark' : ''} ${compact ? 'card-compact' : ''}`}>
      <div className="icon-badge">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function LandingPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSectionLink = (sectionId) => (event) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand">
          <img src={logoImage} alt="OuvriSafe Logo" className="brand-logo-img" />
        </div>
        <nav className="nav-links">
          <button type="button" onClick={handleSectionLink('features')}>
            Fonctionnalites
          </button>
          <button type="button" onClick={handleSectionLink('process')}>
            Comment ca marche
          </button>
          <button type="button" onClick={handleSectionLink('benefits')}>
            Avantages
          </button>
          <button type="button" onClick={handleSectionLink('contact')}>
            Contact
          </button>
        </nav>
        <button type="button" className="btn btn-primary btn-small" onClick={handleSectionLink('contact')}>
          Demander une demo
        </button>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <SectionTag>Securite intelligente</SectionTag>
            <h1>
              Securiser vos chantiers <span>intelligemment</span>
            </h1>
            <p>
              Solution digitale pour proteger les ouvriers et prevenir les risques sur vos
              chantiers en temps reel.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-secondary" onClick={handleSectionLink('features')}>
                Decouvrir
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSectionLink('contact')}>
                Demander une demo
              </button>
            </div>
            <div className="hero-highlights">
              {heroHighlights.map((item) => (
                <div className="hero-highlight" key={item}>
                  <BadgeCheck size={18} strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="hero-media-card hero-media-card-top">
              <Sparkles size={16} strokeWidth={2.2} />
              <span>Surveillance proactive</span>
            </div>
            <div className="hero-photo-frame">
              <img src={heroIllustration} alt="Illustration de deux ouvriers sur un chantier" />
            </div>
            <div className="hero-media-card hero-media-card-bottom">
              <div>
                <strong>24/7</strong>
                <span>Visibilite chantier</span>
              </div>
              <ArrowRight size={18} strokeWidth={2.2} />
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="section-heading centered">
            <h2>
              Le probleme <span>aujourd&apos;hui</span>
            </h2>
            <p>
              Les chantiers font face a des defis majeurs en matiere de securite et de gestion.
            </p>
          </div>
          <div className="grid grid-3">
            {problemCards.map((item) => (
              <Card key={item.title} {...item} dark />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading centered narrow">
            <SectionTag>La solution</SectionTag>
            <h2>
              Decouvrez <span>OUVRISAFE</span>
            </h2>
            <p>
              Une plateforme innovante, simple et efficace pour la securite de vos chantiers.
              OuvriSafe combine technologie de pointe et facilite d&apos;utilisation pour proteger
              vos equipes au quotidien.
            </p>
          </div>
          <div className="grid grid-3">
            {solutionCards.map((item) => (
              <Card key={item.title} {...item} compact />
            ))}
          </div>
        </section>

        <section className="section section-soft" id="features">
          <div className="section-heading centered narrow">
            <SectionTag>Fonctionnalites</SectionTag>
            <h2>
              Tout ce dont vous avez <span>besoin</span>
            </h2>
            <p>Des outils puissants pour securiser vos chantiers et proteger vos equipes.</p>
          </div>
          <div className="grid grid-3 features-grid">
            {features.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading centered narrow">
            <SectionTag>Processus</SectionTag>
            <h2>
              Comment ca <span>marche ?</span>
            </h2>
          </div>
          <div className="steps-grid">
            {processSteps.map((item) => (
              <article className="step-card" key={item.title}>
                <div className="step-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="benefits">
          <div className="section-heading centered narrow">
            <SectionTag>Avantages</SectionTag>
            <h2>
              Pourquoi choisir <span>OUVRISAFE ?</span>
            </h2>
          </div>
          <div className="grid grid-2">
            {benefits.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="section-heading centered">
            <h2>
              Pret a securiser vos <span>chantiers?</span>
            </h2>
            <p>
              Rejoignez les entreprises qui font confiance a OuvriSafe pour proteger leurs
              equipes.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-secondary btn-wide" to="/inscription">
              Commencer maintenant
            </Link>
            <button type="button" className="btn btn-primary btn-wide" onClick={handleSectionLink('features')}>
              Tester la plateforme
            </button>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading centered narrow">
            <SectionTag>Contact</SectionTag>
            <h2>
              Restons en <span>contact</span>
            </h2>
            <p>Une question ? Un projet ? N&apos;hesitez pas a nous contacter.</p>
          </div>
          <div className="contact-panel">
            <div className="contact-strip">
              {contacts.map((item) => (
                <div className="contact-chip" key={item.label}>
                  <span className="mini-icon">{item.icon}</span>
                  <span className="contact-chip-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <img src={logoImage} alt="OuvriSafe Logo" className="brand-logo-img" />
            </div>
            <p>
              Solution digitale innovante pour la securite des ouvriers et la gestion des risques
              sur les chantiers.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+221 762969690</p>
            <p>Dakar, Senegal</p>
          </div>
          <div>
            <h4>Reseaux sociaux</h4>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a className="social-link" href={item.href} key={item.label}>
                  <span className={`social-icon social-icon-${item.platform}`}>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 OuvriSafe. Tous droits reserves.</div>
      </footer>
    </div>
  )
}

export default LandingPage
