document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-button-container");
  const navbarList = document.querySelector(".navbar-list");

  toggleBtn.addEventListener("click", () => {
    navbarList.classList.toggle("toggle-list");
  });

  //   function typeAnimation() {
  //     const words = ["Developer", "Designer"];
  //     let i = 0;
  //     let wordIndex = 0;
  //     let speed = 400;
  //     let pause = 1000;
  //     let element = document.getElementById("identity");

  //     function typeWriter() {
  //       if (i < words[wordIndex].length) {
  //         document.getElementById("identity").innerText +=
  //           words[wordIndex].charAt(i);
  //         i++;
  //         setTimeout(typeWriter, speed);
  //       } else {
  //         setTimeout(() => {
  //           setTimeout(() => {
  //             element.innerText = "";
  //             i = 0;
  //             wordIndex++;
  //             if (wordIndex >= words.length) {
  //               wordIndex = 0;
  //             }
  //             typeWriter();
  //           }, speed);
  //         }, pause);
  //       }
  //     }
  //     typeWriter();
  //   }

  //   typeAnimation();
  // });

  function typeAnimation() {
    // words to show
    const words = ["Developer", "Designer"];
    let i = 0;
    let wordIndex = 0;
    let element = document.getElementById("identity");
    const length = words.length;

    function typeWriter() {
      if (i < words[wordIndex].length) {
        element.innerText += words[wordIndex].charAt(i);
        i++;
        setTimeout(typeWriter, 400);
      } else {
        setTimeout(typeErase, 800);
      }
    }

    function typeErase() {
      if (i > 0) {
        element.innerText = words[wordIndex].substring(0, i - 1);
        i--;
        setTimeout(typeErase, 100);
      } else {
        i = 0;
        wordIndex = (wordIndex + 1) % length;
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }
  typeAnimation();
});
