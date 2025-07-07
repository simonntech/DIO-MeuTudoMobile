//tem empresa que adota o MJS para exportar módulos JS - para deixar claro para ser interpretado pelo ESM

const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    //lógico de conexão do banco
    console.log(`Conectado banco de dados ${dataName}`);
}

async function disconnectDataBase(dataName) {
    console.log(`Desconectando banco de dados ${dataName}`)
}

export { connectToDatabase, disconnectDataBase, databaseType };