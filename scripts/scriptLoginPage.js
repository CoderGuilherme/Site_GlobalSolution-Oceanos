
function Login(){   
    const senha = parseInt(document.getElementById('senha_input').value);
    const usuario = document.getElementById('usuario_input').value;

    if (senha === 1234 && usuario === "admin"){
        alert('Acesso liberado');
        location.href = "index.html"
    }
    else if(senha != 1234){
        alert('Senha incorreta');}
    else if(usuario != "admin"){
        alert('Usuario incorreto')
    }
    else{
        alert('login incorreto')
    }

}