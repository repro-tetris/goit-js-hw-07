const inputEl = document.querySelector("#validation-input");
const charCount = Number(inputEl.getAttribute("data-length"));

console.log(inputEl.classList);

inputEl.addEventListener("blur", (event) => {
  const inputCount = event.currentTarget.value.length;
  const toggleClass = inputCount === charCount ? "valid" : "invalid";
  inputEl.classList.add(toggleClass);
});

inputEl.addEventListener("focus", () =>
  inputEl.classList.remove(...inputEl.classList)
);
