let username = ""
let password = ""
username = "davi"
password = "87654321"
if (username === "matheus" && password === "12345678") {
    console.log("login acessado")
}
else if (username === "matheus" && password !="12345678") {
    
    console.log(`a senha está incorreta`)
}
else if (username !="matheus" && password === "12345678") {///
    
    console.log(`seu usuário está errado mas a senha está correta`)
}
else{
    console.log("login e senha incorretos")
}