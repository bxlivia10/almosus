document.getElementById('cadastroClienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    const cliente = { nome, email, senha };
    localStorage.setItem('cliente', JSON.stringify(cliente));
    console.log('Cliente cadastrado e salvo:', cliente);
    alert('Cadastro de Cliente realizado com sucesso! Você será redirecionado para o login.');
    window.location.href = './login.html';
});
