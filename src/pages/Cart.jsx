import { useCart } from "../context/useCart";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "0 30px"
      }}
    >
      <h1>Your Cart</h1>

      {cartItems.length === 0 && (
        <p>Cart is empty.</p>
      )}

      {cartItems.map((item) => (
        <div 
          key={item.id}
          style={{
            display:"flex",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          <img
            src={item.image}
            width="120"
            alt={item.name} 
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              ₹{item.price.toLocaleString()}
            </p>

            <p>Qty: {item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 style={{marginTop: "50px"}}>
        Total: ₹{totalPrice.toLocaleString()}
      </h2>
    </section>
  );
}