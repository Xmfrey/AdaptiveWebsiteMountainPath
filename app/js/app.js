const mainblock = document.querySelector(".main-block");
const scrollbarlinks = document.querySelectorAll(".header__pagination-item");
const scrollItems = document.querySelectorAll(".advantages__item");
const down = document.querySelector(".main-block__scroll-down");

const items = Array.from(scrollItems);
items.unshift(mainblock);

/////////////////////////////////pagination////////////////////////////////////

scrollbarlinks.forEach((pag, index) => {
  pag.addEventListener("click", (ev) => {
    if (ev.target === scrollbarlinks[index] && scrollbarlinks[index]) {
      items[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/////////////////////////////////scroll////////////////////////////////////

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

const ScrollPagination = () => {
  let scrollTopPosition = window.scrollY || document.documentElement.scrollTop;

  for (let i = 0; i < items.length; i++) {
    let itemProp = items[i].getBoundingClientRect();
    let itemCoordinates = itemProp.top + window.scrollY - itemProp.height / 2;

    if (window.scrollY > itemCoordinates) {
      for (let y = 0; y < scrollbarlinks.length; y++) {
        scrollbarlinks[y].classList.remove("header__pagination-item--active");
      }
      scrollbarlinks[i].classList.add("header__pagination-item--active");
    }
  }

  for (let j = items.length - 1; j > -1; j--) {
    let itemProp = items[j].getBoundingClientRect();
    let itemCoordinates = itemProp.top + window.scrollY + itemProp.height / 2;

    if (window.scrollY < itemCoordinates) {
      for (let k = 0; k < scrollbarlinks.length; k++) {
        scrollbarlinks[k].classList.remove("header__pagination-item--active");
      }
      scrollbarlinks[j].classList.add("header__pagination-item--active");
    }
  }

  lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
};

document.addEventListener("scroll", ScrollPagination);

////////////////////////////first-item///////////////////////////////////

down.addEventListener("click", (e) => {
  items[1].scrollIntoView({
    behavior: "smooth",
  });
});

/////////////////////////////////parallax////////////////////////////////////

document.addEventListener("mousemove", (e) => {
  document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
});
