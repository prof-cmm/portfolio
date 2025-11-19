let texto = document.querySelector("#nome");
//texto.textContent = "Mailon";

let nome = prompt("Qual é o seu nome?");
texto.textContent = nome;

if (nome == null){
    texto.textContent = 'Seja bem-vindo';
}else{
    texto.textContent = nome;
}
