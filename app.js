const circle = document.getElementById("circle");
// const text = document.getElementById('text');
const texts = document.querySelectorAll(".text");
const circleNav = document.querySelectorAll(".circlenav");
const overlay = document.getElementById("overlay");

circle.addEventListener("click", () => {
  overlay.classList.add("active");
  overlay.style.opacity = 0.1;

  circleNav.forEach((cn, index) => {
    setTimeout(() => {
      cn.style.transform = `translate(-${0.18 * Math.pow(index, 2)}rem, -${
        4 * index
      }rem)`;

      cn.style.zIndex = 100 - index;
    }, (index + 1) * 50);
  });

  texts.forEach((text, index) => {
    setTimeout(() => {
      text.style.transform = "translateX(-1rem)";
      text.style.opacity = 1;
    }, (index + 1) * 100); // Adjust the delay duration as needed (in milliseconds)
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");

  circleNav.forEach((cn, index) => {
    setTimeout(() => {
      cn.style.transform = "none";
      // cn.style.transform = `translate(${.18 * Math.pow(index, 2)}rem, ${4 * index}rem)`;
    }, (index + 1) * 50);
  });

  texts.forEach((text, index) => {
    setTimeout(() => {
      text.style.transform = "none";
      text.style.opacity = 0;
    }, (index + 1) * 1); // Adjust the delay duration as needed (in milliseconds)
  });
});
