const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('token');
    window.location.href = 'log_in.html';
}

if(localStorage.getItem('token') == null){
  alert('você precisa estar logado para acessar essa página')
  window.location.href = "log_in.html";
}

let modal = document.querySelector('.modal-container')
let AlunoForm = document.querySelector('#AlunoForm')
let AlunoTBody = document.querySelector('#AlunoTBody')
let nomeAluno = document.querySelector('#nomeAluno')
let cpfAluno = document.querySelector('#cpfAluno')
let emailAluno = document.querySelector('#emailAluno')
let btnSalvar = document.querySelector('#btnSalvar')

let M_nomeAluno = document.querySelector('#M_nomeAluno')
let M_cpfAluno = document.querySelector('#M_cpfAluno')
let M_emailAluno = document.querySelector('#M_emailAluno')
let M_btnSalvar = document.querySelector('#M_btnSalvar')

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

let ValidNome = false
let ValidCpf = false
let ValidEmail = false

let itens
let id

nomeAluno.addEventListener('keyup', () => {
    if (nomeAluno.value.length <= 2) {
      nomeAluno.setAttribute('style', 'border-color: red')
      ValidNome = false
    } else {
      nomeAluno.setAttribute('style', 'border-color: green')
      ValidNome = true
    }
})
  
cpfAluno.addEventListener('keyup', () => {
    if (cpfAluno.value.length !== 11) {
        cpfAluno.setAttribute('style', 'border-color: red')
        ValidCpf = false
    } else {
        cpfAluno.setAttribute('style', 'border-color: green')
        ValidCpf = true
    }
})

emailAluno.addEventListener('keyup', () => {
    if (emailAluno.value.length <= 7) {
      emailAluno.setAttribute('style', 'border-color: red')
      ValidEmail = false
    } else {
      emailAluno.setAttribute('style', 'border-color: green')
      ValidEmail = true
    }
})
  

function cadastrarAluno() {
    if (ValidNome && ValidCpf && ValidEmail){
        itens = JSON.parse(localStorage.getItem('Aluno')) || []

        const novoAluno = {
        nome: nomeAluno.value,
        cpf: cpfAluno.value,
        email: emailAluno.value
        }
      
        itens.push(novoAluno)
        localStorage.setItem('Aluno', JSON.stringify(itens))

        msgSucess.style.display = 'block'
        msgSucess.innerHTML = '<strong>Aluno cadastrado com sucesso!</strong>'
        msgError.style.display = 'none'
  
        setTimeout(() => {
        msgSucess.style.display = 'none'
        }, 2500)
    
        nomeAluno.value = ''
        cpfAluno.value = ''
        emailAluno.value = ''
        loadItens()

    }else {
        msgError.style.display = 'block'
        msgError.innerHTML = '<strong>Preencha os dados corretamente!</strong>'
        msgSucess.style.display = 'none'
    
        setTimeout(() => {
          msgError.style.display = 'none'
        }, 2500)
    }
}

function loadItens() {
  itens = JSON.parse(localStorage.getItem('Aluno')) || []
  AlunoTBody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

function getItensBD() {
  return JSON.parse(localStorage.getItem('Aluno')) || []
}

function setItensBD() {
  localStorage.setItem('Aluno', JSON.stringify(itens))
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.cpf}</td>
    <td>${item.email}</td>
    <td class="action">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="editItem(${index})">Editar</button>
    </td>
    <td class="action">
      <button class="btn btn-danger" onclick="deleteItem(${index})">Deletar</button>
    </td>
  `

  AlunoTBody.appendChild(tr)
}

if (!localStorage.getItem('Aluno')) {
  const alunosPadrao = [
    {
      nome: 'Beatriz da Silva',
      cpf: '19187217387',
      email: 'beatriz@gmail.com'
    },
    {
      nome: 'Caio Roberto',
      cpf: '15414181818',
      email: 'caio@gmail.com'
    },
    {
      nome: 'Jasmin Costa',
      cpf: '65181514141',
      email: 'jasmin@gmail.com'
    }
  ];
  localStorage.setItem('Aluno', JSON.stringify(alunosPadrao));
}

function editItem(index) {
  id = index
  const Aluno = itens[index]

  M_nomeAluno.value = Aluno.nome
  M_cpfAluno.value = Aluno.cpf
  M_emailAluno.value = Aluno.email
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

M_btnSalvar.addEventListener('click', () => {
  itens[id] = {
    nome: M_nomeAluno.value,
    cpf: M_cpfAluno.value,
    email: M_emailAluno.value
  }

  setItensBD()
  loadItens()

  const modal = bootstrap.Modal.getInstance(document.getElementById('EditModal'))
  modal.hide()
})

window.onload = function () {
  loadItens();
};