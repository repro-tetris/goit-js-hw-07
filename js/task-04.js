let counterValue = 0;

const elements = {
  valueEl: document.querySelector("#value"),
  bntIncrement: document.querySelector('button[data-action="increment"]'),
  bntDecrement: document.querySelector('button[data-action="decrement"]'),
};

const increment = () => counterValue++;
const decrement = () => counterValue--;

const setValueEl = () => (elements.valueEl.innerText = counterValue);

elements.bntIncrement.addEventListener("click", () => {
  increment();
  setValueEl();
});

elements.bntDecrement.addEventListener("click", () => {
  decrement();
  setValueEl();
});
