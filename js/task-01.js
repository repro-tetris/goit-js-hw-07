const categoriesEl = document.querySelector("#categories");

console.log(`В списке ${categoriesEl.childElementCount} категории.`);

const arrayLiEl = [...categoriesEl.children];

arrayLiEl.forEach((el) => {
  console.log(`Категория: ${el.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${el.querySelector("ul").childElementCount}`
  );
});
