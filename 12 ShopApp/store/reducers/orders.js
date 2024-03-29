import Order from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.payload.cartItems,
        action.payload.totalAmount,
        new Date()
      );
      return { ...state, orders: [...state.orders, newOrder] };
    default:
      return state;
  }
};
