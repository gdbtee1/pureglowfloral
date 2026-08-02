import { ArrowUpRight, Expand, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { gallery } from "../../data/floralData";

const galleryImages = [
  "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1400&q=90",
];

function GallerySection() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="site-container">
        <div className="gallery-header">
          <div>
            <span className="section-label">Selected Work</span>

            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              A visual language shaped by softness, detail, and atmosphere.
            </motion.h2>
          </div>

          <motion.div
            className="gallery-header-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p>
              Each arrangement is created to complement the space around it.
              From intimate bouquets to full event installations, every detail
              is considered with purpose.
            </p>

            <a href="#contact" className="gallery-header-link">
              <span>Plan your floral design</span>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </motion.div>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <motion.article
              key={item.category}
              className={`gallery-item gallery-item-${index + 1}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.68,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={galleryImages[index]}
                alt={`${item.category} by Pure Glow Floral`}
                className="gallery-image"
              />

              <div className="gallery-overlay" />

              <div className="gallery-top">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span className="gallery-expand">
                  <Expand size={17} strokeWidth={1.6} />
                </span>
              </div>

              <div className="gallery-content">
                <div className="gallery-category-icon">
                  <Flower2 size={17} strokeWidth={1.6} />
                </div>

                <div>
                  <small>Pure Glow Collection</small>
                  <h3>{item.category}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="gallery-note"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span>Designed for meaningful moments</span>

          <p>
            Custom floral concepts are available for weddings, corporate
            gatherings, private celebrations, and ongoing business accounts.
          </p>

          <a href="#contact">
            <span>Discuss your event</span>
            <ArrowUpRight size={18} strokeWidth={1.7} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;