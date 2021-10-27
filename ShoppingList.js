function shoppingListCost(arr) {
  let result = 0;

  arr.forEach((item) => {
    const name = item[0];
    let qt = groceries[name].bogof ? Math.ceil(item[1] / 2) : item[1];
    const newPrice = groceries[name].discount
      ? groceries[name].price -
        groceries[name].price * (groceries[name].discount / 100)
      : groceries[name].price;

    result += qt * newPrice;
  });
  return Number(result.toFixed(2));
}

// Already existing in the global scope is an object which
//gives some information regarding the shopping items

// https://www.codewars.com/kata/596266482f9add20f70001fc
