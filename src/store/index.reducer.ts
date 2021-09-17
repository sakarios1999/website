import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./Reducers/cartReducer";
import CategoriesReducer from "./Reducers/categoriesReducer";
import PostsReducer from "./Reducers/postsReducer";
import ProductsReducer from "./Reducers/productsReducer";

const persistConfig = {
  key: "root",
  storage,
};
const RootReducer = combineReducers({
  CartReducer,
  CategoriesReducer,
  PostsReducer,
  ProductsReducer,
});
export default persistReducer(persistConfig, RootReducer);
