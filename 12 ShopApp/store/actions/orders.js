export const ADD_ORDER = "ADDORDER";

export const addOrder = (cartItems, totalAmount) => {
  return { type: ADD_ORDER, payload: { cartItems, totalAmount } };
};
