let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const taxaEntrega = 5.00;
document.addEventListener('DOMContentLoaded', () => {
    renderizarCarrinho();
    document.querySelector('.btn-finalizar').addEventListener('click', () => {
        if (carrinho.length > 0) {
            alert('Pedido finalizado com sucesso! (Simulação)');
            carrinho = [];
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            renderizarCarrinho();
        } else {
            alert('Seu carrinho está vazio!');
        }
    });
});
function renderizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    const subtotalSpan = document.getElementById('subtotal');
    const totalSpan = document.getElementById('total');
    listaCarrinho.innerHTML = '';
    let subtotal = 0;
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<p style="text-align: center; padding: 20px;">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrinho');
            const precoTotalItem = item.preco * item.quantidade;
            subtotal += precoTotalItem;
            itemElement.innerHTML = `
                <div class="item-info">
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <span class="item-preco">R$ ${precoTotalItem.toFixed(2).replace('.', ',')}</span>
                <button class="btn-remover" data-index="${index}">Remover</button>
            `;
            listaCarrinho.appendChild(itemElement);
        });
        listaCarrinho.querySelectorAll('.btn-remover').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                removerDoCarrinho(index);
            });
        });
    }
    const total = subtotal + taxaEntrega;
    subtotalSpan.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}
