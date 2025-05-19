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

let itens
let id

function cadastrarUser() {
  itens = JSON.parse(localStorage.getItem('usuarios')) || []

  const novoUsuario = {
    nome: nomeUsuario.value,
    email: emailUsuario.value,
    senha: senhaUsuario.value
  }
  
  itens.push(novoUsuario)

  localStorage.setItem('usuarios', JSON.stringify(itens))

  loadItens()

  nomeUsuario.value = ''
  emailUsuario.value = ''
  senhaUsuario.value = ''
}

function loadItens() {
  itens = JSON.parse(localStorage.getItem('usuarios')) || []
  usuariosTBody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

function getItensBD() {
  return JSON.parse(localStorage.getItem('usuarios')) || []
}

function setItensBD() {
  localStorage.setItem('usuarios', JSON.stringify(itens))
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td class="action">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="editItem(${index})">Editar</button>
    </td>
    <td class="action">
      <button class="btn btn-danger" onclick="deleteItem(${index})">Deletar</button>
    </td>
  `

  usuariosTBody.appendChild(tr)
}

function editItem(index) {
  id = index
  const usuario = itens[index]

  M_nomeUsuario.value = usuario.nome
  M_emailUsuario.value = usuario.email
  M_senhaUsuario.value = usuario.senha
}

function deleteItem(index) {
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

window.onload = function () {
  loadItens();
};