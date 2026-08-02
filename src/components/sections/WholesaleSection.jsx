import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Handshake,
  Leaf,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { wholesale } from "../../data/floralData";

const wholesaleImage =
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1600&q=90";

const partnershipFeatures = [
  {
    icon: Boxes,
    title: "Consistent Purchasing",
    description:
      "Sourcing premium flowers for client orders, celebrations, and event-based floral work.",
  },
  {
    icon: Truck,
    title: "Reliable Fulfillment",
    description:
      "Seeking dependable access to fresh inventory, seasonal varieties, and scheduled orders.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Focused on building lasting supplier relationships based on professionalism and quality.",
  },
];

function WholesaleSection() {
  return (
    <section id="wholesale" className="section wholesale-section">
      <div className="site-container">
        <div className="wholesale-shell">
          <motion.div
            className="wholesale-image-wrap"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={wholesaleImage}
              alt="Fresh premium flowers prepared for professional floral design"
              className="wholesale-image"
            />

            <div className="wholesale-image-overlay" />

            <div className="wholesale-image-top">
              <span>Wholesale Sourcing</span>

              <span className="wholesale-image-icon">
                <Leaf size={18} strokeWidth={1.6} />
              </span>
            </div>

            <div className="wholesale-image-copy">
              <small>Pure Glow Floral</small>

              <strong>
                Professional sourcing for elevated floral work.
              </strong>
            </div>
          </motion.div>

          <motion.div
            className="wholesale-content"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="section-label">Supplier Partnerships</span>

            <h2 className="section-heading-small">
              {wholesale.title}
            </h2>

            <p className="wholesale-description">
              {wholesale.description}
            </p>

            <div className="wholesale-points">
              {wholesale.points.map((point) => (
                <div key={point} className="wholesale-point">
                  <span>
                    <BadgeCheck size={18} strokeWidth={1.7} />
                  </span>

                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="wholesale-actions">
              <a href="#contact" className="wholesale-primary-button">
                <span>Discuss a partnership</span>
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </a>

              <a href="mailto:hello@pureglowfloral.com" className="wholesale-email-link">
                hello@pureglowfloral.com
              </a>
            </div>
          </motion.div>
        </div>

        <div className="wholesale-features">
          {partnershipFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className="wholesale-feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.08,
                }}
              >
                <div className="wholesale-feature-top">
                  <span className="wholesale-feature-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WholesaleSection;