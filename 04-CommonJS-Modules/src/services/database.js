// export DEFAULT - por padrão são exportáveis
//para declarar que a função é assíncrona, deve ser declarada na arrow function

exports.connectToDatabase = async (dataName) => { 
    console.log(`Se conectando ao banco ${dataName}`);
}

exports.disconnectDatabase = async () => {
    // lógica de desconexão
    console.log("Desconectando...")
}