function Ola() {
    alert("ola turma");
}
function pegaTexto() {
    var input = document.querySelector('#texto');
    if (input != null) {
        var texto = input.value;
        var res = document.querySelector('#resultado');
        res.value = texto;
    }
}
