const input = require("readline-sync");
for(let i = 0; i < 3; i++){

    let user: string = input.question("usuario:");
    let pass: number = parseInt(input.question("senha:"));

    if(user == "adm" && pass == 123){
        console.log("Bem vindo!");
        break;

    }
else{
    console.log("Usuario ou senha incorretos!");
    

}
}

