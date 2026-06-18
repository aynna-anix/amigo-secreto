let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById("nomeAmigo");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    amigos.push(nome);

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

    campo.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    document.getElementById("resultado").textContent =
        "Amigo sorteado: " + sorteado;
}