onload = () => {
  document.body.classList.remove("container");
};

const photo = document.querySelector('.photo');
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let colorIndex = 0;

setInterval(() => {
  photo.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000); // Cambia el color cada segundo