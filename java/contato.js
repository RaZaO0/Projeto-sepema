const btn = document.getElementById("botao-enviar")
btn.addEventListener("click", function() {

const btn = document.getElementById("botao-enviar");
const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const assunto = document.getElementById("assunto").value.trim();
const mensagem = document.getElementById("mensagem").value.trim();

    if(!nome ||!email ||!assunto ||!mensagem) {
    alert("Preencha todos os campos!")
} else {
    alert("Mensagem enviada com sucesso!")
}

});
