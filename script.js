document.addEventListener("DOMContentLoaded", function() {
    const h5Elements = document.querySelectorAll("h5");
  
    h5Elements.forEach(function(h5) {
      h5.addEventListener("click", function() {
        const colors = ["green", "blue", "red"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.color = randomColor;
      });
    });
  });
  