import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from 'lucide-react'
import logoImage from '../assets/logo.png'

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

function SignupPage() {
  return (
    <div className="page-shell signup-shell">
      <header className="site-header signup-header">
        <div className="brand">
          <img src={logoImage} alt="OuvriSafe Logo" className="brand-logo-img" />
        </div>
        <Link className="btn btn-secondary btn-small" to="/">
          <ArrowLeft size={18} strokeWidth={2} />
          Retour a l'accueil
        </Link>
      </header>

      <main className="signup-page">
        <section className="signup-intro">
          <div className="section-tag">Inscription</div>
          <h1>Creer votre compte OuvriSafe</h1>
          <p>
            Lancez votre espace en quelques minutes pour suivre vos equipes, securiser vos
            chantiers et centraliser vos alertes.
          </p>

          <div className="signup-benefits">
            <div className="signup-benefit">
              <ShieldCheck size={20} strokeWidth={2} />
              <span>Activation rapide de votre espace</span>
            </div>
            <div className="signup-benefit">
              <Building2 size={20} strokeWidth={2} />
              <span>Configuration adaptee aux entreprises du BTP</span>
            </div>
            <div className="signup-benefit">
              <User size={20} strokeWidth={2} />
              <span>Ajout facile des responsables et des equipes</span>
            </div>
          </div>
        </section>

        <section className="signup-card">
          <div className="section-heading">
            <h2>Demarrer maintenant</h2>
            <p>Remplissez ce formulaire pour demander l'ouverture de votre compte.</p>
          </div>

          <form className="signup-form">
            <label className="form-field">
              <span>Nom complet</span>
              <div className="field-input">
                <User size={18} strokeWidth={2} />
                <input type="text" name="fullName" placeholder="Votre nom complet" />
              </div>
            </label>

            <label className="form-field">
              <span>Entreprise</span>
              <div className="field-input">
                <Building2 size={18} strokeWidth={2} />
                <input type="text" name="company" placeholder="Nom de l'entreprise" />
              </div>
            </label>

            <label className="form-field">
              <span>Email professionnel</span>
              <div className="field-input">
                <Mail size={18} strokeWidth={2} />
                <input type="email" name="email" placeholder="vous@entreprise.com" />
              </div>
            </label>

            <label className="form-field">
              <span>Telephone</span>
              <div className="field-input">
                <Phone size={18} strokeWidth={2} />
                <input type="tel" name="phone" placeholder="+221 77 000 00 00" />
              </div>
            </label>

            <label className="form-field">
              <span>Nombre d'ouvriers a suivre</span>
              <div className="field-input">
                <Building2 size={18} strokeWidth={2} />
                <select name="workers">
                  <option>1 a 10</option>
                  <option>11 a 50</option>
                  <option>51 a 200</option>
                  <option>Plus de 200</option>
                </select>
              </div>
            </label>

            <label className="form-field">
              <span>Besoin principal</span>
              <textarea
                name="need"
                rows="4"
                placeholder="Decrivez votre besoin principal ou votre chantier."
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Envoyer ma demande
            </button>
          </form>
        </section>

        <section className="signup-support">
          <div className="section-heading">
            <h2>Besoin d'aide avant de vous inscrire ?</h2>
            <p>
              Notre equipe vous accompagne pour choisir la configuration la plus adaptee a votre
              chantier.
            </p>
          </div>

          <div className="signup-support-grid">
            <div className="signup-support-card">
              <Phone size={20} strokeWidth={2} />
              <div>
                <strong>Telephone</strong>
                <span>+221 762969690</span>
              </div>
            </div>
            <div className="signup-support-card">
              <Mail size={20} strokeWidth={2} />
              <div>
                <strong>Email</strong>
                <span>ouvrisafe@contact.com</span>
              </div>
            </div>
            <div className="signup-support-card">
              <Building2 size={20} strokeWidth={2} />
              <div>
                <strong>Localisation</strong>
                <span>Dakar, Senegal</span>
              </div>
            </div>
          </div>

          <div className="signup-socials">
            {socialLinks.map((item) => (
              <a className="social-link social-link-light" href={item.href} key={item.label}>
                <span className={`social-icon social-icon-${item.platform}`}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
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
            <p>ouvrisafe@contact.com</p>
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

export default SignupPage
