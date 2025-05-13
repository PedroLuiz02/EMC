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

function verificarLogin() {
    if (localStorage.getItem('token') == null) {
        alert('Você precisa estar logado para se inscrever em um curso');
        window.location.href = "log_in.html";
    }
}
