import { ArrowUpRight, BadgeCheck, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { company, stats } from "../../data/floralData";

const aboutImage =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=90";

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="site-container">
        <div className="about-intro">
          <div>
            <span className="section-label">About Pure Glow</span>

            <motion.h2
              className="section-heading-small"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Creating floral experiences that feel personal, polished, and
              unforgettable.
            </motion.h2>
          </div>

          <motion.div
            className="about-intro-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <p>{company.description}</p>

            <a href="#contact" className="about-link">
              <span>Work with Pure Glow</span>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </motion.div>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={aboutImage}
              alt="Elegant floral arrangement created with soft pink and cream flowers"
              className="about-image"
            />

            <div className="about-image-overlay" />

            <div className="about-image-badge">
              <span className="about-image-badge-icon">
                <Sparkles size={17} strokeWidth={1.7} />
              </span>

              <span>
                <small>Designed with intention</small>
                Elevated floral craftsmanship
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-story-card"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-story-top">
              <span className="about-story-number">01</span>
              <span className="about-story-label">Our Philosophy</span>
            </div>

            <div className="about-story-content">
              <div className="about-story-icon">
                <Leaf size={24} strokeWidth={1.5} />
              </div>

              <h3>Beauty should feel effortless.</h3>

              <p>
                Pure Glow Floral approaches every arrangement with a balance of
                creativity, precision, and restraint. The goal is not simply to
                add flowers to a space, but to shape an atmosphere that feels
                warm, refined, and memorable.
              </p>

              <p>
                From intimate bouquets to large-scale event installations, each
                design is composed around the client, the setting, and the
                emotion the moment should carry.
              </p>
            </div>

            <div className="about-story-footer">
              <div>
                <BadgeCheck size={18} strokeWidth={1.7} />
                <span>Premium sourcing</span>
              </div>

              <div>
                <BadgeCheck size={18} strokeWidth={1.7} />
                <span>Custom composition</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="about-stat"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;