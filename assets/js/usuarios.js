let modal = document.querySelector('.modal-container')
let usuariosForm = document.querySelector('#usuarioForm')
let usuariosTBody = document.querySelector('#usuariosTBody')
let nomeUsuario = document.querySelector('#nomeUsuario')
let emailUsuario = document.querySelector('#emailUsuario')
let senhaUsuario = document.querySelector('#senhaUsuario')
let btnSalvar = document.querySelector('#btnSalvar')

let M_nomeUsuario = document.querySelector('#M_nomeUsuario')
let M_emailUsuario = document.querySelector('#M_emailUsuario')
let M_senhaUsuario = document.querySelector('#M_senhaUsuario')
let M_btnSalvar = document.querySelector('#M_btnSalvar')

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

let validNome = false

let validEmail = false
let validSenha = false

let itens
let id

nomeUsuario.addEventListener('keyup', () => {
  if (nomeUsuario.value.length <= 2) {
    nomeUsuario.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    nomeUsuario.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

emailUsuario.addEventListener('keyup', () => {
  if (emailUsuario.value.length <= 7) {
    emailUsuario.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    emailUsuario.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

senhaUsuario.addEventListener('keyup', () => {
  if (senhaUsuario.value.length <= 5) {
    senhaUsuario.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    senhaUsuario.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

function cadastrarUser() {
    if (validNome && validEmail && validSenha) {
      itens = JSON.parse(localStorage.getItem('listaUser')) || []
  
      const novoUsuario = {
        nomeCad: nomeUsuario.value,
        emailCad: emailUsuario.value,
        senhaCad: senhaUsuario.value
      }
  
      itens.push(novoUsuario)
      localStorage.setItem('listaUser', JSON.stringify(itens))
  
      msgSucess.style.display = 'block'
      msgSucess.innerHTML = '<strong>Usuário cadastrado com sucesso!</strong>'
      msgError.style.display = 'none'
  
      setTimeout(() => {
        msgSucess.style.display = 'none'
      }, 2500)
  
      nomeUsuario.value = ''
      emailUsuario.value = ''
      senhaUsuario.value = ''
  
      loadItens()
    } else {
      msgError.style.display = 'block'
      msgError.innerHTML = '<strong>Preencha os dados corretamente!</strong>'
      msgSucess.style.display = 'none'
  
      setTimeout(() => {
        msgError.style.display = 'none'
      }, 2500)
    }
  }

function loadItens() {
    itens = JSON.parse(localStorage.getItem('listaUser')) || []
    usuariosTBody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
  })
}

function getItensBD() {
  return JSON.parse(localStorage.getItem('listaUser')) || []
}

function setItensBD() {
  localStorage.setItem('listaUser', JSON.stringify(itens))
}

function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.nomeCad}</td>
      <td>${item.emailCad}</td>
      <td class="action">
        <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="editItem(${index})">Editar</button>
        <button class="btn btn-danger" onclick="deleteItem(${index})">Deletar</button>
      </td>
    `
    usuariosTBody.appendChild(tr)
  }

function editItem(index) {
    id = index
    const usuario = itens[index]
  
    M_nomeUsuario.value = usuario.nomeCad
    M_emailUsuario.value = usuario.emailCad
    M_senhaUsuario.value = usuario.senhaCad
}

function deleteItem(index) {
  const listaUser = JSON.parse(localStorage.getItem('listaUser')) || []
  if (listaUser[index].nome === 'Admin', 'admin', 'Administrator', 'administrator', 'Administrador', 'administrador') {
    alert('Este usuário não pode ser deletado.')
    return
  }

  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

M_btnSalvar.addEventListener('click', () => {
  itens[id] = {
    nome: M_nomeUsuario.value,
    email: M_emailUsuario.value,
    senha: M_senhaUsuario.value
  }

  setItensBD()
  loadItens()

  const modal = bootstrap.Modal.getInstance(document.getElementById('EditModal'))
  modal.hide()
})

if (!localStorage.getItem('listaUser')) {
    const usuarioPadrao = [
      {
        nomeCad: 'admin',
        emailCad: 'admin@emc.com',
        senhaCad: '123456'
      }
    ]
    localStorage.setItem('listaUser', JSON.stringify(usuarioPadrao))
}

document.addEventListener('DOMContentLoaded', function () {
  loadItens()
})
