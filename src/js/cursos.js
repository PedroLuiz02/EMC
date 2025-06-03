const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

function logout() {
  localStorage.removeItem('usuarioLogado');
  localStorage.removeItem('token');
  window.location.href = '../../pages/log_in.html';
}

if(localStorage.getItem('token') == null){
  alert('você precisa estar logado para acessar essa página')
  window.location.href = "../../pages/log_in.html";
}

let modal = document.querySelector('.modal-container')
let cursosForm = document.querySelector('#CursoForm')
let cursoTBody = document.querySelector('#CursoTBody')
let nomeCurso = document.querySelector('#nomeCurso')
let descCurso = document.querySelector('#descCurso')
let cargaHorariaCurso = document.querySelector('#cargaHorariaCurso')
let btnSalvar = document.querySelector('#btnSalvar')

let M_nomeCurso = document.querySelector('#M_nomeCurso')
let M_descCurso = document.querySelector('#M_descCurso')
let M_cargaHorariaCurso = document.querySelector('#M_cargaHorariaCurso')
let M_btnSalvar = document.querySelector('#M_btnSalvar')

let msgSucess = document.querySelector('#msgSucess')
let msgError = document.querySelector('#msgError')

let ValidNome = false
let ValidDesc = false
let ValidCargaHoraria = false

let itens
let id

nomeCurso.addEventListener('keyup', () => {
  if (nomeCurso.value.length <= 2) {
    nomeCurso.setAttribute('style', 'border-color: red')
    ValidNome = false
  } else {
    nomeCurso.setAttribute('style', 'border-color: green')
    ValidNome = true
  }
})


descCurso.addEventListener('keyup', () => {
  if (descCurso.value.length <= 7) {
    descCurso.setAttribute('style', 'border-color: red')
    ValidDesc = false
  } else {
    descCurso.setAttribute('style', 'border-color: green')
    ValidDesc = true
  }
})

cargaHorariaCurso.addEventListener('keyup', () => {
  if (cargaHorariaCurso.value.length >=4) {
    cargaHorariaCurso.setAttribute('style', 'border-color: red')
      ValidCargaHoraria = false
  } else {
    cargaHorariaCurso.setAttribute('style', 'border-color: green')
      ValidCargaHoraria = true
  }
})

function cadastrarCurso() {
  if (ValidNome && ValidDesc && ValidCargaHoraria){
    itens = JSON.parse(localStorage.getItem('cursos')) || []

    const novoCurso = {
    nome: nomeCurso.value,
    desc: descCurso.value,
    cargaHoraria: cargaHorariaCurso.value
    }
  
    itens.push(novoCurso)
    localStorage.setItem('cursos', JSON.stringify(itens))

    msgSucess.style.display = 'block'
    msgSucess.innerHTML = '<strong>Curso inserido com sucesso!</strong>'
    msgError.style.display = 'none'

    setTimeout(() => {
    msgSucess.style.display = 'none'
    }, 2500)

    nomeCurso.value = ''
    descCurso.value = ''
    cargaHorariaCurso.value = ''
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
  itens = JSON.parse(localStorage.getItem('cursos')) || []
  cursoTBody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

function getItensBD() {
  return JSON.parse(localStorage.getItem('cursos')) || []
}

function setItensBD() {
  localStorage.setItem('cursos', JSON.stringify(itens))
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.desc}</td>
    <td>${item.cargaHoraria}</td>
    <td class="action">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="editItem(${index})">Editar</button>
    </td>
    <td class="action">
      <button class="btn btn-danger" onclick="deleteItem(${index})">Deletar</button>
    </td>
  `

  cursoTBody.appendChild(tr)
}

if (!localStorage.getItem('cursos')) {
  const cursosPadrao = [
    {
      nome: 'Introdução à Programação com Python',
      desc: 'Curso de fundamentos de Programação Python',
      cargaHoraria: '16'
    },
    {
      nome: 'UX Design: Experiência do Usuário na Prática',
      desc: 'Curso de fundamentos de UX Design',
      cargaHoraria: '30'
    },
    {
      nome: 'Noções de Segurança da Informação',
      desc: 'Curso de fundamentos de Segurança',
      cargaHoraria: '25'
    }
  ];
  localStorage.setItem('cursos', JSON.stringify(cursosPadrao));
}

function editItem(index) {
  id = index
  const curso = itens[index]

  M_nomeCurso.value = curso.nome
  M_descCurso.value = curso.desc
  M_cargaHorariaCurso.value = curso.cargaHoraria
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

M_btnSalvar.addEventListener('click', () => {
  itens[id] = {
    nome: M_nomeCurso.value,
    desc: M_descCurso.value,
    cargaHoraria: M_cargaHorariaCurso.value
  }

  setItensBD()
  loadItens()

  const modal = bootstrap.Modal.getInstance(document.getElementById('EditModal'))
  modal.hide()
})

window.onload = function () {
  loadItens();
};