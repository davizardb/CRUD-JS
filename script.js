var conte = 0;
var conta = 0;
var contc = 0;
var num;

function apagar(e) {
  e.target.parentElement.parentElement.remove();
}


function handler(e) {
  const text = e.target.textContent;
  const butao = document.querySelector("#butao");
  if(text === 'Editar') {
    butao.disabled = true;
    return editar(e);
  }
  else {
    butao.disabled = false;
    return editor(e);
  }
}

function editor(e) {
  let valor = document.querySelector(`#${e.target.id}`).parentElement.parentElement;
  let id = valor.childNodes;
  let v1 = id[0].childNodes[0].value;
  let v2 = id[1].childNodes[0].value;
  let v3 = id[2].childNodes[0].value;
  id[0].innerHTML = v1;
  id[1].innerHTML = v2;
  id[2].innerHTML = v3;
  e.target.textContent = 'Editar';
}

function editar(e) {
  let entrada1 = document.createElement("INPUT");
  let entrada2 = document.createElement("INPUT");
  let entrada3 = document.createElement("INPUT");
  let valor = document.querySelector(`#${e.target.id}`).parentElement.parentElement;
  let id = valor.childNodes;
  entrada1.value = id[0].textContent;
  entrada2.value = id[1].textContent;
  entrada3.value = id[2].textContent;

  if(e.target.textContent === 'Concluído') {
    // e.target.onclick = editor(e);
  }
  
  else {
    id[0].textContent = '';
    id[1].textContent = '';
    id[2].textContent = '';
    id[0].appendChild(entrada1);
    id[1].appendChild(entrada2);
    id[2].appendChild(entrada3);
    e.target.textContent = 'Concluído';
  }

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
  
  tr.id = `tr${contc}`;

  bt1.innerHTML = 'Editar';
  bt1.id = `edit${conte}`;
  bt1.onclick = handler;
  
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
  contc++;
  
  for (let i = 0; i < texto.length; i++) {
    texto[i].value = " ";
  }
}
