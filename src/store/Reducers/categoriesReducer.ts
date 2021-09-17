import { SET_CATEGORIES } from "../ActionTypes/categoriesActionTypes";
const initialState = {
  category: ["NFC Cards", "NFC Chips", "NFC PhoneCases"],
};
const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const { category } = action;
      return { ...state, category };
    default:
      return state;
  }
};

export default CategoriesReducer;
