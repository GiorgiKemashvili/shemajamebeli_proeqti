function updateCountry(country, currency) {
  const button = document.getElementById("country-btn");
  button.innerHTML = `<strong>${country} (${currency})</strong>`;
}

const carousel = document.querySelector("#heroCarousel");
let startX = 0;

carousel.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

carousel.addEventListener("mouseup", (e) => {
  let endX = e.clientX;
  let diff = startX - endX;

  if (diff > 50) {
    // Slide to next
    bootstrap.Carousel.getInstance(carousel).next();
  } else if (diff < -50) {
    // Slide to prev
    bootstrap.Carousel.getInstance(carousel).prev();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleCollection");

  const bsCarouselElement = document.querySelector("#collectionCarousel");
  const bsCarousel = new bootstrap.Carousel(bsCarouselElement);

  const customCarousel = document.querySelector(".featured-carousel");

  let showingFirst = true;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (showingFirst) {
      // Show second slide
      bsCarousel.next();
      customCarousel.style.transform = "translateX(-100%)";
      toggleBtn.textContent = "Back";
    } else {
      // Show first slide
      bsCarousel.prev();
      customCarousel.style.transform = "translateX(0)";
      toggleBtn.textContent = "View all Sales";
    }

    showingFirst = !showingFirst;
  });

  let isDragging = false,
    startX;
  bsCarouselElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  bsCarouselElement.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    if (e.pageX < startX - 50) {
      bsCarousel.next();
      isDragging = false;
    } else if (e.pageX > startX + 50) {
      bsCarousel.prev();
      isDragging = false;
    }
  });

  bsCarouselElement.addEventListener("mouseup", () => (isDragging = false));
  bsCarouselElement.addEventListener("mouseleave", () => (isDragging = false));

  customCarousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  customCarousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;

    if (diff < -50 && showingFirst) {
      customCarousel.style.transform = "translateX(-100%)";
      bsCarousel.next();
      toggleBtn.textContent = "Back";
      showingFirst = false;
      isDragging = false;
    } else if (diff > 50 && !showingFirst) {
      customCarousel.style.transform = "translateX(0)";
      bsCarousel.prev();
      toggleBtn.textContent = "View all";
      showingFirst = true;
      isDragging = false;
    }
  });

  customCarousel.addEventListener("mouseup", () => (isDragging = false));
  customCarousel.addEventListener("mouseleave", () => (isDragging = false));
});

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slider = document.querySelector(".featured-carousel");

  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".featured-slide").length;

  // Function to slide to the next slide
  function goToNextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSliderPosition();
  }

  // Function to slide to the previous slide
  function goToPrevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    const slideWidth = document.querySelector(".featured-slide").offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Event listeners for navigation buttons
  nextButton.addEventListener("click", goToNextSlide);
  prevButton.addEventListener("click", goToPrevSlide);
});

document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("main-brands");
  const allBrandBoxes = document.querySelectorAll("#all-brands .brand-select");

  allBrandBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const imgSrc = box.querySelector("img").src;

      const alreadyExists = Array.from(
        mainContainer.querySelectorAll("img")
      ).some((img) => img.src === imgSrc);
      if (!alreadyExists) {
        const newBox = box.cloneNode(true);
        newBox.classList.remove("brand-select");
        mainContainer.appendChild(newBox);
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const prevBtn = document.querySelector(".carousel-control-prev");
//   const nextBtn = document.querySelector(".carousel-control-next");
//   const prevZone = document.querySelector(".carousel-hover-prev");
//   const nextZone = document.querySelector(".carousel-hover-next");

//   function revealButton(button) {
//     button.classList.add("show");
//     setTimeout(() => {
//       button.classList.remove("show");
//     }, 1500);
//   }

//   prevZone.addEventListener("mouseenter", () => revealButton(prevBtn));
//   nextZone.addEventListener("mouseenter", () => revealButton(nextBtn));

//   prevBtn.addEventListener("click", () => revealButton(prevBtn));
//   nextBtn.addEventListener("click", () => revealButton(nextBtn));
// });

// Thumbnail click logic
document.querySelectorAll(".product-thumbs img").forEach((img) => {
  img.addEventListener("click", () => {
    document
      .querySelectorAll(".product-thumbs img")
      .forEach((i) => i.classList.remove("active"));
    img.classList.add("active");
    document.getElementById("main-image").src = img.src;
  });
});

// Quantity logic
function updateQty(change) {
  const qtyInput = document.getElementById("quantity");
  let qty = parseInt(qtyInput.value);
  qty += change;
  if (qty < 1) qty = 1;
  qtyInput.value = qty;
}

// zoom

const container = document.querySelector(".zoom-container");
const image = container.querySelector(".zoom-image");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / container.offsetWidth) * 100;
  const yPercent = (y / container.offsetHeight) * 100;

  image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  image.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", () => {
  image.style.transformOrigin = "center center";
  image.style.transform = "scale(1)";
});

// shopping cart

// Update quantity input
function updateQty(change) {
  const qtyInput = document.getElementById("quantity");
  let qty = parseInt(qtyInput.value);
  qty += change;
  if (qty < 1) qty = 1;
  qtyInput.value = qty;
}

// Handle Add to Cart
const addToCartBtn = document.getElementById("add-to-cart-btn");
const cartCountEl = document.getElementById("cart-count");

addToCartBtn.addEventListener("click", () => {
  const qty = parseInt(document.getElementById("quantity").value);
  const current = parseInt(cartCountEl.textContent);
  cartCountEl.textContent = current + qty;
});

// color switcher

document.querySelectorAll(".color-swatch").forEach(function (swatch) {
  swatch.addEventListener("click", function () {
    const imgId = this.getAttribute("data-target");
    const newSrc = this.getAttribute("data-img");
    const imgElement = document.getElementById(imgId);
    if (imgElement && newSrc) {
      imgElement.src = newSrc;
    }
  });
});

// Enable clicking on thumbnails to update the main image
function activateThumbnailClicks() {
  document.querySelectorAll(".product-thumbs img").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      const mainImage = document.getElementById("main-image");
      if (mainImage) {
        mainImage.src = this.src;
      }

      // Update active class
      document
        .querySelectorAll(".product-thumbs img")
        .forEach((img) => img.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Run it once for initial thumbnails
activateThumbnailClicks();

// Also call it after swatch click updates thumbnails
document.querySelectorAll(".color-swatch").forEach(function (swatch) {
  swatch.addEventListener("click", function () {
    document
      .querySelectorAll(".color-swatch")
      .forEach((s) => s.classList.remove("active"));
    this.classList.add("active");

    const mainImageSrc = this.getAttribute("data-main");
    const thumbImageSrcs = this.getAttribute("data-thumbs");

    const mainImage = document.getElementById("main-image");
    if (mainImage && mainImageSrc) {
      mainImage.src = mainImageSrc;
    }

    const thumbsContainer = document.querySelector(".product-thumbs");
    if (thumbsContainer && thumbImageSrcs) {
      const newThumbs = thumbImageSrcs.split(",");
      thumbsContainer.innerHTML = "";

      newThumbs.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src.trim();
        img.alt = "thumb";
        if (index === 0) img.classList.add("active");
        thumbsContainer.appendChild(img);
      });

      // Re-activate click listeners on new thumbnails
      activateThumbnailClicks();
    }
  });
});

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("username", username);
    loginModal.style.display = "none";
    alert("Logged in as " + username);
  }
});
