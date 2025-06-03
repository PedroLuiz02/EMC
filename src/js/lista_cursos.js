const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

function logout() {
  localStorage.removeItem('usuarioLogado');
  localStorage.removeItem('token');
  window.location.href = '../../pages/log_in.html';
}

if (usuario) {
    document.querySelector('#loginCadastro').innerHTML = `
        <span class="me-3">Olá, ${usuario.nome}</span>
        <button class="btn btn-outline-danger" onclick="logout()">Logout</button>
    `;
}
