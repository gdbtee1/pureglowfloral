import {
  ArrowDown,
  ArrowUpRight,
  Flower2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { company } from "../../data/floralData";

const heroImage =
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=90";

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="hero-background-image"
        />
        <div className="hero-background-overlay" />
      </div>

      <div className="hero-decor hero-decor-one" aria-hidden="true" />
      <div className="hero-decor hero-decor-two" aria-hidden="true" />

      <div className="site-container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="hero-eyebrow-icon">
              <Flower2 size={15} strokeWidth={1.7} />
            </span>

            <span>{company.tagline}</span>

            <span className="hero-eyebrow-location">
              Michigan
            </span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Floral artistry
            <span>made to leave</span>
            <em>a lasting glow.</em>
          </motion.h1>

          <motion.div
            className="hero-lower-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease: "easeOut",
            }}
          >
            <p className="hero-description">
              Thoughtfully composed floral designs for elegant
              celebrations, unforgettable events, and meaningful moments.
              Pure Glow Floral brings together premium blooms, refined
              styling, and a distinctly modern point of view.
            </p>

            <div className="hero-actions">
              <a href="#gallery" className="hero-primary-button">
                <span>Explore our work</span>
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </a>

              <a href="#wholesale" className="hero-text-link">
                <span>Wholesale partnerships</span>
                <ArrowDown size={17} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="hero-feature-card"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-feature-top">
            <span className="hero-feature-icon">
              <Sparkles size={16} strokeWidth={1.7} />
            </span>

            <span>Our approach</span>
          </div>

          <div className="hero-feature-copy">
            <strong>Refined by nature.</strong>

            <p>
              Every stem is selected with intention and arranged to feel
              effortless, elegant, and completely personal.
            </p>
          </div>

          <div className="hero-feature-footer">
            <span>Pure Glow Floral</span>
            <span>Est. {company.established}</span>
          </div>
        </motion.aside>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span>Scroll to discover</span>

          <div className="hero-scroll-line">
            <span />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;