"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  showLoveImage();
  // Oculta la imagen principal
  catImg.style.display = "none";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function showLoveImage() {
  const loveImage = document.createElement("img");
  loveImage.src = "img/love.gif";
  loveImage.alt = "Love GIF";
  loveImage.style.width = "200px"; // Ajusta el tamaño según sea necesario
  loveImage.style.height = "200px"; // Ajusta el tamaño según sea necesario

  // Inserta la imagen de amor después de la primera imagen
  catImg.insertAdjacentElement("afterend", loveImage);

  // Crea un párrafo para el mensaje "Yayyy!! :3"
  const yayMessage = document.createElement("p");
  yayMessage.textContent = "";

  // Inserta el mensaje después de la segunda imagen
  loveImage.insertAdjacentElement("afterend", yayMessage);
}
