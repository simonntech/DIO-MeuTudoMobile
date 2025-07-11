// a função também pode ser tipada :Promise<"tipo">

async function getBaseEmail(senderName: string): Promise<string> {
    let base = await getHeaderText();

    base += `Olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\n estou deixando o currículo";

    return base;
}

async function getHeaderText(): Promise<string> {
    return "Email para você"
}

export { getBaseEmail };