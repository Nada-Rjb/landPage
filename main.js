const navToggle = document.querySelector('[area-control="primary-navigation"]');
const primaryNav = document.querySelector("#primary-navigation");

navToggle.addEventListener("click", () => {
  console.log("clicked button");
  const navOpen = navToggle.getAttribute("area-expanded");
  if (navOpen === "false") {
    navToggle.setAttribute("area-expanded", "true");
  } else {
    navToggle.setAttribute("area-expanded", "false");
  }
  console.log(navOpen);
});

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");
  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
