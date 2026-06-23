const btn = document.getElementById("botao-enviar");
const area = document.getElementById("area");

btn.addEventListener("click", function() {
    const texto = document.createElement("p");
    texto.textContent = "Sua mensagem foi enviada!!";
    area.appendChild(texto);
});