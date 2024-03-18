let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual é o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "seja muito bem vindo.";
}else{
    elemento.textContent = nomeUsuário;
}

