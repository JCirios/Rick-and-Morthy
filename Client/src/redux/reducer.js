import { ADD_FAV, REMOVE_FAV } from "./actions/types";
const initialState = {
  data: [],
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter((ch) => ch.id !== payload);
      return {
        ...state,
        myFavorites: payload,
      };

    default:
      return state;
  }
}
