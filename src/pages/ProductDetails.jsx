import { useParams } from "react-router-dom";
import products from ".././components/data/products";
import { useCart } from "../context/useCart";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product)
    return <h1>Product Not Found</h1>;

  return (
    <section className="product-details">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>

        <h2>₹{product.price.toLocaleString()}</h2>

        <p>
          Crafted from premium materials with timeless luxury design.
        </p>

        <button
          onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
      </div>
    </section>
  )
}