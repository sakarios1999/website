import { all, fork, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES } from "../ActionTypes/categoriesActionTypes";
import { GET_POSTS } from "../ActionTypes/postsActionTypes";
import { GET_PRODUCTS } from "../ActionTypes/productActionTypes";
import { handleGetCategories } from "./handlers/categories";
import { handleGetPosts } from "./handlers/posts";
import { handleGetProducts } from "./handlers/products";

function* watchCategorySaga() {
  yield takeLatest(GET_CATEGORIES, handleGetCategories);
}
function* watchPostsSaga() {
  yield takeLatest(GET_POSTS, handleGetPosts);
}
function* watchProductsSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts);
}

export default function* watcherSaga() {
  yield all([
    fork(watchCategorySaga),
    fork(watchPostsSaga),
    fork(watchProductsSaga),
  ]);
}
