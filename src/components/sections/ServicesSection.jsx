import {
  ArrowUpRight,
  Building2,
  CalendarHeart,
  Gift,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../data/floralData";

const serviceIcons = [Heart, Building2, Gift, CalendarHeart];

const serviceImages = [
  "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=90",
];

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="site-container">
        <div className="services-header">
          <div>
            <span className="section-label">Our Services</span>

            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Floral design for life’s most meaningful moments.
            </motion.h2>
          </div>

          <motion.div
            className="services-header-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p>
              From intimate celebrations to large-scale events, Pure Glow
              Floral creates custom floral experiences designed around the
              setting, the occasion, and the people being celebrated.
            </p>

            <a href="#contact" className="services-header-link">
              <span>Request a floral consultation</span>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="service-image-wrap">
                  <img
                    src={serviceImages[index]}
                    alt={`${service.title} by Pure Glow Floral`}
                    className="service-image"
                  />

                  <div className="service-image-overlay" />

                  <div className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="service-card-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#contact" className="service-card-link">
                    <span>Learn more</span>
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="services-banner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-banner-copy">
            <span>Custom Floral Design</span>

            <h3>
              Every event deserves a floral direction created specifically for
              the space and occasion.
            </h3>
          </div>

          <a href="#contact" className="services-banner-button">
            <span>Begin your inquiry</span>
            <ArrowUpRight size={19} strokeWidth={1.7} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;