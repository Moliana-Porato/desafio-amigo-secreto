//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = ""),
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
      lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.lenght === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("Para poder realizar o sorteio, é preciso ter três amigos ou mais.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;

  dispararConfete();

  sorteados = [];

  atualizarLista();
}

function dispararConfete() {
  var count = 500;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
