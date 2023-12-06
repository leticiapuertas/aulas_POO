function somar(){
    let numero1: HTMLInputElement | null = document.querySelector('#n1');
    let numero2: HTMLInputElement | null = document.querySelector('#n2');

    if(numero1 && numero2 && numero1.value !="" && numero2.value != ""){
        alert(parseFloat(numero1.value) + parseFloat(numero2.value));
    }
} 
