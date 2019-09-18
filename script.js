var conte = 0;
var conta = 0;

function apagar(event) {
  event.target.parentElement.parentElement.remove();
}

function inserir() {
  const x = document.getElementById("tabela");
  const y = document.querySelectorAll("input");
  const tr = document.createElement("TR");
  const texto = [];
  const addtr = x.appendChild(tr);
  const bt1 = document.createElement("button");
  const bt2 = document.createElement("button");

  for (let i = 0; i < y.length - 1; i++) {
    texto.push(y[i]);
  }

  for (let i = 0; i < 3; i++) {
    let muda = addtr.appendChild(document.createElement("TD")).innerHTML = texto[i].value;
  }
  
  bt1.innerHTML = 'Editar';
  bt1.id = `edit${conte}`;
  
  bt2.innerHTML = 'Apagar';
  bt2.id = `apag${conta}`;
  bt2.onclick = apagar;

  addtr.appendChild(document.createElement("TD")).appendChild(bt1);
  addtr.appendChild(document.createElement("TD")).appendChild(bt2);

  document.getElementById(`edit${conte}`).style.width = "100%";
  document.getElementById(`edit${conte}`).style.height = "100%";

  document.getElementById(`apag${conta}`).style.width = "100%";
  document.getElementById(`apag${conta}`).style.height = "100%";
  
  conte++;
  conta++;
  
  for (let i = 0; i < texto.length; i++) {
    texto[i].value = " ";
  }
}
