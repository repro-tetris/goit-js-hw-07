const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

document.querySelector("#ingredients").insertAdjacentHTML(
  "afterbegin",
  ingredients
    .map((element) => {
      const ingredientEl = document.createElement("li");
      ingredientEl.innerText = element;
      return ingredientEl.outerHTML;
    })
    .join("")
);
