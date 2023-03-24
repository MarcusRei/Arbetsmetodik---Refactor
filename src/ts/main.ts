import { getUserCartFromLS, putUserCartInLS } from './localStorage';
import { CartProductTemplate } from './models/CartProductTemplate';
import { renderUserCartInWidget, toggleUserCartWidget } from './services/userCartWidget';

let userCartBtn: HTMLButtonElement = document.querySelector('.shoppingcart__container') as HTMLButtonElement;

userCartBtn.addEventListener('click', () => {
  toggleUserCartWidget();
  renderUserCartInWidget();
});

document.getElementById('hamburger__button')?.addEventListener('click', () => {
  toggleHamburgerMenu();
});

function toggleHamburgerMenu() {
  const mobileMenu = document.getElementById('mobilenav') as HTMLUListElement;
  const closeIcon = document.getElementById('closeIcon') as HTMLSpanElement;
  const menuIcon = document.getElementById('menuIcon') as HTMLSpanElement;
  let usercartContainer = document.getElementById('user-cart__container') as HTMLDivElement;

  if (usercartContainer.classList.contains('user-cart__visible')) {
    usercartContainer.classList.remove('user-cart__visible');
    usercartContainer.classList.add('user-cart__invisible');

    mobileMenu.classList.add('showMenu');
    closeIcon.style.display = 'flex';
    menuIcon.style.display = 'none';
  } else {
    if (mobileMenu.classList.contains('showMenu')) {
      mobileMenu.classList.remove('showMenu');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'flex';
    } else {
      mobileMenu.classList.add('showMenu');
      closeIcon.style.display = 'flex';
      menuIcon.style.display = 'none';
    }
  }
}

if (localStorage.getItem('userCart') === null) {
  let emptyList: CartProductTemplate[] = [];
  putUserCartInLS(emptyList);
} else {
  getUserCartFromLS();
}

document.getElementById('btnToShop')?.addEventListener('click', () => {
  document.location.replace('./html/products.html');
});
