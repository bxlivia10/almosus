const kits = [
    { id: 1, nome: "Kit Surpresa", descricao: "2 tipos de carboidrato e 1 proteina", preco: 12.90, imagem: "../img/surpresa.jpg" },
    { id: 2, nome: "Cesta Padaria Excedente", descricao: "Pães, bolos e doces frescos do dia", preco: 10.50, imagem: "../img/kit-executivo.jpg" },
    { id: 3, nome: "Kit PF", descricao: "Refeições completas e saudáveis", preco: 23.00, imagem: "../img/kit-pf.jpg" },
    { id: 4, nome: "Cesta Hortifruti", descricao: "Frutas e vegetais frescos", preco: 9.90, imagem: "../img/kit-horti.jpg" }
];
document.addEventListener("DOMContentLoaded", function () {
    let usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
        usuario = JSON.parse(usuario);
        document.getElementById("nomeCliente").textContent = usuario.nome.split(" ")[0];
    } else {
        document.getElementById("nomeCliente").textContent = "Visitante";
    }
    const lista = document.getElementById("listaKits");
    kits.forEach(k => {
        const div = document.createElement("div");
        div.className = "kit-card";
        div.innerHTML = `
            <img src="${k.imagem}" alt="${k.nome}">
            <h3>${k.nome}</h3>
            <p>${k.descricao}</p>
            <p>R$ ${k.preco.toFixed(2).replace('.', ',')}</p>
            <button class="btn-add">Adicionar</button>
        `;
        div.querySelector(".btn-add").addEventListener("click", function () {
            adicionarCarrinho(k);
        });
        lista.appendChild(div);
    });
});
function adicionarCarrinho(kit) {
    let carrinho = localStorage.getItem("carrinho");
    carrinho = carrinho ? JSON.parse(carrinho) : [];
    const existe = carrinho.find(item => item.id === kit.id);
    if (existe) {
        existe.quantidade++;
    } else {
        carrinho.push({
            id: kit.id,
            nome: kit.nome,
            preco: kit.preco,
            quantidade: 1
        });
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(kit.nome + " adicionado ao carrinho!");
}
