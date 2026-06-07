import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./MobileMenu.css";

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4
            }}
          >

            <div className="mobile-menu-content">

              <Link
                to="/collection"
                onClick={() => setOpen(false)}
              >
                Collection
              </Link>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
              >
                Account
              </Link>

              <Link
                to="/cart"
                onClick={() => setOpen(false)}
              >
                Cart
              </Link>

              <button className="mobile-cta">
                Explore Collection
              </button>

            </div>

            <div className="mobile-footer">

              <span>Instagram</span>

              <span>Pinterest</span>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}