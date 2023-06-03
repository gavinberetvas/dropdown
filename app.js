const circle = document.getElementById('circle');
// const text = document.getElementById('text');
const texts = document.querySelectorAll('.text');
const circleNav = document.querySelectorAll('.circlenav');



circle.addEventListener('click', () => {
    circleNav.forEach((cn, index) => {
        setTimeout(() => {
            cn.style.transform = `translateY(-${4 * index}rem)`
            cn.style.zIndex = 100 - index;

        },(index + 1) * 50);
    });

    texts.forEach((text, index) => {
      setTimeout(() => {
        text.style.transform = 'translateX(-1rem)';
        text.style.opacity = 1;
      }, (index + 1) * 100); // Adjust the delay duration as needed (in milliseconds)
    });
  });