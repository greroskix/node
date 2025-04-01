/* Vamos criar um exemplo que simula buscar dados de um usuario em um banco de dados, a busca vai levar 2 segundos */

function buscarUsuario(id){
    return new Promise((resolve, reject) => {
        // Iniciamos uma nova promise que pode ter dois resultados:
        // Resolve, quando tem sucesso
        // Reject, quando da erro
        console.log(`buscando usuário com o ID: ${id}`)
        setTimeout(() => { // Para simular um atraso de 2s
            const usuario = {id: id, nome: "João"}
            // Criamos um objeto representado um usuário encontrado
            if(usuario){
                resolve(usuario)
                // Se o usuário existir o resolve é acionado indicando que a tarefa foi concluida com sucesso
            }else{
                reject("Usuário não encontrado")
                // Se não existir o reject é acionado indicando que a tarefa falhou
            }
        }, 2000)
    })
}

buscarUsuario(1)
    .then((usuario) => { // Acontece quando a promise é aprovada
        console.log("Usuario encontrado:", usuario)
    })
    .catch((erro) => { // Acontece quando a promisse é rejeitada
        console.log("Erro", erro)
    })