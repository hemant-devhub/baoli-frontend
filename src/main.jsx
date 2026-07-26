import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartProvider";
import "./index.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/baoli">
    <CartProvider>
    <App />
    </CartProvider>
  </BrowserRouter>
);