function slidesPlagin(activeSlide = 0) {
  /* Эту функцию мы задаем а потом выываем в конце, с помощью этого мы задает какой элемент будет с класом актив*/
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveCLasees();

      slide.classList.add("active");
    });
  }

  function clearActiveCLasees() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlagin();
