import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp);

// ? Selecting the buttons
const redactButton = document.querySelector("#redact-btn");
const clearButton = document.querySelector(".clear-btn");
const clearRedactResult = document.querySelector("#clear-btn");

// ? Adding event handler to the buttons
redactButton.addEventListener("click", () => {
  redactNow();
});

clearButton.addEventListener("click", () => {
  clearScreen();
});

clearRedactResult.addEventListener("click", () => {
  clearResult();
});


// ! Redacting Function
function redactNow() {
  // ? Selecting the input fields
  const contentField = document.querySelector("#content-text");
  const replaceWord = document.querySelector("#word-box");
  const replaceSymbol = document.querySelector("#symbol-box");

  let text = contentField.value;
  let wordsToRedact = replaceWord.value;
  let scrambleSymbol = replaceSymbol.value;
  scrambleSymbol = scrambleSymbol || "*";

  wordsToRedact = wordsToRedact.toLowerCase().trim();
  let dividedOriginalText;
  let firstWord = text.toLowerCase().split(" ")[0];

  for (let index in wordsToRedact) {
    if (firstWord === wordsToRedact[index]) {
      dividedOriginalText = text.trim().toLowerCase().split(" ");
    } else {
      dividedOriginalText = text.trim().split(" ");
    }
  }

  const scrambledWord = scrambleSymbol.repeat(wordsToRedact.length);

  if (text === "" || wordsToRedact === "") {
    alert("Please populate the input field 🙏🙏🏿🙏🏿");
    return;
  }

  let characterCount = 0;

  for (let index in dividedOriginalText) {
    if (
      dividedOriginalText[index]
        .replace(`{[^a-zA-Z0-9 ]}g`, "")
        .toLowerCase() === wordsToRedact
    ) {
      dividedOriginalText[index] = scrambledWord;
      characterCount = characterCount++;
    }
  }

  const redactedTextContent = dividedOriginalText.join(" ");

  renderRedactedText(redactedTextContent);


}

// ? Rendering the redacted text
function renderRedactedText(redactedTextContent) {
  const redactResult = document.querySelector("#result-text");
  redactResult.textContent = redactedTextContent;
}

// ? clear input box
function clearScreen() {
  const contentField = document.querySelector("#content-text");
  const replaceWord = document.querySelector("#word-box");
  const replaceSymbol = document.querySelector("#symbol-box");

  contentField.value = "";
  replaceWord.value = "";
  replaceSymbol.value = "";
}

// ? clear result box
function clearResult() {
  const redactResult = document.querySelector("#result-text");
  redactResult.textContent = "";
}