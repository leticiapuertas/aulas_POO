function ola(){
    console.log("Ola!");
}

function criarElemento(){
    //selecionar em qual elemento voce quer criar ou destruir o novo elemento.
    let body: HTMLElement | null = document.querySelector('main')!;
    

    //cria o novo elemento.
    let paragrafo = document.createElement('b');
    let texto = document.createTextNode('Lado esquerdo!');

    paragrafo.appendChild(texto);
    //visualiza o novo elemento dentro do elemento ja existente que vc selecionou.
    body.appendChild(paragrafo);
}

function mudarElemento(){
    let b: HTMLElement | null = document.querySelector("b")!;

    b.innerText = "to com fome!!!";

}

function deletarElemento(){
    let b : HTMLElement | null =
    document.querySelector('b')!;

    b.remove();
}

