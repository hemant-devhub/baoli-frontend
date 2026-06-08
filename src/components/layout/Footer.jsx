import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div>
                    <h3>BAOLI</h3>

                    <p>
                        Timeless luxury handbags
                        crafted for modern womern.
                    </p>
                </div>

                <div>
                    <h4>Shop</h4>

                    <a href="#">Collection</a>
                    <a href="#">New Arrivals</a>
                </div>

                <div>
                    <h4>Company</h4>

                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <div>
                    <h4>Follow</h4>
                    
                    <a href="#">Instagram</a>
                    <a href="#">Pinterest</a>
                </div>

                <div className="footer-bottom">
                    @ 2026 Baoli Bags. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}