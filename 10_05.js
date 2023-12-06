function ola() {
    console.log("Ola!");
}
function criarElemento() {
    //selecionar em qual elemento voce quer criar ou destruir o novo elemento.
    var body = document.querySelector('main');
    //cria o novo elemento.
    var paragrafo = document.createElement('b');
    var texto = document.createTextNode('Lado esquerdo!');
    paragrafo.appendChild(texto);
    //visualiza o novo elemento dentro do elemento ja existente que vc selecionou.
    body.appendChild(paragrafo);
}
function mudarElemento() {
    var b = document.querySelector("b");
    b.innerText = "to com fome!!!";
}
function deletarElemento() {
    var b = document.querySelector('b');
    b.remove();
}
