


function sum() {
  
  

  let y1 = document.getElementById("n1").value;
  let x2 = document.getElementById("n2").value;

  n1 = parseInt(y1);
  n2 = parseInt(x2);
  let resultadoDiv = document.getElementById("Resultado");
  resultadoDiv.innerHTML = `<h1>${n1 + n2}</h1>`;
}
