import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        description: "A fragrant herb with calming properties.",
        cost: 12,
      },
      {
        name: "Mint",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        description: "A refreshing herb used in teas and desserts.",
        cost: 8,
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        description: "A succulent plant known for its healing gel.",
        cost: 15,
      },
      {
        name: "Basil",
        image: "https://images.unsplash.com/photo-1444392069727-6e23071c6127",
        description: "A medicinal herb used in many cuisines.",
        cost: 10,
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>
            <div>{category.category}</div>
          </h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={!!addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
