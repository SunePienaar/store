import { createStore } from 'redux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};

const initialState = {
  cart: loadState(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export default store;