import { putUserCartInLS } from './localStorage';
import { CartProductTemplate } from './models/CartProductTemplate';
import { ProductTemplate } from './models/ProductTemplate';
import { renderUserCartinWidget } from './services/userCartWidget';

export function addProductToCart(list: CartProductTemplate[], product: ProductTemplate, value: string) {
  let nrValue = Number(value);
  if (isNaN(nrValue) || nrValue <= 0) {
    alert('You need to write a number higher than 0');
    console.log('i if');
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i].product.id === product.id) {
        list[i].quantity += nrValue;
        putUserCartInLS(list);
        console.log('i else, i loop');
        return;
      }
    }
    let newArticle: CartProductTemplate = new CartProductTemplate(product, nrValue);
    list.push(newArticle);
    console.log('efter else');

    putUserCartInLS(list);
    renderUserCartinWidget();
  }
}

export function changeQuantity(
  listPosition: number,
  product: CartProductTemplate,
  value: string,
  list: CartProductTemplate[]
) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      product.quantity = Number(value);
    }
  }
  putUserCartInLS(list);
  renderUserCartinWidget();
}

export function deleteFromCart(listPosition: number, list: CartProductTemplate[]) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      list.splice(i, 1);
    }
  }
  putUserCartInLS(list);
  renderUserCartinWidget();
}

export function emptyShoppingCart(list: CartProductTemplate[]) {
  for (let i = 0; i < list.length; i++) {
    list.splice(i, list.length);
  }
  putUserCartInLS(list);
  renderUserCartinWidget();
}
