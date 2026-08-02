import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navigation } from "../../data/floralData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-shell ${
          isScrolled ? "navbar-shell-scrolled" : ""
        }`}
      >
        <div className="site-container">
          <nav className="navbar" aria-label="Primary navigation">
            <a
              href="#home"
              className="navbar-brand"
              aria-label={`${company.name} home`}
              onClick={closeMenu}
            >
              <span className="navbar-brand-mark" aria-hidden="true">
                PG
              </span>

              <span className="navbar-brand-copy">
                <strong>{company.name}</strong>
                <small>Luxury Floral Studio</small>
              </span>
            </a>

            <div className="navbar-links desktop-only">
              {navigation.map((item) => (
                <a key={item.title} href={item.href}>
                  {item.title}
                </a>
              ))}
            </div>

            <div className="navbar-actions">
              <a
                href="#contact"
                className="navbar-contact desktop-only"
              >
                <span>Start an inquiry</span>
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </a>

              <button
                type="button"
                className="navbar-menu-button mobile-only"
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X size={22} strokeWidth={1.7} />
                ) : (
                  <Menu size={22} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="mobile-navigation-panel"
              initial={{ y: -24 }}
              animate={{ y: 0 }}
              exit={{ y: -24 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-navigation-heading">
                <span>Pure Glow Floral</span>
                <small>Explore the studio</small>
              </div>

              <div className="mobile-navigation-links">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 }}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{item.title}</strong>

                    <ArrowUpRight size={19} strokeWidth={1.6} />
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                className="mobile-navigation-cta"
                onClick={closeMenu}
              >
                <span>
                  <small>Planning something special?</small>
                  Begin your floral inquiry
                </span>

                <ArrowUpRight size={22} strokeWidth={1.7} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;