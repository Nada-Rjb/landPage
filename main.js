const navToggle = document.querySelector('[area-control="primary-navigation"]');
const primaryNav = document.querySelector("#primary-navigation");
const menueIcon = navToggle.querySelector("img");
navToggle.addEventListener("click", (event) => {
  const navOpen = navToggle.getAttribute("area-expanded");
  event.stopPropagation(); //  Prevents document click event from firing

  if (navOpen === "false") {
    navToggle.setAttribute("area-expanded", "true");
  } else {
    navToggle.setAttribute("area-expanded", "false");
  }
});
//closewhen click in any thing in page
document.addEventListener("click", () => {
  const navOpen = navToggle.getAttribute("area-expanded");
  if (navOpen === "true") {
    navToggle.setAttribute("area-expanded", "false");
  }
});

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");
  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
