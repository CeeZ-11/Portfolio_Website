// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("carousel-control-prev");
  const nextBtn = document.getElementById("carousel-control-next");

  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);

  //API SCREENSHOT MACHINE CODE
  showSlide(currentIndex);

  let imgUrls = document.querySelectorAll(".websiteScreenshot");

  imgUrls.forEach(function (imgUrl) {
    let img = imgUrl.src;
    imgUrl.src =
      "https://api.screenshotmachine.com?key=ae72d1&url=" +
      encodeURIComponent(img) +
      "&dimension=1024x768";

    //MENU DEFAULT STYLE
    //menu.style.position = "fixed";
    //menu.style.opacity = '0';
  });

  //HEADER SCROLL EFFECT
  function handleScroll() {
    const header = document.getElementById("header");
    const headerImg = document.getElementById("header-img");
    const bars = document.querySelectorAll(".bars");

    if (window.scrollY > 0) {
      header.style.backgroundColor = "#0B0E13";
      header.style.height = "40px";
      headerImg.style.width = "clamp(25px, 10vw, 35px)";
      headerImg.style.height = "clamp(25px, 10vw, 35px)";
      bars.forEach(function (bar) {
        bar.style.width = "clamp(25px, 4vw, 25px)";
      });
    } else {
      header.style.backgroundColor = "";
      header.style.height = "";
      headerImg.style.width = "clamp(25px, 10vw, 50px)";
      headerImg.style.height = "clamp(25px, 10vw, 50px)";
      bars.forEach(function (bar) {
        bar.style.width = "clamp(25px, 4vw, 35px)";
      });
    }
  }

  //FOOTER SCROLL EFFECT
  function showFooter() {
    const footer = document.getElementById("footer");

    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    if (window.scrollY < documentHeight - viewportHeight - 460) {
      footer.style.opacity = "0";
    } else footer.style.opacity = "1";
  }

  window.addEventListener("scroll", showFooter);
  window.addEventListener("scroll", handleScroll);
});

document
  .getElementById("submit-contact")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//CAAROUSEL SLIDE
function goToPrevSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
function goToNextSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  currentIndex = (currentIndex + 1) % slides.length;
  length;
  showSlide(currentIndex);
}
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "";
    }
  });
}
//HOVER EFFECT FUNCTION
const resInfo = document.querySelectorAll(".resumeInfo");
const aboutInfo = document.querySelectorAll(".aboutInfo");

hoverEffect(resInfo);
hoverEffect(aboutInfo);

function hoverEffect(info) {
  info.forEach(function (div) {
    div.addEventListener("mouseover", function () {
      div.style.opacity = "1";
      info.forEach(function (innerDiv) {
        if (innerDiv !== div) {
          innerDiv.style.opacity = "0.4";
        }
      });
    });
    div.addEventListener("mouseout", function () {
      info.forEach(function (innerDiv) {
        innerDiv.style.opacity = "1";
      });
    });
  });
}

//MENU ONCLICK FUNCTION
const menu = document.getElementById("menu");

function onClickMenu(menu) {
  menu.addEventListener("click", function () {
    if (header.style.height == "40px") {
      menu.classList.toggle("change2");
      menu.style.gap = "10%";
    } else {
      menu.classList.toggle("change1");
      menu.style.gap = "10%";
    }
  });

  menu.addEventListener("mouseover", function () {
    if (
      !menu.classList.contains("change1") &&
      !menu.classList.contains("change2")
    ) {
      menu.style.gap = "15%";
      menu.style.transition = "all ease 100ms";
    }
  });
  menu.addEventListener("mouseout", function () {
    if (
      !menu.classList.contains("change1") &&
      !menu.classList.contains("change2")
    ) {
      menu.style.gap = "10%";
      menu.style.transition = "all ease 100ms";
    }
  });
}

onClickMenu(menu);
