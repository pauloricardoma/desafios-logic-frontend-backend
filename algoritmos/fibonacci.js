function fibonacci(num) {
  const array = [0, 1];
  for (let i = 2; i < num; i++) {
    array[i] = parseInt(array[i - 1] + array[i - 2]);
  }
  return array;
}

console.log(fibonacci(6));