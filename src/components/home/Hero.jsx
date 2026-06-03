import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            {/* Left Content */}
            <div className="hero-content">

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-subtitle"
                >
                    Luxury Lakanto
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Crafted For
                    <br />
                    Modern Elegance
                </motion.h1>

                <motion.p  
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Timeless silhouettes, refined craftsmanship,
                    and understated luxury designed for women
                    who appreciate elegance in every detail.
                </motion.p>

                <motion.a
                    href="/baoli/collection"
                    className="hero-btn"
                    whileHover={{ scale: 1.03 }} 
                >
                    Explore Collection
                </motion.a>
            </div>

            {/* Right Image */}
            <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
                alt="Luxury Bag"
                />
            </motion.div>
        </section>
    );
}