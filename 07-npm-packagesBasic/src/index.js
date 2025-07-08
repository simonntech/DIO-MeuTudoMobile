import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.red.bgGray.bold("Hello, world!"))

console.log(chalk.inverse.bold("My name is Bruno!"))

console.log(logSymbols.success, chalk.greenBright.bold("Servidor rodando com sucesso!"))

console.log(logSymbols.info, chalk.blue.italic("Saiba mais sobre os detalhes..."))

console.log(logSymbols.error, chalk.red.bold("Problema ao conectar..."))