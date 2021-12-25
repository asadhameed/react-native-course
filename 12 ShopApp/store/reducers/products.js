import products from "../../data/dummay-data";
const initialState = {
  availableProducts: products,
  userProducts: products.filter((p) => p.id === "u1"),
};

export default (state = initialState, action) => {
  return state;
};
