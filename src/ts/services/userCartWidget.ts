import { getUserCartFromLS } from '../localStorage';
import { CartProductTemplate } from '../models/CartProductTemplate';
import { changeQuantity, deleteFromCart } from '../shoppingCartChanges';

let userCartWidget: HTMLDivElement = document.getElementById('user-cart__container') as HTMLDivElement;

export function toggleUserCartWidget() {
  const mobileMenu = document.getElementById('mobilenav') as HTMLUListElement;
  const closeIcon = document.getElementById('closeIcon') as HTMLSpanElement;
  const menuIcon = document.getElementById('menuIcon') as HTMLSpanElement;

  if (mobileMenu.classList.contains('showMenu')) {
    mobileMenu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'flex';

    userCartWidget.classList.remove('user-cart__invisible');
    userCartWidget.classList.add('user-cart__visible');
  } else {
    if (userCartWidget.classList.contains('user-cart__visible')) {
      userCartWidget.classList.remove('user-cart__visible');
      userCartWidget.classList.add('user-cart__invisible');
    } else {
      userCartWidget.classList.remove('user-cart__invisible');
      userCartWidget.classList.add('user-cart__visible');
    }
  }
}

export function renderUserCartInWidget() {
  let userCartInWidget: CartProductTemplate[] = getUserCartFromLS();
  let sumUsercart: string = sumUsercartTotal(userCartInWidget);
  userCartWidget.innerHTML = '';
  if (userCartInWidget.length === 0) {
    let emptyCart = document.createElement('div');
    emptyCart.classList.add('user-cart-item__container');
    userCartWidget.appendChild(emptyCart);

    let emptyCartText = document.createElement('h4');
    emptyCartText.classList.add('empty-cart-text');
    emptyCartText.innerHTML = 'Your cart is currently empty';
    emptyCart.appendChild(emptyCartText);
  } else {
    for (let i = 0; i < userCartInWidget.length; i++) {
      let userItemContainer = document.createElement('div');
      userItemContainer.classList.add('user-cart-item__container');
      userCartWidget.appendChild(userItemContainer);

      let imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');
      userItemContainer.appendChild(imgContainer);

      let userItemImg = document.createElement('img');
      userItemImg.classList.add('user-cart-item__image');
      userItemImg.src = userCartInWidget[i].product.image;
      userItemImg.alt = 'Picture of product';
      imgContainer.appendChild(userItemImg);

      let nameContainer = document.createElement('div');
      nameContainer.classList.add('name-container');
      userItemContainer.appendChild(nameContainer);

      let userItemName = document.createElement('p');
      userItemName.classList.add('user-cart-item-name');
      userItemName.innerHTML = userCartInWidget[i].product.name;
      nameContainer.appendChild(userItemName);

      let productChangeContainer = document.createElement('div');
      productChangeContainer.classList.add('product-change-container');
      userItemContainer.appendChild(productChangeContainer);

      let productQuantityInput = document.createElement('input');
      productQuantityInput.type = 'number';
      productQuantityInput.id = 'productQuantityCartWidget';
      productQuantityInput.max = '100';
      productQuantityInput.min = '1';
      productQuantityInput.value = userCartInWidget[i].quantity.toString();
      productChangeContainer.appendChild(productQuantityInput);

      let userItemPrice = document.createElement('p');
      userItemPrice.classList.add('user-cart-item-price');
      userItemPrice.innerHTML = userCartInWidget[i].product.price.toString() + 'G';
      productChangeContainer.appendChild(userItemPrice);

      let userItemRemoveBtn = document.createElement('button');
      userItemRemoveBtn.classList.add('user-cart-item__remove-btn');
      userItemRemoveBtn.innerHTML = `<span class="material-symbols-rounded">
    delete
    </span>`;
      productChangeContainer.appendChild(userItemRemoveBtn);

      productQuantityInput.addEventListener('change', () => {
        changeQuantity(i, userCartInWidget[i], productQuantityInput.value, userCartInWidget);
      });

      userItemRemoveBtn.addEventListener('click', () => {
        deleteFromCart(i, userCartInWidget);
      });
    }

    const checkoutButtonContainer = document.createElement('div');
    checkoutButtonContainer.classList.add('user-cart-item__container', 'checkout-btn-container');
    userCartWidget.appendChild(checkoutButtonContainer);

    const checkoutLink = document.createElement('a');
    checkoutLink.classList.add('checkout-link');
    if (window.location.href.indexOf('html/') > -1) {
      checkoutLink.setAttribute('href', './checkout.html');
    } else {
      checkoutLink.setAttribute('href', './html/checkout.html');
    }
    checkoutLink.innerHTML = `CHECKOUT`;
    checkoutButtonContainer.appendChild(checkoutLink);

    let usercartTotal = document.createElement('div');
    usercartTotal.classList.add('checkout-total');
    usercartTotal.setAttribute('id', 'usercart-total-amount');
    usercartTotal.innerHTML = 'Your total: ' + sumUsercart + ' G';
    checkoutButtonContainer.appendChild(usercartTotal);
  }
}

export function removeUserCartHtml() {
  userCartWidget.innerHTML = '';
}

function sumUsercartTotal(userCartInWidget: CartProductTemplate[]) {
  let sum: number = 0;
  for (let i = 0; i < userCartInWidget.length; i++) {
    if (userCartInWidget.length >= 1) {
      sum = sum + userCartInWidget[i].product.price * userCartInWidget[i].quantity;
    } else {
      sum = 0;
    }
  }
  let totalPrice: string = sum.toString();
  return totalPrice;
}
