// cada arquivo se comporta como um Módulo por Padrão no JS
const p = require("./services/products");
const config = require("./services/config")

async function main() {
    console.log("🛒 Carrinho de Compras:");
    p.getFullName("42", "Notebook");
    p.getFullName("881", "Mouse");
    p.getFullName("666", "Jogo do Capiroto");
    p.getProductLabel("Água Benta")

    console.log(config.client)
}

main();