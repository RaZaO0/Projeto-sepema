const caixa = document.getElementById("java-crd1");
const caixa2 = document.getElementById("java-crd2");
const caixa3 = document.getElementById("java-crd3");
const caixa4 = document.getElementById("java-crd4");

const texto1 = document.getElementById("txtjava1");
const texto2 = document.getElementById("txtjava2");
const texto3 = document.getElementById("txtjava3");
const texto4 = document.getElementById("txtjava4");

texto1.style.display = "none";
texto2.style.display = "none";
texto3.style.display = "none";
texto4.style.display = "none";

//mirella


caixa.addEventListener("mouseover", function() {
    texto1.style.display = "block";
    texto1.style.color = "blue";

});

caixa.addEventListener("mouseout", function() {
    texto1.style.display = "none";
    
});

caixa2.addEventListener("mouseover", function() {
    texto2.style.display = "block";
    texto2.style.color = "blue";

});

caixa2.addEventListener("mouseout", function() {
    texto2.style.display = "none";
});

caixa3.addEventListener("mouseover", function() {
    texto3.style.display = "block";
    texto3.style.color = "blue"
});

caixa3.addEventListener("mouseout", function() {
    texto3.style.display = "none";
});

caixa4.addEventListener("mouseover", function() {
    texto4.style.display = "block";
    texto4.style.color = "blue";
});

caixa4.addEventListener("mouseout", function() {
    texto4.style.display = "none";
});
//
const imga = document.getElementById("imagem");

imga.addEventListener("click", function() {
    imga.src = "pasta fotos/img2.avif"
});
//



const cards1 = document.getElementById ("card1");
const cards2 = document.getElementById ("card2");
const cards3 = document.getElementById ("card3");
const cards4 = document.getElementById ("card4");


const txtt1 = document.getElementById ("teste");
const txt2 = document.getElementById ("txt-2");
const txt3 = document.getElementById ("txt-3");
const txt4 = document.getElementById ("txt-4");


txtt1.style.display = "none";
txt2.style.display = "none";
txt3.style.display = "none";
txt4.style.display = "none";



cards1.addEventListener("mouseover", function() {
    txtt1.style.display = "block";
});

cards1.addEventListener("mouseout", function() {
    txtt1.style.display = "none";
    
  
});

caixa2.addEventListener("mouseover", function() {
    texto2.style.display = "block";
});

caixa2.addEventListener("mouseout", function() {
    texto2.style.display = "none";
});

caixa3.addEventListener("mouseover", function() {
    texto3.style.display = "block";
});

caixa3.addEventListener("mouseout", function() {
    texto3.style.display = "none";
});

caixa4.addEventListener("mouseover", function() {
    texto4.style.display = "block";
});

caixa4.addEventListener("mouseout", function() {
    texto4.style.display = "none";
});




