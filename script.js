/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */

const progressBar = document.querySelector(".scroll-progress-bar");

function updateScrollProgress() {
  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  progressBar.style.width = `${progress}%`;
}


/* =========================================================
   NAVIGATION EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");
const revealTextElements =
  document.querySelectorAll(".reveal-text");

const imageElements =
  document.querySelectorAll(".image-reveal");


const observerOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
};


const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      } else {

        entry.target.classList.remove("active");

      }

    });

  },
  observerOptions
);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


revealTextElements.forEach((element) => {
  revealObserver.observe(element);
});


imageElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   PARALLAX SCROLLING
========================================================= */

const slowElements =
  document.querySelectorAll(".parallax-slow");

const mediumElements =
  document.querySelectorAll(".parallax-medium");


function updateParallax() {

  const scrollY = window.scrollY;


  slowElements.forEach((element) => {

    const speed =
      parseFloat(
        element.dataset.speed
      ) || 0.08;

    const offset =
      scrollY * speed;

    element.style.transform =
      `translate3d(0, ${offset}px, 0)`;

  });


  mediumElements.forEach((element) => {

    const speed =
      parseFloat(
        element.dataset.speed
      ) || -0.04;

    const offset =
      scrollY * speed;

    element.style.transform =
      `translate3d(0, ${offset}px, 0)`;

  });

}


/* =========================================================
   DYNAMIC BACKGROUND COLOR
========================================================= */

function updateBackgroundColor() {

  const scrollHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    scrollHeight > 0
      ? window.scrollY / scrollHeight
      : 0;


  let backgroundColor;


  if (progress < 0.2) {

    backgroundColor = "#f5f0e8";

  } else if (progress < 0.4) {

    backgroundColor = "#f7efe5";

  } else if (progress < 0.6) {

    backgroundColor = "#f1edf4";

  } else if (progress < 0.8) {

    backgroundColor = "#edf2ed";

  } else {

    backgroundColor = "#f5f0e8";

  }


  document.body.style.backgroundColor =
    backgroundColor;

}


/* =========================================================
   REQUEST ANIMATION FRAME
========================================================= */

let ticking = false;

function handleScroll() {

  if (!ticking) {

    window.requestAnimationFrame(() => {

      updateScrollProgress();

      updateNavbar();

      updateParallax();

      updateBackgroundColor();

      ticking = false;

    });

    ticking = true;

  }

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

window.addEventListener(
  "scroll",
  handleScroll,
  { passive: true }
);


window.addEventListener(
  "resize",
  handleScroll
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    handleScroll();


    /*
      HERO ANIMATION
    */

    setTimeout(() => {

      document
        .querySelectorAll(".hero .reveal")
        .forEach((element, index) => {

          setTimeout(() => {

            element.classList.add("active");

          }, index * 120);

        });


      document
        .querySelectorAll(".hero .reveal-text")
        .forEach((element, index) => {

          setTimeout(() => {

            element.classList.add("active");

          }, 200 + index * 180);

        });


      const heroImage =
        document.querySelector(".hero .image-reveal");

      if (heroImage) {

        setTimeout(() => {

          heroImage.classList.add("active");

        }, 600);

      }

    }, 150);

  }
);








// Rainbow Emoji Cursor
const rainbowCursor = document.createElement("div");

rainbowCursor.textContent = "🌈";
rainbowCursor.style.position = "fixed";
rainbowCursor.style.pointerEvents = "none";
rainbowCursor.style.zIndex = "999999";
rainbowCursor.style.fontSize = "20px";
rainbowCursor.style.lineHeight = "1";
rainbowCursor.style.transform = "translate(-2px, -2px)";

document.body.appendChild(rainbowCursor);

document.addEventListener("mousemove", (e) => {
  rainbowCursor.style.left = `${e.clientX}px`;
  rainbowCursor.style.top = `${e.clientY}px`;
});