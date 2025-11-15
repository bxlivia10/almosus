document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    console.log('Tentativa de login:', { email, senha });
    const clienteData = JSON.parse(localStorage.getItem('cliente'));
    const estabelecimentoData = JSON.parse(localStorage.getItem('estabelecimento'));
    let loginSucesso = false;
    if (clienteData && email === clienteData.email && senha === clienteData.senha) {
        localStorage.setItem('usuarioLogado', JSON.stringify({ tipo: 'cliente', nome: clienteData.nome }));
        alert('Login de Cliente realizado com sucesso!');
        window.location.href = './cliente.html';
        loginSucesso = true;
    } 
    else if (estabelecimentoData && email === estabelecimentoData.email && senha === estabelecimentoData.senha) {
        localStorage.setItem('usuarioLogado', JSON.stringify({ tipo: 'estabelecimento', nome: estabelecimentoData.nomeEstabelecimento }));
        alert('Login de Estabelecimento realizado com sucesso!');
        window.location.href = './estabelecimento.html';
        loginSucesso = true;
    }
    if (!loginSucesso) {
        alert('E-mail ou senha incorretos. Certifique-se de ter se cadastrado.');
    }
});
