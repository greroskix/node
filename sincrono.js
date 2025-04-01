function tarefaDemorada(){
    const agora = new Date();
    const futuro = agora.getTime() + 3000 // Adiciona 3 segundo
    while(new Date().getTime() < futuro) {} // Espera 3 segundos
}

console.log("Iniciando o programa...")
console.log("Executando tarefa 1")
tarefaDemorada() // Simula um processo que leva 3 segundos
console.log("Tarefa 1 concluída")

console.log("Executando tarefa 2")
tarefaDemorada() // Simula outro processo que leva 3 segundos
console.log("Tarefa 2 concluída")
console.log("Programa finalizado")