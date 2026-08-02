import {
  ArrowUp,
  ArrowUpRight,
  Flower2,
  Mail,
  MapPin,
} from "lucide-react";
import { company, footerLinks, navigation } from "../../data/floralData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand">
              <span className="footer-brand-mark">
                <Flower2 size={24} strokeWidth={1.5} />
              </span>

              <span>
                <strong>{company.name}</strong>
                <small>{company.tagline}</small>
              </span>
            </a>

            <p>
              Refined floral design for weddings, events, custom
              arrangements, and professional supplier partnerships.
            </p>

            <a href="#contact" className="footer-inquiry-link">
              <span>Begin an inquiry</span>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-column-label">Explore</span>

            <div className="footer-links">
              {navigation.map((item) => (
                <a key={item.title} href={item.href}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-column-label">Specialties</span>

            <div className="footer-links">
              {footerLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="footer-column footer-contact-column">
            <span className="footer-column-label">Contact</span>

            <a
              href={`mailto:${company.email}`}
              className="footer-contact-link"
            >
              <Mail size={17} strokeWidth={1.6} />
              <span>{company.email}</span>
            </a>

            <div className="footer-contact-link">
              <MapPin size={17} strokeWidth={1.6} />
              <span>{company.location}</span>
            </div>

            <a
              href="#contact"
              className="footer-contact-link"
              aria-label="Business inquiries"
            >
              <ArrowUpRight size={17} strokeWidth={1.6} />
              <span>Business inquiries</span>
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} {company.name}. All rights reserved.
          </p>

          <div className="footer-bottom-center">
            <span>Professional Floral Design Studio</span>

            <span className="footer-dot" />

            <span>Michigan, United States</span>
          </div>

          <a href="#home" className="footer-back-to-top">
            <span>Back to top</span>
            <ArrowUp size={17} strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;