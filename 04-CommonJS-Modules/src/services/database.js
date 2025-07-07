// export DEFAULT - por padrão são exportáveis

exports.connectToDatabase = (dataName) => {
    console.log(`Se conectando ao banco ${dataName}`);
}

exports.disconnectDatabase = () => {
    // lógica de desconexão
    console.log("Desconectando...")
}