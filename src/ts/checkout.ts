import { getUserCartFromLS, putUserCartInLS } from './localStorage';
import { CartProductTemplate } from './models/CartProductTemplate';
import { changeModalVisability, startModalFunctionality } from './services/modalFunction';
import { changeQuantity, deleteFromCart } from './shoppingCartChanges';
import { sumTotalPrice } from './totalAmount';

(document.querySelector('#checkout--body') as HTMLBodyElement).onload = function () {
  showShoppingCart();

  let checkoutBtn = document.getElementById('checkoutBtn') as HTMLButtonElement;

  checkoutBtn.addEventListener('click', () => {
    startModalFunctionality();
  });

  let closeCross = document.getElementsByClassName('modal-content__close')[0] as HTMLSpanElement;

  closeCross.addEventListener('click', () => {
    changeModalVisability();
  });
};

export let userCart: CartProductTemplate[] = getUserCartFromLS();

export function showShoppingCart() {
  (document.querySelector('#checkout__cart') as HTMLElement).innerText = 'You have not selected any potions';

  let sumCheckout = document.getElementById('sumOfShoppingCart') as HTMLParagraphElement;
  sumCheckout.innerText = '0 G';
  let cartLength = userCart.length;
  if (cartLength !== 0) {
    (document.querySelector('#checkout__cart') as HTMLElement).innerText = '';
    for (let i = 0; i < userCart.length; i++) {
      let itemRow = document.createElement('article');
      itemRow.classList.add('itemRow');
      document.querySelector('#checkout__cart')?.appendChild(itemRow);

      let imgContainer = document.createElement('div');
      imgContainer.classList.add('checkout-img-container');
      itemRow.appendChild(imgContainer);

      let productImg = document.createElement('img');
      productImg.classList.add('itemRow__Img');
      productImg.alt = userCart[i].product.name;
      productImg.src = userCart[i].product.image;
      imgContainer.appendChild(productImg);

      let nameContainer = document.createElement('div');
      nameContainer.classList.add('checkout-name-container');
      itemRow.appendChild(nameContainer);

      let productName = document.createElement('p');
      productName.classList.add('itemRow__productName');
      productName.innerText = userCart[i].product.name;
      nameContainer.appendChild(productName);

      let productChangeContainer = document.createElement('div');
      productChangeContainer.classList.add('checkout-product-change-container');
      itemRow.appendChild(productChangeContainer);

      let productPrice = document.createElement('p');
      productPrice.classList.add('itemRow__productPrice');
      productPrice.innerText = userCart[i].product.price.toString();
      productPrice.innerText += ' G';
      productChangeContainer.appendChild(productPrice);

      let productLabel = document.createElement('label');
      productLabel.setAttribute('for', 'productQuantity');
      productLabel.id = 'quantityContainer';
      productLabel.classList.add('itemRow__quantity-container');
      productChangeContainer.appendChild(productLabel);

      let productQuantityInput = document.createElement('input');
      productQuantityInput.type = 'number';
      productQuantityInput.id = 'productQuantity';
      productQuantityInput.max = '100';
      productQuantityInput.min = '1';
      productQuantityInput.classList.add('itemRow__quantity-input');
      productQuantityInput.value = userCart[i].quantity.toString();
      productChangeContainer.appendChild(productQuantityInput);

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('itemRow__remove-btn');
      deleteBtn.innerHTML = `<span class="material-symbols-rounded">
delete
</span>`;
      productChangeContainer.appendChild(deleteBtn);

      productQuantityInput.addEventListener('change', () => {
        changeQuantity(i, userCart[i], productQuantityInput.value, userCart);
        showShoppingCart();
        putUserCartInLS(userCart);
      });
      deleteBtn.addEventListener('click', () => {
        deleteFromCart(i, userCart);
        showShoppingCart();
        putUserCartInLS(userCart);
      });
      sumTotalPrice();
    }
  }
}
