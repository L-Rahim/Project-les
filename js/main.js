console.log('main js');

const changeButton = document.getElementById(".throw-Button");
const ownTextDiv = document.querySelector(".own-text");

changeButton.addEventListener("click", () => {
  const newText = prompt("Voer nieuwe tekst in:");

  if (newText !== null) {
    ownTextDiv.textContent = newText;
  }
});