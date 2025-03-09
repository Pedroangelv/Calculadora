let y1 = document.getElementById("n1").value;
let x2 = document.getElementById("n2").value;

n1 = parseInt(y1);
n2 = parseInt(x2);



function sum() {
  let n = document.createElement("div");
  n.innerHTML = ""
  n.innerHTML = `
  <h1>${n1+n2}</h1>
  `
  document.getElementById("Resultado").appendChild(n)
}
