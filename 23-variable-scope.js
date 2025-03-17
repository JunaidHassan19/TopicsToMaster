/*
  Variable scope = where a variable is recognized
                   and accessible (Local vs global)
*/

/*
// --- Local ---
fun1();
fun2();

function fun1() {
  let x = 1;
  console.log(x);
}

function fun2() {
  let x = 2;
  console.log(x);
}
*/

// --- Global ---

let x = 3;
fun3();
fun2();

function fun3() {
  console.log(x);
}

function fun2() {
  console.log(x);
}