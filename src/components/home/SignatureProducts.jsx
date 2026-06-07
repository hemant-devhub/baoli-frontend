import products from "../../components/data/products";
import ProductCard from "../ui/ProductCard";
import "./SignatureProducts.css";

export default function SignatureProducts() {
    return (
        <section className="signature-products">

            <div className="section-header">
                <span>Signature Pieces</span>

                <h2>Our Collection</h2>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
}