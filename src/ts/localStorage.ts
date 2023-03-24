import { CartProductTemplate } from './models/CartProductTemplate';

export function putUserCartInLS(userProducts: CartProductTemplate[]) {
  localStorage.setItem('userCart', JSON.stringify(userProducts));
}

export function getUserCartFromLS() {
  let userCartLS = JSON.parse(localStorage.getItem('userCart')!);
  return userCartLS;
}
