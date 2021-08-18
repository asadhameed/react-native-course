import Place from "../modals/place";
import { ADD_PLACE } from "./places-actions";

const initialState = {
  places: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        new Date().toString(),
        actions.placesDate.title
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
