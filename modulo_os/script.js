// Pasta node -> Pasta Modulo Os - > script.js
// Importa o modulo OS

const os = require("os") 

console.log("Sistema Operacionail:", os.platform())
console.log("Arquitetura:", os.arch())
console.log("Memória Livre:", os.freemem(),"bytes")
console.log("Memória Livre:", os.totalmem(),"bytes")