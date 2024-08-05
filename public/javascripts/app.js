document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-button-container");
  const navbarList = document.querySelector(".navbar-list");
  const navBar = document.querySelector("nav");
  const bars = document.querySelector(".fa-bars");
  const xMark = document.querySelector(".fa-xmark");
  const list = document.querySelectorAll(".list-item");
  const form = document.querySelector("#my-form");
  const popUpMsg = document.querySelector(".pop-up-msg");
  let navBarToggled = false;

  // preventing default refreshing on form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("step 1 completed");
    popUpMsg.classList.remove("hidden");
    popUpMsg.classList.add("flex");
    popUpMsg.classList.add("opacity-10");

    setTimeout(() => {
      popUpMsg.classList.add("fade");

      setTimeout(() => {
        popUpMsg.classList.remove("flex");
        popUpMsg.classList.remove("fade");
        popUpMsg.classList.add("hidden");
      }, 2200);
    }, 2500);

    const formData = new FormData(form);
    console.log("step 2 completed");

    fetch("/formaction", {
      method: "POST",
      body: formData,
    });

    form.reset();
  });

  // function for toggling navbar
  function toggleNavbar() {
    bars.classList.toggle("display-none");
    xMark.classList.toggle("display-none");
    if (navbarList.classList.contains("toggle-list")) {
      navBarToggled = true;
      navBar.classList.add("h-screen");
    } else {
      navBarToggled = false;
      navBar.classList.remove("h-screen");
    }
  }

  // function for doing toggle on click
  function toggleButton() {
    toggleBtn.addEventListener("click", () => {
      navbarList.classList.toggle("toggle-list");
      toggleNavbar();
    });
  }
  toggleButton();

  // for removing navbar while clicking items on navbar
  for (let item of list) {
    item.addEventListener("click", () => {
      if (navBarToggled === true) {
        navbarList.classList.remove("toggle-list");
      }
      toggleNavbar();
    });
  }

  function typeAnimation() {
    // words to show
    const words = ["Developer", "Designer"];
    // setting index for selecting word in the position of 1
    let i = 0;
    // index of word in the array words for selecting different word
    let wordIndex = 0;
    let element = document.getElementById("identity");

    // to type the word with 400 milliseconds interval
    function typeWriter() {
      if (i < words[wordIndex].length) {
        element.innerText += words[wordIndex].charAt(i);
        i++;
        // will call the typewriter with 400 milliseconds interval
        setTimeout(typeWriter, 400);
        // this will execute after the completion of typing the word
      } else {
        // will call the function to erase the word after 800 milliseconds
        setTimeout(typeErase, 800);
      }
    }

    // function to erase the typed word
    function typeErase() {
      // erase the word
      if (i > 0) {
        element.innerText = words[wordIndex].substring(0, i - 1);
        i--;
        // will erase the word with 100 milliseconds speed
        setTimeout(typeErase, 100);
        // this will work after erasing the word
      } else {
        // i is intialized to 0 before the beginning of next word ( even though it is zero after typing the previous word)
        i = 0;
        // function to type next word by changing the index
        function indexWord() {
          switch (wordIndex) {
            case 0:
              wordIndex = 1;
              break;
            // resetting the index to zero after completed typing the all words
            case 1:
              wordIndex = 0;
              break;
          }
        }
        indexWord();
        // will call the typewriter function with a speed of 100 milliseconds
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }
  typeAnimation();
});
