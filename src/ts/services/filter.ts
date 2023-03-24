import { products } from '../models/ProductList';

let small: boolean = false;
let medium: boolean = false;
let large: boolean = false;
let healing: boolean = false;
let mana: boolean = false;
let stamina: boolean = false;
let poison: boolean = false;
let joy: boolean = false;
let time: boolean = false;
let invisibility: boolean = false;

export function showFilter() {
  const filterBackground: HTMLDivElement = document.getElementById('filter-background') as HTMLDivElement;
  const filterContainer: HTMLDivElement = document.getElementById('filter-container') as HTMLDivElement;
  filterContainer.classList.add('showFilter');
  filterBackground.style.display = 'flex';
  filterContainer.style.display = 'flex';
}

export function closeFilter() {
  const filterBackground: HTMLDivElement = document.getElementById('filter-background') as HTMLDivElement;
  const filterContainer: HTMLDivElement = document.getElementById('filter-container') as HTMLDivElement;
  filterContainer.classList.remove('showFilter');
  filterBackground.style.display = 'none';
  filterContainer.style.display = 'none';
}

export function clearFilter() {
  for (let i = 0; i < products.length; i++) {
    let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
    productContainer.style.display = 'flex';
  }
  small = false;
  medium = false;
  large = false;
  healing = false;
  mana = false;
  stamina = false;
  poison = false;
  joy = false;
  time = false;
  invisibility = false;
}

export function toggleSmall(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    small = true;
  }
  if (!checkbox.checked) {
    small = false;
  }
  filterProducts();
}

export function toggleMedium(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    medium = true;
  }
  if (!checkbox.checked) {
    medium = false;
  }
  filterProducts();
}

export function toggleLarge(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    large = true;
  }
  if (!checkbox.checked) {
    large = false;
  }
  filterProducts();
}

export function toggleHealing(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    healing = true;
  }
  if (!checkbox.checked) {
    healing = false;
  }
  filterProducts();
}

export function toggleMana(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    mana = true;
  }
  if (!checkbox.checked) {
    mana = false;
  }
  filterProducts();
}

export function toggleStamina(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    stamina = true;
  }
  if (!checkbox.checked) {
    stamina = false;
  }
  filterProducts();
}

export function togglePoison(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    poison = true;
  }
  if (!checkbox.checked) {
    poison = false;
  }
  filterProducts();
}

export function toggleJoy(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    joy = true;
  }
  if (!checkbox.checked) {
    joy = false;
  }
  filterProducts();
}

export function toggleTime(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    time = true;
  }
  if (!checkbox.checked) {
    time = false;
  }
  filterProducts();
}

export function toggleInvisibility(checkbox: HTMLInputElement) {
  if (checkbox.checked) {
    invisibility = true;
  }
  if (!checkbox.checked) {
    invisibility = false;
  }
  filterProducts();
}

export function filterProducts() {
  if (small || medium || large || healing || mana || stamina || poison || joy || time || invisibility) {
    for (let i = 0; i < products.length; i++) {
      let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
      productContainer.style.display = 'none';
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
      productContainer.style.display = 'flex';
    }
  }

  if ((small || medium || large) && (healing || mana || stamina || poison || joy || time || invisibility)) {
    for (let i = 0; i < products.length; i++) {
      if (small) {
        for (let i = 0; i < products.length; i++) {
          if (healing) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'healing') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (mana) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'mana') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (stamina) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'stamina') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (poison) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'poison') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (joy) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'joy') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (time) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'time') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (invisibility) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'small' && products[i].type === 'invisibility') {
                productContainer.style.display = 'flex';
              }
            }
          }
        }
      }

      if (medium) {
        for (let i = 0; i < products.length; i++) {
          if (healing) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'healing') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (mana) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'mana') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (stamina) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'stamina') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (poison) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'poison') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (joy) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'joy') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (time) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'time') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (invisibility) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'medium' && products[i].type === 'invisibility') {
                productContainer.style.display = 'flex';
              }
            }
          }
        }
      }

      if (large) {
        for (let i = 0; i < products.length; i++) {
          if (healing) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'healing') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (mana) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'mana') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (stamina) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'stamina') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (poison) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'poison') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (joy) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'joy') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (time) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'time') {
                productContainer.style.display = 'flex';
              }
            }
          }
          if (invisibility) {
            for (let i = 0; i < products.length; i++) {
              let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if (products[i].size === 'large' && products[i].type === 'invisibility') {
                productContainer.style.display = 'flex';
              }
            }
          }
        }
      }
    }
  } else {
    if (small) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].size === 'small') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (medium) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].size === 'medium') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (large) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].size === 'large') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (healing) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'healing') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (mana) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'mana') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (stamina) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'stamina') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (poison) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'poison') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (joy) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'joy') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (time) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'time') {
          productContainer.style.display = 'flex';
        }
      }
    }
    if (invisibility) {
      for (let i = 0; i < products.length; i++) {
        let productContainer: HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if (products[i].type === 'invisibility') {
          productContainer.style.display = 'flex';
        }
      }
    }
  }
}
