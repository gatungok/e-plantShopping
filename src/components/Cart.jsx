import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../redux/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} - ${item.cost}
              <button onClick={() => dispatch(removeItem(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>Total: ${total}</div>
      <button onClick={() => dispatch(clearCart())} disabled={items.length === 0}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
