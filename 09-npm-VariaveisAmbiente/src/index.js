import connectToDatabase from "./database/data.js";

async function main() {
    await connectToDatabase("sasuke", "uchiha"); //falha
    await connectToDatabase("naruto", "uzumaki"); //conexão
    await connectToDatabase(process.env.USERDB, process.env.PASSDB); //conexão com dados das variáveis do .ENV
}

main();