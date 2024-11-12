
function saudacao(nome: String, pronome?: String) :void{
    console.log(`${pronome ? pronome: "Sr"}. ${nome}`)
}


saudacao('gisele', "Sra")