import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">

                    {/* Desktop Left Menu */}
                    <nav className="nav-left">
                        <Link to="/collection">Collection</Link>
                        <Link to="/about">About</Link>
                    </nav>

                    {/* Center Logo */}
                    <div className="logo">
                        <Link to="/">
                            BAOLI
                        </Link>
                    </div>

                    {/* Desktop Right Menu */}
                    <nav className="nav-right">
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Account</Link>

                        <Link to="/cart" className="cart-link">
                            Cart
                            <span className="cart-count">0</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu */}
                    <button
                        className="mobile-btn"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            <MobileMenu
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}