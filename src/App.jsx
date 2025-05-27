import React, { useState } from "react";
import './App.css';
import AboutUs from './AboutUs';
import { Provider } from "react-redux";
import store from "../redux/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <Provider store={store}>
      <div className="app-container">
        <button onClick={() => setShowProductList(!showProductList)}>
          {showProductList ? "Hide Products" : "Show Products"}
        </button>
        {showProductList && <ProductList />}
        <Cart />
        <AboutUs />
      </div>
    </Provider>
  );
}

export default App;
