function calcularMedia() {

const n1 = parseFloat(document.getElementById('nota1').value);
const n2 = parseFloat(document.getElementById('nota2').value);
const n3 = parseFloat(document.getElementById('nota3').value);
const n4 = parseFloat(document.getElementById('nota4').value);

if (n1 , n2 , n3 , n4 > 25) {
        alert("teste");
        return;
    }

const divResultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    divResultado.style.display = "block";
    divResultado.className = "reprovado";
    divResultado.textContent = " Por favor, digite as 4 notas.";
    return;
}
const mediaFinal = (n1 + n2 + n3 + n4);

if (n1 > 25 || n2 > 25 || n3 >25 || n4 > 25) {
        alert("teste");
        return;
    }


const mediaAprovacao = 75;

divResultado.style.display = "block";


if (mediaFinal >= mediaAprovacao) {
    if (mediaFinal < 90) {
        divResultado.className = "aprovado";
        divResultado.innerHTML = ` Aprovado!<br>Sua média foi: ${mediaFinal.toFixed(1)}`}
    else  {
        divResultado.className = "aprovado";
        divResultado.innerHTML = ` Aprovado sua nota foi exelente!<br>Sua média foi: ${mediaFinal.toFixed(1)}`;} 
} else {
divResultado.className = "reprovado";
divResultado.innerHTML = `Você terá que fazer recuperação <br>Sua média foi: ${mediaFinal.toFixed(1)}`;
}
}