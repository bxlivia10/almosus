document.getElementById('cadastroEstabelecimentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeEstabelecimento = document.getElementById('nomeEstabelecimento').value;
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    const estabelecimento = { nomeEstabelecimento, cnpj, email, senha };
    localStorage.setItem('estabelecimento', JSON.stringify(estabelecimento));
    console.log('Estabelecimento cadastrado e salvo:', estabelecimento);
    alert('Cadastro de Estabelecimento realizado com sucesso! Você será redirecionado para o login.');
    window.location.href = './login.html';
});
