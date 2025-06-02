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

function validarCertificado() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "";

  const codigo = document.getElementById('codigoInput').value.trim().toUpperCase();

  let certificados = JSON.parse(localStorage.getItem("certificados")) || [];
  let certificado = certificados.find(cert => cert.codigo === codigo);

  if (certificado) {
    resultado.innerHTML = `
      <div class="alert alert-success">
        Certificado válido!<br>
        <strong>Aluno:</strong> ${certificado.aluno}<br>
        <strong>Curso:</strong> ${certificado.curso}<br>
        <strong>Carga horária:</strong> ${certificado.cargaHoraria}
      </div>`;
  } else {
    resultado.innerHTML = `
      <div class="alert alert-danger mx-auto w-50 p-2">
        Código de certificado inválido.
      </div> <br>`;
  }
}

function limparValidacao() {
  document.getElementById('resultado').innerHTML = "";
  const input = document.getElementById('codigoInput');
  input.value = "";
  input.focus();
}

function actionBtn() {
  const btn = document.getElementById('btnAction');
  if (btn.innerHTML === 'Validar') {
    validarCertificado();
    btn.innerHTML = 'Limpar';
  } else {
    limparValidacao();
    btn.innerHTML = 'Validar';
  }
}
