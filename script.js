const menu = document.getElementById("menu");
const menuItem = document.getElementById("menuItem");
let isOpen = false;

menu.addEventListener("click", function () {
  menuVisible();
  isOpen = !isOpen;
});

const menuVisible = () => {
  if (isOpen) {
    menuItem.style.display = "flex";
  } else {
    menuItem.style.display = "none";
  }
};
