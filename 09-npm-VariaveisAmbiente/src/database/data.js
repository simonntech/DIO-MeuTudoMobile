async function connectToDatabase(user, password) {
    if(user === process.env.USERDB && password === process.env.PASSDB) {
        console.log("🆗 Conexão com banco de dados estabelecida")
    } else {
        console.log("Falha de login, não foi possível se conectar...")
    }
};

export default connectToDatabase;