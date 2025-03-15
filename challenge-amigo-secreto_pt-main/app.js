let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista de amigos
    input.value = ''; // Limpa o campo de entrada
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li); // Adiciona cada amigo à lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione alguns amigos antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
    confetti();
}

function exibirResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigo}`;
    resultado.appendChild(li); // Adiciona o amigo sorteado ao resultado
}