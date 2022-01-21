function faxina(objects) {
  const result = Object.keys(objects).map((key) => {
    if (objects[key]) return [(key), objects[key]];
  });

  const objectFiltrado = result.filter(object => object !== undefined);

  const objectResult = objectFiltrado.reduce((ac, cv) => ({...ac, [cv[0]]: cv[1]}), {})

  return objectResult;
}

console.log(faxina({"fizz": "buzz", "foo": null, "bar": 42, "nan": NaN, "dois": "dois", "tres": 3}))