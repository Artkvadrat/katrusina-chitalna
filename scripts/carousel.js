const images = [
  "../assets/images/bookCover.jpeg",
  "../assets/images/bookPage-1.jpeg",
  "../assets/images/bookPage-2.jpeg",
  "../assets/images/bookPage-3.jpeg",
  "../assets/images/bookPage-4.jpeg",
  "../assets/images/bookPage-5.jpeg",
];

let currentIndex = 0;

const smallImage = document.getElementById("small-image");
const fullscreenImage = document.getElementById("fullscreen-image");
const fullscreenCarousel = document.getElementById("fullscreen-carousel");

function showSlide() {
  smallImage.src = images[currentIndex];
  fullscreenImage.src = images[currentIndex];
}

function changeSlide(dir) {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  showSlide();
}

function openFullscreen() {
  fullscreenCarousel.style.display = "flex";
}

function closeFullscreen() {
  fullscreenCarousel.style.display = "none";
}

// Свайп підтримка
let startX = 0;
let endX = 0;

const addSwipeSupport = (element) => {
  element.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  element.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) changeSlide(1); else changeSlide(-1);
    }
  });
};

addSwipeSupport(document.getElementById("small-carousel"));
addSwipeSupport(fullscreenCarousel);

// Початкове фото
showSlide();
