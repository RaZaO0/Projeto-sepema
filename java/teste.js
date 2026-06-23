const API = "http://localhost:3000";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



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

cards2.addEventListener("mouseover", function() {
    txt2.style.display = "block";
});

cards2.addEventListener("mouseout", function() {
    txt2.style.display = "none";
});

cards3.addEventListener("mouseover", function() {
    txt3.style.display = "block";
});

cards3.addEventListener("mouseout", function() {
    txt3.style.display = "none";
});

cards4.addEventListener("mouseover", function() {
    txt4.style.display = "block";
});

cards4.addEventListener("mouseout", function() {
    txt4.style.display = "none";
});



