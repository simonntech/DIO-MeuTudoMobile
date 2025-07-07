// todas as funções que lidam com o produto
const productType ={
    version: "digital",
    tax: "x1",
}

// exemplo de hidden const
const apiURL = {
    url: "www.google.com/api",
}

async function getFullName(codeId, productName) {
    console.log(`Produto: ${codeId} -- ${productName}`);
    await doBreakLine();
}

// hidden function - escondida da exportação
async function doBreakLine() {
    console.log("\n")
}

async function getProductLabel(productName) {
    console.log(`\n`)
    console.log(`Produto: ${productName}`)
}

module.exports = {
    getFullName,
    getProductLabel,
    productType
};