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