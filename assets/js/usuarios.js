let nome = document.querySelector('#nomeUsuario')
let validNome = false

let email = document.querySelector('#emailUsuario')
let validEmail = false

let senha = document.querySelector('#senhaUsuario')
let validSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

let listaUser = JSON.parse(localStorage.getItem('listaUser')) || []

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2){
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

email.addEventListener('keyup', ()=> {
    if(email.value.length <= 7){
        email.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        email.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        senha.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Usuário Cadastrado</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(() =>{
            document.getElementById("msgError").style.display = "none";
        }, 2500)

    }else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Nome, email ou senha não atendem os requerimentos</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')

        setTimeout(() =>{
            document.getElementById("msgSucess").style.display = "none";
        }, 2500)
    }
}
