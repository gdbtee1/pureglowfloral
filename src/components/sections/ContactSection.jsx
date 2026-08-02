import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { company } from "../../data/floralData";

const contactEmail = "pureglownow@gmail.com";
const contactPhone = "2487619300";
const formattedPhone = "(248) 761-9300";

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="site-container">
        <div className="contact-shell">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="section-label">Contact Pure Glow</span>

            <h2 className="section-heading-small">
              Let’s create something beautiful together.
            </h2>

            <p className="contact-description">
              Pure Glow Floral welcomes inquiries for weddings, private
              celebrations, corporate events, custom floral orders, and
              wholesale supplier partnerships.
            </p>

            <div className="contact-details">
              <a
                href={`mailto:${contactEmail}`}
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={20} strokeWidth={1.6} />
                </span>

                <span>
                  <small>Email</small>
                  <strong>{contactEmail}</strong>
                </span>

                <ArrowUpRight size={18} strokeWidth={1.7} />
              </a>

              <a
                href={`tel:${contactPhone}`}
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Phone size={20} strokeWidth={1.6} />
                </span>

                <span>
                  <small>Phone</small>
                  <strong>{formattedPhone}</strong>
                </span>

                <ArrowUpRight size={18} strokeWidth={1.7} />
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={20} strokeWidth={1.6} />
                </span>

                <span>
                  <small>Service Area</small>
                  <strong>{company.location}</strong>
                </span>
              </div>
            </div>

            <div className="contact-availability">
              <span className="contact-availability-icon">
                <CalendarDays size={19} strokeWidth={1.6} />
              </span>

              <span>
                <small>Currently accepting</small>
                Event inquiries and supplier partnerships
              </span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="contact-form-header">
              <div>
                <span>Start an Inquiry</span>
                <h3>Tell us about your floral needs.</h3>
              </div>

              <span className="contact-form-sparkle">
                <Sparkles size={20} strokeWidth={1.6} />
              </span>
            </div>

            <form
              className="contact-form"
              action={`https://formsubmit.co/${contactEmail}`}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Pure Glow Floral Inquiry"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Pure Glow Floral. We received your inquiry and will respond as soon as possible."
              />

              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                className="contact-honeypot"
                aria-hidden="true"
              />

              <div className="contact-form-row">
                <label>
                  <span>Name</span>

                  <input
                    type="text"
                    name="Name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>

                  <input
                    type="email"
                    name="Email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Phone Number</span>

                <input
                  type="tel"
                  name="Phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                />
              </label>

              <label>
                <span>Inquiry Type</span>

                <select name="Inquiry Type" defaultValue="" required>
                  <option value="" disabled>
                    Select an inquiry type
                  </option>

                  <option value="Wedding Florals">
                    Wedding Florals
                  </option>

                  <option value="Private Event">
                    Private Event
                  </option>

                  <option value="Corporate Event">
                    Corporate Event
                  </option>

                  <option value="Custom Bouquet">
                    Custom Bouquet
                  </option>

                  <option value="Wholesale Partnership">
                    Wholesale Partnership
                  </option>
                </select>
              </label>

              <label>
                <span>Event Date or Timeline</span>

                <input
                  type="text"
                  name="Event Date or Timeline"
                  placeholder="Month, date, or expected timeframe"
                />
              </label>

              <label>
                <span>Message</span>

                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Share the event, order details, floral vision, or partnership opportunity."
                  required
                />
              </label>

              <button type="submit" className="contact-submit-button">
                <span>Send your inquiry</span>
                <ArrowUpRight size={19} strokeWidth={1.8} />
              </button>

              <p className="contact-form-note">
                Pure Glow Floral will respond directly to discuss availability,
                sourcing, and next steps.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;