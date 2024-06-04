function displayPoem(response) {

    console.log("poem generated");
     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "dad37f420246e32tc7b0f585ob5420a7";
let context = "You are a creative expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure you follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
let prompt = `User instructions: Generate a poem about love ${instructionsInput.value}`;
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⌛Generating a poem about ${instructionsInput.value}</div>`;

console.log("Generating Poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);
  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);