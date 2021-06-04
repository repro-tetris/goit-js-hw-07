const DEFAULT_WIDTH = 30;
let nextDivWidth = DEFAULT_WIDTH;

const elements = {
  amountEl: document.querySelector("input[type='number']"),
  createEl: document.querySelector("button[data-action='render']"),
  destroyEl: document.querySelector("button[data-action='destroy']"),
  boxesEl: document.querySelector("#boxes"),
};

elements.createEl.addEventListener("click", () => {
  const amount = Number(elements.amountEl.value);

  if (amount > 0) createBoxes(amount);
});

elements.destroyEl.addEventListener("click", () => {
  destroyBoxes();
  nextDivWidth = DEFAULT_WIDTH;
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let divEl = document.createElement("div");
    divEl.style.width = `${nextDivWidth}px`;
    divEl.style.height = `${nextDivWidth}px`;

    divEl.style.backgroundColor =
      "#" + Math.floor(Math.random() * 8 ** 8).toString(16);
    elements.boxesEl.appendChild(divEl);

    nextDivWidth += 10;
  }
}

function destroyBoxes() {
  elements.boxesEl.innerHTML = "";
}
