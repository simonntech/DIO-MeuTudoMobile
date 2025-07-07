//importar módulo com ESM tem que especificar
//import * as database from './utils/database.mjs'; ->importando TUDO

import { connectToDatabase, databaseType } from "./utils/database.mjs";

import {getDataFromApi} from './utils/api.js'

// database.connectToDatabase("my-DB");
// database.disconnectDataBase("my-DB");

connectToDatabase("My-DB")
getDataFromApi("Poke-API");