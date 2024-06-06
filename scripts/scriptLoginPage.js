
function Login(){   
    const senha = parseInt(document.getElementById('senha_input').value);
    const usuario = document.getElementById('usuario_input').value;

    if (senha === 1234){
        alert('Acesso liberado');
        location.href = "index.html"
    }
    else{
        alert('Senha incorreta');
    }

}