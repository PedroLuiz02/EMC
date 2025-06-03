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
    window.location.href = '../../pages/log_in.html';
}

if(localStorage.getItem('token') == null){
  alert('você precisa estar logado para acessar essa página')
  window.location.href = "../../pages/log_in.html";
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
  const certificados = JSON.parse(localStorage.getItem("certificados")) || [];
  let cursoSelecionado = cursos.find(curso => curso.nome === nomeCurso);

  let carga;
  if (cursoSelecionado && cursoSelecionado.cargaHoraria) {
  carga = cursoSelecionado.cargaHoraria;
  } else {
  carga = "carga horária indefinida";
  }

  const CertificadoExistente = certificados.find(certificado =>
    certificado.aluno === nomeAluno && certificado.curso === nomeCurso
  );
  if (CertificadoExistente) {
    alert("Este aluno já possui um certificado para este curso.");

    let Box = document.querySelector("#Box");
    Box.innerHTML = `
      <h5>
        Certificamos que <strong>${CertificadoExistente.aluno}</strong> <br>
        concluiu com êxito <br>
        o curso de <strong>${CertificadoExistente.curso}</strong> <br>
        com carga horária de <strong>${CertificadoExistente.cargaHoraria} horas</strong>
      </h5>`;

    let BoxValid = document.querySelector("#BoxValid");
    BoxValid.innerHTML = `<h6><strong>${CertificadoExistente.codigo}</strong></h6>`;

    return;
  }

  let CodeValidator = Math.random().toString(36).substring(2, 10).toUpperCase();

  let novoCertificado = {
    aluno: nomeAluno,
    curso: nomeCurso,
    cargaHoraria: carga,
    codigo: CodeValidator
  };

  certificados.push(novoCertificado);
  localStorage.setItem("certificados", JSON.stringify(certificados));

  let Box = document.querySelector("#Box");
  Box.innerHTML = `
  <h5>
  Certificamos que <strong>${nomeAluno}</strong> <br>concluiu com êxito <br>o curso de <strong>${nomeCurso}</strong> <br>com carga horária de <strong>${carga} horas</strong>
  </h5>`;

  let BoxValid = document.querySelector("#BoxValid");
  BoxValid.innerHTML = `<h6><strong>${CodeValidator}</strong></h6>`;
}

function BaixarCertificado() {
  const btn = document.getElementById('BtnBaixarCertificado');
  const content = document.getElementById('conteudo');

  btn.style.display = 'none';

  const opt = {
    margin:       1,
    filename:     'certificado.pdf',
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
  };

  html2pdf().from(content).set(opt).save().then(() => {
    btn.style.display = 'inline-block';
  });
}




