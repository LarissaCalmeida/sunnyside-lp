const menuMobile = () => {
  const menu = document.querySelector(".menu");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    return;
  }

  menu.classList.add("active");
};
