document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-button-container");
  const navbarList = document.querySelector(".navbar-list");

  toggleBtn.addEventListener("click", () => {
    navbarList.classList.toggle("toggle-list");
  });

  function typeAnimation() {
    const words = ["Developer", "Designer"];
    let i = 0;
    let wordIndex = 0;
    let speed = 400;
    let pause = 1000;
    let element = document.getElementById("identity");

    function typeWriter() {
      if (i < words[wordIndex].length) {
        document.getElementById("identity").innerText +=
          words[wordIndex].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          setTimeout(() => {
            element.innerText = "";
            i = 0;
            wordIndex++;
            if (wordIndex >= words.length) {
              wordIndex = 0;
            }
            typeWriter();
          }, speed);
        }, pause);
      }
    }
    typeWriter();
  }

  typeAnimation();
});
