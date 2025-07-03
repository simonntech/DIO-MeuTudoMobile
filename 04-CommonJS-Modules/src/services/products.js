// todas as funções que lidam com o produto

async function getFullName(codeId, productName) {
    console.log(`\n`)
    console.log(`Produto: ${codeId} -- ${productName}`)
}

async function getProductLabel(productName) {
    console.log(`\n`)
    console.log(`Produto: ${productName}`)
}

module.exports = {
    getFullName,
    getProductLabel
};