const mensagem = document.querySelector(".mensagem");
const imagens = document.querySelector(".imagens");
const body = document.querySelector("body");
const data = new Date();
const hora = data.getHours();



function carregar() {
    if (hora > 0 && hora <= 12) {
        body.classList.add("manha")
        imagens.src = "../src/imagens/manha.jpg";
        mensagem.innerHTML = `Agora são ${hora} horas`;
    } else if (hora >= 12 && hora < 18) {
        body.classList.add("tarde")
        imagens.src = "../src/imagens/tarde.jpg";
        mensagem.innerHTML = `Agora são ${hora} horas`;
    } else {
        body.classList.add("noite")
        imagens.src = "../src/imagens/noite.jpg";
        mensagem.innerHTML = `Agora são ${hora} horas`;
    }
}

carregar();
