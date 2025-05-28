const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

if (usuario) {
    document.querySelector('#loginCadastro').innerHTML = `
        <span class="me-3">Olá, ${usuario.nome}</span>
        <button class="btn btn-outline-danger" onclick="logout()">Logout</button>
    `;
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('token');
    window.location.href = 'log_in.html';
}

if(localStorage.getItem('token') == null){
  alert('você precisa estar logado para acessar essa página')
  window.location.href = "log_in.html";
}


const alunos = JSON.parse(localStorage.getItem('Aluno')) || [];
alunos.forEach(aluno => {
});


function atualizarListaAluno() {
  const select = document.getElementById("alunoSelect");
  const alunos = JSON.parse(localStorage.getItem("Aluno")) || [];

  alunos.forEach((item) => {
    select.innerHTML += `<option value="${item.nome}">${item.nome}</option>`;
  });
}
atualizarListaAluno();

const curso = JSON.parse(localStorage.getItem('cursos')) || [];
curso.forEach(aluno => {
});


function atualizarListaCurso() {
  const select = document.getElementById("cursoSelect");
  const curso = JSON.parse(localStorage.getItem("cursos")) || [];

  curso.forEach((item) => {
    select.innerHTML += `<option value="${item.nome}">${item.nome}</option>`;
  });
}
atualizarListaCurso();

function GerarCertificado(){
  let nomeAluno = document.getElementById("alunoSelect").value;
  let nomeCurso = document.getElementById("cursoSelect").value;
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  let cursoSelecionado = cursos.find(curso => curso.nome === nomeCurso);
  let carga;
  if (cursoSelecionado && cursoSelecionado.cargaHoraria) {
  carga = cursoSelecionado.cargaHoraria;
  } else {
  carga = "carga horária indefinida";
  }

  let Box = document.querySelector("#Box");
  Box.innerHTML = `
  <h5>
  Certificamos que <strong>${nomeAluno}</strong> <br>concluiu com êxito <br>o curso de <strong>${nomeCurso}</strong> <br>com carga horária de <strong>${carga}</strong>
  </h5>`;

  let BoxValid = document.querySelector("#BoxValid");
  let CodeValidator = Math.random().toString(36).substring(2, 10).toUpperCase();
  BoxValid.innerHTML = `<h6><strong>${CodeValidator}</strong></h6>`;
  localStorage.setItem("CodigoValidação", CodeValidator);
}



