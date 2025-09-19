const meuBotao = document.getElementById('bt_entrar');

const campoEmaill = document.getElementById('inputEmail3');

const campoSenha = document.getElementById('inputPassword3');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailCorreto = "teste@empresa.com" ;
const senhaCorreta = "123456";


meuBotao.addEventListener("click",function (event) {
    event.preventDefault();

    const email = campoEmaill.value;
    const senha = campoSenha.value;
    

    if (email.length == "") {
        alert("Atenção o campo de E-mail deve ser Preenchido")

    }else if(senha.length == ""){
        alert("Atenção A senha deve ser preenchida")
    }

    if(email.length != ""){

            if (regexEmail.test(email)) {
                console.log("email ok")
                    if (senha.length < 6) {
                        alert("Senha deve ter pelo menos 6 caracteres")
                    }else{
                        if (email === emailCorreto) {
                            if (senha === senhaCorreta) {
                                alert("Login Feito com Sucesso")
                            }else{
                                alert("Senha Incorreta")
                            }
                        }else{
                            alert("Email Incorreto")
                        }
                    }
            }else{
                alert("E-mail Inválido")
            }

    }

})



