const perkalian = (x, y) => {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x
  }
  console.log(result);
  return result;
}

perkalian(0, 2);
perkalian(1, 14);
perkalian(12, 6);
