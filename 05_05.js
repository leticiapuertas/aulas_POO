var input = require("readline-sync");
for (var i = 0; i < 3; i++) {
    var user = input.question("usuario:");
    var pass = parseInt(input.question("senha:"));
    if (user == "adm" && pass == 123) {
        console.log("Bem vindo!");
        break;
    }
    else {
        console.log("Usuario ou senha incorretos!");
    }
}
