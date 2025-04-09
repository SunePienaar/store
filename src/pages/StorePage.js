import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import products from '../data/products'; // Use the imported products array
import '../styles/StorePage.css'; // Import the CSS file

const StorePage = () => {
  const dispatch = useDispatch();
  const [selectedStyles, setSelectedStyles] = useState({}); // Track selected styles for each product

  const handleStyleSelect = (productId, styleId) => {
    setSelectedStyles({ ...selectedStyles, [productId]: styleId });
  };

  const handleAddToCart = (product) => {
    const selectedStyleId = selectedStyles[product.id];
    if (!selectedStyleId) {
      alert(`Please select a style for ${product.name} before adding to cart.`);
      return;
    }

    const selectedStyle = product.styles.find((style) => style.id === selectedStyleId);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: `${product.id}-${selectedStyle.id}`, // Unique ID for the product style
        name: `${product.name} (${selectedStyle.id})`,
        price: product.price,
        image: selectedStyle.image,
      },
    });
    alert(`${product.name} (${selectedStyle.id}) added to cart!`);
  };

  return (
    <div className="store-container">
      <h1 className="store-title">Our Products</h1>
      <div className="store-grid">
        {products.map((product) => (
          <div className="store-item" key={product.id}>
            <div className="product-card">
              <h5 className="product-title">{product.name}</h5>
              {/* Carousel for product styles */}
              <div
                id={`carousel-${product.id}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {product.styles.map((style, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      key={style.id}
                    >
                      <img
                        src={style.image}
                        alt={style.id}
                        className={`product-image ${
                          selectedStyles[product.id] === style.id
                            ? 'selected-style'
                            : ''
                        }`}
                        onClick={() => handleStyleSelect(product.id, style.id)}
                      />
                    </div>
                  ))}
                </div>
                {/* Carousel controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carousel-${product.id}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carousel-${product.id}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;