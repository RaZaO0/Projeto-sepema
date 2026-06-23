const contador = document.getElementById("contador");
let count = 0;

contador.addEventListener("click", function () {
    count++;

    if(count > 10){
        count = 10;
    }

    contador.innerText = count;
});