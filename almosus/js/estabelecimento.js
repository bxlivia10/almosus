document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const nomeEstabelecimento = usuarioLogado ? usuarioLogado.nome : "Estabelecimento";
    document.getElementById('nomeEstabelecimento').textContent = nomeEstabelecimento;
    let kits = JSON.parse(localStorage.getItem('kits')) || [];
    function renderizarKits() {
        const listaKits = document.getElementById('listaKits');
        if (kits.length === 0) {
            listaKits.innerHTML = '<p>Nenhum kit cadastrado. Clique em "Adicionar Novo Kit" para começar.</p>';
        } else {
            listaKits.innerHTML = kits.map((kit, index) => `
                <div class="kit-card">
                    <h3>${kit.nome || 'Sem nome'}</h3>
                    <div class="kit-info">
                        <p>
                            <strong>Descrição:</strong>
                            <span>${kit.descricao || 'Sem descrição'}</span>
                        </p>
                        <p>
                            <strong>Produto:</strong>
                            <span>${kit.produto || 'Não especificado'}</span>
                        </p>
                        <p class="kit-preco">
                            <strong>Preço:</strong> R$ ${parseFloat(kit.preco || 0).toFixed(2)}
                        </p>
                    </div>
                    <button class="btn-remover" data-index="${index}">Remover</button>
                </div>
            `).join('');
            document.querySelectorAll('.btn-remover').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-index');
                    removerKit(index);
                });
            });
        }
    }
    function removerKit(index) {
        if (confirm('Tem certeza que deseja remover este kit?')) {
            kits.splice(index, 1);
            localStorage.setItem('kits', JSON.stringify(kits));
            renderizarKits();
        }
    }
    function criarModal() {
        const modalHTML = `
            <div id="modalKit" class="modal">
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <h2>Adicionar Novo Kit</h2>
                    <form id="formKit">
                        <div class="form-group">
                            <label for="nomeKit">Nome do Kit:</label>
                            <input type="text" id="nomeKit" name="nome" required placeholder="Ex: Kit Surpresa do Dia">
                        </div>
                        <div class="form-group">
                            <label for="descricaoKit">Descrição:</label>
                            <textarea id="descricaoKit" name="descricao" rows="3" required placeholder="Descreva o que está incluído no kit"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="produtoKit">Produto:</label>
                            <input type="text" id="produtoKit" name="produto" required placeholder="Ex: Mix de produtos frescos">
                        </div>
                        <div class="form-group">
                            <label for="precoKit">Preço (R$):</label>
                            <input type="number" id="precoKit" name="preco" step="0.01" min="0" required placeholder="0.00">
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn primary">Salvar Kit</button>
                            <button type="button" class="btn secondary btn-cancelar">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        if (!document.getElementById('modalKit')) {
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }
    }
    function abrirModal() {
        criarModal();
        const modal = document.getElementById('modalKit');
        modal.style.display = 'flex';
        document.querySelector('.modal-close').addEventListener('click', fecharModal);
        document.querySelector('.btn-cancelar').addEventListener('click', fecharModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                fecharModal();
            }
        });
        document.getElementById('formKit').addEventListener('submit', (e) => {
            e.preventDefault();
            adicionarKit();
        });
    }
    function fecharModal() {
        const modal = document.getElementById('modalKit');
        modal.style.display = 'none';
        document.getElementById('formKit').reset();
    }
    function adicionarKit() {
        const nome = document.getElementById('nomeKit').value.trim();
        const descricao = document.getElementById('descricaoKit').value.trim();
        const produto = document.getElementById('produtoKit').value.trim();
        const preco = parseFloat(document.getElementById('precoKit').value);
        if (nome && descricao && produto && !isNaN(preco) && preco >= 0) {
            const novoKit = {
                nome,
                descricao,
                produto,
                preco
            };
            kits.push(novoKit);
            localStorage.setItem('kits', JSON.stringify(kits));
            renderizarKits();
            fecharModal();
            alert('Kit adicionado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    }
    document.querySelector('.btn-add-kit').addEventListener('click', abrirModal);
    renderizarKits();
    console.log('Página de gerenciamento de kits carregada para:', nomeEstabelecimento);
});