import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
const initialState = {
  items: {},
  totalAmounts: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updateNewCartItem;
      if (state.items[addedProduct.id]) {
        const item = state.items[addedProduct.id];
        updateNewCartItem = new CartItem(
          item.quantity + 1,
          prodPrice,
          prodTitle,
          item.sum + prodPrice
        );
      } else {
        updateNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateNewCartItem },
        totalAmounts: state.totalAmounts + prodPrice,
      };
    case REMOVE_FROM_CART:
      const productId = action.payload;
      const selectedItem = state.items[productId];
      const currentQty = selectedItem.quantity;

      let updateCart;
      let totalAmounts;
      if (currentQty > 1) {
        updateItem = new CartItem(
          selectedItem.quantity - 1,
          selectedItem.productPrice,
          selectedItem.productTitle,
          selectedItem.sum - selectedItem.productPrice
        );

        updateCart = { ...state.items, [productId]: updateItem };
      } else {
        updateCart = state.items;

        delete updateCart[productId];
      }
      totalAmounts = parseFloat(
        (state.totalAmounts - selectedItem.productPrice).toFixed(2)
      );
      return { ...state, items: updateCart, totalAmounts };

    default:
      return state;
  }
};
