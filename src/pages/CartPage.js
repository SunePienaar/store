import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/CartPage.css'; // Import the CSS file

const CartPage = () => {
  const cart = useSelector((state) => state.cart); // Get cart items from Redux
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState('standard'); // State for shipping option
  const [showHelp, setShowHelp] = useState(false); // State to toggle the modal

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  const calculateTotal = () => {
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    const shippingCost = shipping === 'express' ? 10 : 5;
    return (cartTotal + shippingCost).toFixed(2);
  };

  const handleCheckout = () => {
    const shippingMessage =
      shipping === 'express'
        ? 'Your order will arrive in 1-2 business days.'
        : 'Your order will arrive in 5-7 business days.';
    alert(`Thank you for your purchase! ${shippingMessage}`);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="cart-container container py-5">
      <h1 className="cart-title text-center mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item d-flex align-items-center mb-4" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image rounded"
              />
              <div className="cart-item-details ms-3">
                <h5 className="cart-item-name">{item.name}</h5>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary text-center mt-4">
            <h4>Total: ${calculateTotal()}</h4>
            <button
              className="btn btn-danger me-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Shipping Options */}
      <div className="shipping-options mt-5">
        <h2 className="text-center">Shipping Options</h2>
        <div className="d-flex justify-content-center gap-3">
          <label>
            <input
              type="radio"
              value="standard"
              checked={shipping === 'standard'}
              onChange={handleShippingChange}
            />
            Standard ($5)
          </label>
          <label>
            <input
              type="radio"
              value="express"
              checked={shipping === 'express'}
              onChange={handleShippingChange}
            />
            Express ($10)
          </label>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-info" onClick={() => setShowHelp(true)}>
            Help
          </button>
        </div>
      </div>

      {/* Modal for Shipping Help */}
      {showHelp && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <h2>Shipping Information</h2>
          <p>
            <strong>Standard Shipping:</strong> Your order will arrive in 5-7 business days. This is the most economical option.
          </p>
          <p>
            <strong>Express Shipping:</strong> Your order will arrive in 1-2 business days. This is the fastest option for urgent deliveries.
          </p>
          <button className="btn btn-secondary" onClick={() => setShowHelp(false)}>
            Close
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      {showHelp && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={() => setShowHelp(false)}
        ></div>
      )}
    </div>
  );
};

export default CartPage;