const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here

const btnTop = document.getElementById("btnTop");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Subir suavemente
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});