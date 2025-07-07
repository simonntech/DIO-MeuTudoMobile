// cada arquivo se comporta como um Módulo por Padrão no JS
const { getFullName, productType } = require("./services/products") //importando por desestruturação
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("🛒 Carrinho de Compras:");
    
    getFullName("2", "PC gamer")
    products.getProductLabel("Note Gamer")
    console.log(productType.version)
    // product.getFullName("881", "Mouse");
    // product.getFullName("42", "Notebook")
    // product.getProductLabel("Água Benta")
    
    database.connectToDatabase("Pokemon Store")
}

main();