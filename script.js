document.getElementById("finalAmount").style.display="none"
const formulario = document.getElementById('Calculadora');
const valor = document.getElementById("cantidad-dinero");
const De = document.getElementById("moneda-origen");
const A = document.getElementById("moneda-destino");
const alerta = document.getElementById('Calculadora');
let convertir = 0

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

var monedaOrigen = ['Seleccione', 'USD', 'MXN', 'COP', 'EUR', 'GBP']
var monedaDestino = ['Seleccione', 'USD', 'MXN', 'COP', 'EUR', 'GBP']

USD = 1;
MXN = 0.00024;
COP = 0.049;
EUR = 1.13;
GBP = 1.36;

monedaOrigen.forEach((data, index) => {
  const item = document.createElement('option');
  item.setAttribute('value', index)
  item.textContent = data;
  fragmento.appendChild(item)
})

monedaDestino.forEach((data, index) => {
  const item = document.createElement('option');
  item.setAttribute('value', index)
  item.textContent = data;
  fragmento2.appendChild(item)
})

De.appendChild(fragmento);
A.appendChild(fragmento2);
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const origenOption = document.getElementById('moneda-origen');
  const origenMoneda = origenOption.options[origenOption.selectedIndex].value;
  let cantidadDinero = parseFloat(document.getElementById("cantidad-dinero").value);
  const destinoOption = document.getElementById('moneda-destino');
  const destinoMoneda = destinoOption.options[destinoOption.selectedIndex].value;

  const mensajeAlerta = document.createElement('div');
  mensajeAlerta.classList.add('text-center', 'alert');

  if (origenMoneda == 0 || destinoMoneda == 0) {
    mensajeAlerta.classList.add('alert-danger');
    mensajeAlerta.appendChild(document.createTextNode('Seleccione una opción'));
    alerta.appendChild(mensajeAlerta)
    document.getElementById("finalAmount").style.display = "none"
  }
  else if (cantidadDinero < 0 || isNaN(formulario.cantidad) == true) {
    mensajeAlerta.classList.add('alert-danger');
    mensajeAlerta.appendChild(document.createTextNode('Valor(es) Inválido(s)'));
    alerta.appendChild(mensajeAlerta)
    document.getElementById("finalAmount").style.display = "none"
  }

  var valorCalculo = (cantidadDinero * origenMoneda) / destinoMoneda
  valorCalculo = Number(valorCalculo).toFixed(2)
  var valorCalculo = document.createTextNode(valorCalculo)

  let resultadoCalculo = document.getElementById("finalValue")
  resultadoCalculo.innerHTML = ''
  resultadoCalculo.appendChild(valorCalculo)

  document.getElementById("finalAmount").style.display = "block";

  
})

function clearVal(elem) {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}