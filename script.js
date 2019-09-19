var conte = 0;
var conta = 0;
var contc = 0;

function apagar(event) {
  event.target.parentElement.parentElement.remove();
}

function editar(event) {
  let entrada1 = document.createElement("INPUT");
  let entrada2 = document.createElement("INPUT");
  let entrada3 = document.createElement("INPUT");
  let valor = document.querySelector(`#${event.target.id}`).parentElement.parentElement;
  let id = valor.childNodes;
  entrada1.value = id[0].textContent;
  entrada2.value = id[1].textContent;
  entrada3.value = id[2].textContent;

  if(event.target.textContent === 'Concluído') {
    let t1 = id[0].value
    let t2 = id[0].value
    let t3 = id[0].value
    // console.log(id[0].textContent);
    id[0].innerHTML = t1;
    id[1].innerHTML = t2;
    id[2].innerHTML = t3;
    event.target.textContent = 'Editar';
  }
  
  if(event.target.textContent === 'Editar') {
    id[0].textContent = '';
    id[1].textContent = '';
    id[2].textContent = '';
    id[0].appendChild(entrada1);
    id[1].appendChild(entrada2);
    event.target.textContent = 'Concluído';
    id[2].appendChild(entrada3);
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
  bt1.onclick = editar;
  
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
