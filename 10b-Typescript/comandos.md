npm init -y
mkdir src
'console.log("teste")' > src/index.ts (para criar um arquivo com um pequeno Console Log dentro)
npm i typescript tsx tsup -D (instalar os pacotes principais em ambiente DEV)
npx tsc --init (criar TSCONFIG)

scripts package.json
"scripts": {
    "dist": "tsup src",
    "start:dev": "tsx src/index.ts",
    "start:watch": "tsx watch src/index.ts",
    "start:dist": "npm run dist && node dist/index.js"
  }

configs TSJSON
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}