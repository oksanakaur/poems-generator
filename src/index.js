function generatePoem(event) {
    event.preventDefault();


    new Typewriter("#poem", {
      strings: ["I was always afraid of the next card"],
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);