import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`}>

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <h3>{product.name}</h3>

        <p>€{product.price.toLocaleString()}</p>

      </Link>

    </div>
  );
}