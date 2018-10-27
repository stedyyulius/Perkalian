const perkalian = (x, y) => {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x
  }
  return result;
}

console.log(perkalian(0, 2));
console.log(perkalian(1, 14));
console.log(perkalian(12, 6));
