import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Left Menu */}
                <nav className="nav-left">
                    <Link to="/collection">Collection</Link>
                    <Link to="/about">About</Link>
                </nav>

                {/* Center Logo */}
                <div className="logo">
                    <Link to="/">
                        PLUUGIN
                    </Link>
                </div>

                {/* Right Menu */}
                <nav className="nav-right">
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Account</Link>

                    <Link to="/cart" className="cart-link">
                        Cart
                        <span className="cart-count">0</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}