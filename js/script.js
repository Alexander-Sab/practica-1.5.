const userSwiper = function () {
  let breakpoint = window.matchMedia("(min-width: 530px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    myswiper = new Swiper(".swiper", {
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 16,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      keyboard: {
        enable: false,
        onlyInViewport: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
};
userSwiper();

// Кнопки
let buttonOpen = document.querySelector(".pressbutton");
let replicaContener = document.querySelector(".replica");
let buttonClose = document.querySelector(".closebutton");

buttonOpen.addEventListener("click", function () {
  replicaContener.style.display = "flex";
  buttonOpen.style.display = "none";
  buttonClose.style.display = "block";
});

buttonClose.addEventListener("click", function () {
  replicaContener.style.display = "none";
  buttonClose.style.display = "none";
  buttonOpen.style.display = "block";
});
