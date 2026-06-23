function calcularMedia() {

const n1 = parseFloat(document.getElementById('nota1').value);
const n2 = parseFloat(document.getElementById('nota2').value);
const n3 = parseFloat(document.getElementById('nota3').value);
const n4 = parseFloat(document.getElementById('nota4').value);

const divResultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    divResultado.style.display = "block";
    divResultado.className = "reprovado";
    divResultado.textContent = " Por favor, digite as 4 notas.";
    return;
}
const mediaFinal = (n1 + n2 + n3 + n4) / 4;

const mediaAprovacao = 6.0;

divResultado.style.display = "block";


if (mediaFinal >= mediaAprovacao) {
divResultado.className = "aprovado";
divResultado.innerHTML = ` Aprovado!<br>Sua média foi: ${mediaFinal.toFixed(1)}`;
} else {
divResultado.className = "reprovado";
divResultado.innerHTML = ` Recuperação!<br>Sua média foi: ${mediaFinal.toFixed(1)}`;
}
}