document.addEventListener('DOMContentLoaded', () => {
    const clienteData = JSON.parse(localStorage.getItem('cliente'));
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (clienteData && usuarioLogado && usuarioLogado.tipo === 'cliente') {
        document.getElementById('perfilNome').textContent = clienteData.nome;
        document.getElementById('perfilEmail').textContent = clienteData.email;
    } else {
        window.location.href = './login.html';
    }
    document.querySelector('.btn-editar').addEventListener('click', () => {
        alert('Funcionalidade de edição de perfil (a ser implementada).');
    });
});
