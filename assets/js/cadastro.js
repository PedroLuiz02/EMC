let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let ConfirmEmail = document.querySelector('#ConfirmEmail')
let labelConfirmEmail = document.querySelector('#labelConfirmEmail')
let validConfirmEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let ConfirmSenha = document.querySelector('#ConfirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style','color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelNome.setAttribute('style','color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

email.addEventListener('keyup', ()=> {
    if(email.value.length <= 7){
        labelEmail.setAttribute('style','color: red')
        labelEmail.innerHTML = 'Email *Insira no minimo 8 caracteres'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    }else{
        labelEmail.setAttribute('style','color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

ConfirmEmail.addEventListener('keyup', ()=> {
    if(email.value != ConfirmEmail.value){
        labelConfirmEmail.setAttribute('style','color: red')
        labelConfirmEmail.innerHTML = 'Email *E-mails não são iguais'
        ConfirmEmail.setAttribute('style', 'border-color: red')
        validConfirmEmail = false
    }else{
        labelConfirmEmail.setAttribute('style','color: green')
        labelConfirmEmail.innerHTML = 'Email'
        ConfirmEmail.setAttribute('style', 'border-color: green')
        validConfirmEmail = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style','color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style','color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

ConfirmSenha.addEventListener('keyup', ()=> {
    if(senha.value != ConfirmSenha.value){
        labelConfirmSenha.setAttribute('style','color: red')
        labelConfirmSenha.innerHTML = 'Senha *As senhas estão diferentes'
        ConfirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style','color: green')
        labelConfirmSenha.innerHTML = 'Senha'
        ConfirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validConfirmEmail && validSenha && validConfirmSenha){
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
        msgSucess.innerHTML = '<strong>Cadastrando Usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(() =>{
            window.location.href = 'log_in.html'
        }, 2700)

    }else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
    }
}