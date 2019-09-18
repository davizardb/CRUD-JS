function inserir() {
  const x = document.getElementById("tabela");
  const y = document.querySelectorAll("input");
  const tr = document.createElement("TR");
  const texto = [];
  for (let i = 0; i < y.length - 1; i++) {
    texto.push(y[i]);
  }
  const addtr = x.appendChild(tr);
  for (let i = 0; i < 3; i++) {
    addtr.appendChild(document.createElement("TD")).innerHTML = texto[i].value;
  }
  for (let i = 0; i < texto.length; i++) {
    texto[i].value = " ";
  }
}
