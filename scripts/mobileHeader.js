const headerIcon = document.getElementById("mobile-header-icon");
const menuWrapper = document.querySelector(".menuItemsWrapper");
const menuItems = document.querySelectorAll(".menuItemsWrapper ul li");

let isOpen = false;

function toggleOpen() {
  isOpen = !isOpen;
  headerIcon.classList.toggle("open", isOpen);
  menuWrapper.classList.toggle("menuOpen", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "unset";
}

headerIcon.addEventListener("click", toggleOpen);

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    if (isOpen) toggleOpen();
  });
});
