// cada arquivo se comporta como um Módulo por Padrão no JS
const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("🛒 Carrinho de Compras:");
    // p.getFullName("42", "Notebook");
    // p.getFullName("881", "Mouse");
    // p.getFullName("666", "Jogo do Capiroto");
    // p.getProductLabel("Água Benta")

    product.getFullName("42", "Notebook")
    console.log(config.client)
    database.connectToDatabase("Teste exports")
}

main();