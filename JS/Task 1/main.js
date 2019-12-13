function* fib(n) {
let forward=true;    
  let n0 = 0;
  let n1 = 1;
  yield n0;
  for (let i = 0; i < n - 1; i++) {
    const n2 = n1 + n0;
    yield n2;
    n0 = n1;
    n1 = n2;
  }
}
