import * as cartActionTypes from "../ActionTypes/cartActionTypes";

export function addItem(payload: ICart) {
  const action: CartAction = {
    type: cartActionTypes.ADD_ITEM,
    payload,
  };

  return action;
}

export function removeItem(payload: string) {
  const action: any = {
    type: cartActionTypes.REMOVE_ITEM,
    payload,
  };
  return action;
}

export function editItem(payload: ICart) {
  const action: CartAction = {
    type: cartActionTypes.EDIT_ITEM,
    payload,
  };

  return action;
}
export function cleanStore() {
  const action: any = {
    type: cartActionTypes.CLEAN_STORE,
  };
  return action;
}
