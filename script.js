function resultado() {
  const input = document.getElementById("n");
  if (!input) {
    console.error('Element with id "n" not found');
    return;
  }
  const expr = input.value;
  try {
    const x = eval(expr);
    const resultadoDiv = document.getElementById("Resultado");
    if (resultadoDiv) resultadoDiv.innerHTML = `<h1>${x}</h1>`;
  } catch (e) {
    console.error(e);
    const resultadoDiv = document.getElementById("Resultado");
    if (resultadoDiv) resultadoDiv.innerHTML = `<h1>Error</h1>`;
  }
}
// 