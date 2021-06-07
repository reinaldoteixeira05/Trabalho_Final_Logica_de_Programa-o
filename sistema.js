// objetos
var animal={
    nome: null ,
    chip: null ,
    id:null,
    status: null,
    especie: null,
    sexo: null,
    situacao: null,
    idade: null,
    peso: null,
}
var pessoa={
    nome: null,
    cpf: null,
    telefone: null,
    localizacao: endereco={
        estado: null,
        cidade: null,
        rua: null,
        cep: null,
    },
    animaisAdotados:[],
    situação: null,
    id: null,
}
// arrays 
var chips_registrados=[]
var pessoas_registro=[]
var cpfs_cadastrados=[]
var animais_resgistros=[]
// contadores de ID 
var id_code_animal=1 
var id_code_pessoa=1 
// funções de registo
function registro_animais(){
    var animal={
        nome: null ,
        chip: null ,
        id:null,
        status: null,
        especie: null,
        sexo: null,
        situacao: null,
        idade: null,
        peso: null,

        
    } 
    // Area de cadastro do animal  
    animal.nome=String(prompt("Digite o nome do animal")) // Nome do animal vai ser registrado aqui 
    animal.id=id_code_animal // Id gerado automaticamente 
    animal.status="vivo" // Status de Vivo sera direcionado automatico 
    var especie=Number(prompt("Selecione a Especie \n 1-cachorro \n 2- gato \n 3- passaro \n 4-Outros ")) // menu de escolha de especie 
          switch(especie){
                case 1:
                  especie="cachorro"
                  break;
                case 2:
                  especie="gato"
                   break;
                case 3:
                  especie="passaro"
                  break; 
                case 4:
                    especie=String(prompt("Digite a especie do animal"))
                    lista_especies_registradas.push(especie)
                    break;
                default:
                  alert("opção invalida !!")
                  return
           }
    var genero=Number(prompt("Selecione o genero \n 1-Femea \n 2-Macho")) // menu de escolha de genero 
            switch(genero){
                case 1:
                    genero="Femea"
                    break;
                case 2:
                    genero="Macho"
                    break;
                default: 
                    alert("opção invalida")
                    return
            }
 
    animal.chip=String(prompt("Digite o chip de "+animal.nome))                                                                   // Codigo do chip vai ser registrado aqui
    for(var i=0;i<chips_registrados.length;i++){  
        if(animal.chip===chips_registrados[i]){
            alert("Chip ja foi registrado!")
            return
        }
       
    } 
     chips_registrados.push(animal.chip)   // Array com os chips ja registrados 
     animal.idade=Number(prompt("Digite a Idade do(a) "+animal.nome)) // 
     animal.peso=Number(prompt("Digite o peso do(a) "+animal.nome)) 
     animal.especie=especie
     animal.sexo=genero 
     animal.situacao="disponivel"
     animais_resgistros.push(animal)
     id_code_animal=id_code_animal+1
     console.log("---------------------------------------------")
     console.log("O animal: "+animal.nome+" foi registrado com sucesso !")
     console.log("---------------------------------------------")
     console.log("Nome: "+animal.nome+"\n"+"Chip: "+animal.chip+"\n"+"Status: Vivo "+"\n"+"Especie: "+animal.especie+"\n"+"Genero: "+animal.sexo)
}    
function registro_pessoas(){
    // Area de registro de pessoas 
    var pessoa={
        nome: null,
        cpf: null,
        id: null,
        telefone: null,
        localizacao:{
            estado: null,
            cidade: null,
            rua: null,
            cep: null,
        },
        animaisAdotados:[],
        situacao: null,
    }  
    pessoa.id=id_code_pessoa
    pessoa.nome=String(prompt("Informe seu nome: "))
    pessoa.cpf=Number(prompt("Informe seu cpf sem pontos ou traços: "))
        for(var i=0;i<cpfs_cadastrados.length;i++){  
            if(pessoa.cpf===cpfs_cadastrados[i]){
                alert("CPF ja cadastrado!")
                return
            }    
        } 
    cpfs_cadastrados.push(pessoa.cpf)
    pessoa.telefone=Number(prompt("Informe seu telefone com DDD: "))
    pessoa.localizacao.estado=String(prompt("Informe seu estado: "))
    pessoa.localizacao.cidade=String(prompt("Informe sua cidade: "))
    pessoa.localizacao.rua=String(prompt("Informe sua rua: "))
    pessoa.localizacao.cep=String(prompt("Informe seu cep: "))
    pessoa.situacao="não adotante"
    id_code_pessoa=id_code_pessoa+1
    pessoas_registro.push(pessoa)
    console.log("-----------------------------------")
    console.log("Registro efetuado com sucesso")
    console.log("-----------------------------------")
    console.log("Nome: "+pessoa.nome)
    console.log("CPF: "+pessoa.cpf)
    console.log("Estado: "+pessoa.localizacao.estado)
}
// funções de listagem 
function lista_animais_disponiveis(){
    var cont_fichas=1
         console.log(` 
             ╔═══════════════════════════════════════════════════════════════════╗
             ║                       Animais Disponiveis                         ║
             ╚═══════════════════════════════════════════════════════════════════╝`)
     for(var i=0;i<animais_resgistros.length;i++){
         if(animais_resgistros[i].situacao==="disponivel"){
            console.log("Ficha "+cont_fichas) 
            console.log(`
             ╔═══════════════════════════════════════════════════════════════════╗
             ║`+"Nome: "+animais_resgistros[i].nome+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Idade: "+animais_resgistros[i].idade+                          `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Chip: "+animais_resgistros[i].chip+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Peso: "+animais_resgistros[i].peso+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Id: "+animais_resgistros[i].id+                                `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Especie: "+animais_resgistros[i].especie+                      `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Status: "+animais_resgistros[i].status+                        `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Situação: "+animais_resgistros[i].situacao+                    `
             ╚═══════════════════════════════════════════════════════════════════╝`)
             cont_fichas++
        }    
        
    }   
}
function lista_animais_adotados(){
    var cont_fichas=1
         console.log(` 
             ╔═══════════════════════════════════════════════════════════════════╗
             ║                        Animais Adotados                           ║
             ╚═══════════════════════════════════════════════════════════════════╝`)
    
     for(var i=0;i<animais_resgistros.length;i++){
         if(animais_resgistros[i].situacao==="adotado"&& animais_resgistros[i].status==="vivo"){
            console.log("Ficha "+cont_fichas) 
            console.log(`
             ╔═══════════════════════════════════════════════════════════════════╗
             ║`+"Nome: "+animais_resgistros[i].nome+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Idade: "+animais_resgistros[i].idade+                          `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Chip: "+animais_resgistros[i].chip+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Peso: "+animais_resgistros[i].peso+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Id: "+animais_resgistros[i].id+                                `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Especie: "+animais_resgistros[i].especie+                      `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Status: "+animais_resgistros[i].status+                        `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Situação: "+animais_resgistros[i].situacao+                    `
             ╚═══════════════════════════════════════════════════════════════════╝`)
             cont_fichas++
        }    
    }   
}
function lista_pessoas(){
    var cont_fichas=1
    console.log(` 
        ╔═══════════════════════════════════════════════════════════════════╗
        ║                       Pessoas Registradas                         ║
        ╚═══════════════════════════════════════════════════════════════════╝`)
     for(var i=0;i<pessoas_registro.length;i++){
        console.log("Ficha "+cont_fichas) 
        console.log(`
        ╔═══════════════════════════════════════════════════════════════════╗
        ║`+"Nome: "+pessoas_registro[i].nome+                              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"CPF: "+pessoas_registro[i].cpf+                                `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Telefone: "+pessoas_registro[i].telefone+                      `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Estado: "+pessoas_registro[i].localizacao.estado+              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Cidade: "+pessoas_registro[i].localizacao.cidade+              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Rua: "+pessoas_registro[i].localizacao.rua+                    `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"CEP: "+pessoas_registro[i].localizacao.cep+                    `
        ╠═══════════════════════════════════════════════════════════════════╣         
        ╚═══════════════════════════════════════════════════════════════════╝`)
        cont_fichas++
        }
}
// funções de buscas
function buscar_animal(){
    var aux=Number(prompt("Selecione o modo de pesquisa:\n 1- Por nome \n 2- Por chip \n 3- Sair "))
    var buscar
        switch(aux){
            case 1:
                buscar=String(prompt("Digite o nome do animal"))
                buscar_por_nome()
                break;
            case 2:
                buscar=String(prompt("Digite o chip do animal"))
                buscar_por_chip()
                break;
            case 3:
                break;
            default:
            alert("Opção invalida!")
            break;
        }
function buscar_por_nome(){
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
          if (buscar === animais_resgistros[i].nome) {
    console.log("################ Animal encontrado ################ ")
              console.log(`
        ╔═══════════════════════════════════════════════════════════════════╗
        ║`+"Nome: "+animais_resgistros[i].nome+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Idade: "+animais_resgistros[i].idade+                          `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Chip: "+animais_resgistros[i].chip+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Peso: "+animais_resgistros[i].peso+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Id: "+animais_resgistros[i].id+                                `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Especie: "+animais_resgistros[i].especie+                      `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Status: "+animais_resgistros[i].status+                        `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Situação: "+animais_resgistros[i].situacao+                    `
        ╚═══════════════════════════════════════════════════════════════════╝`) 
               
              encontrado = true;
          }if (!encontrado && i === animais_resgistros.length - 1) {
          console.log("Ficha não encontrada");
          
      }
  }
}
function buscar_por_chip(){
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
          if (buscar === animais_resgistros[i].chip) {
    console.log("################ Animal encontrado ################ ")
              console.log(`
        ╔═══════════════════════════════════════════════════════════════════╗
        ║`+"Nome: "+animais_resgistros[i].nome+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Idade: "+animais_resgistros[i].idade+                          `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Chip: "+animais_resgistros[i].chip+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Peso: "+animais_resgistros[i].peso+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Id: "+animais_resgistros[i].id+                                `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Especie: "+animais_resgistros[i].especie+                      `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Status: "+animais_resgistros[i].status+                        `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Situação: "+animais_resgistros[i].situacao+                    `
        ╚═══════════════════════════════════════════════════════════════════╝`)
              encontrado = true;
            }if (!encontrado && i === animais_resgistros.length - 1) {
              console.log("Ficha não encontrada");   
            }
        }
    }
}
function buscar_pessoa(){

function busca_cpf(){
    var encontrado=false
    var buscar=Number(prompt("Digite o numero do CPF: "))
        for(var i=0; i<pessoas_registro.length;i++){
            if(buscar===pessoas_registro[i].cpf){
                console.log(` 
                ╔═══════════════════════════════════════════════════════════════════╗
                ║                       Pessoaa Encontrada                          ║
                ╚═══════════════════════════════════════════════════════════════════╝`)
                console.log(`
                ╔═══════════════════════════════════════════════════════════════════╗
                ║`+"Nome: "+pessoas_registro[i].nome+                              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"CPF: "+pessoas_registro[i].cpf+                                `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Telefone: "+pessoas_registro[i].telefone+                      `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Estado: "+pessoas_registro[i].localizacao.estado+              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Cidade: "+pessoas_registro[i].localizacao.cidade+              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Rua: "+pessoas_registro[i].localizacao.rua+                    `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"CEP: "+pessoas_registro[i].localizacao.cep+                    `
                ╠═══════════════════════════════════════════════════════════════════╣         
                ╚═══════════════════════════════════════════════════════════════════╝`)
                encontrado=true

            }
            if(!encontrado && i===pessoas_registro.length-1){
                alert("Ficha não encontrada")
            }
        }


}
function busca_nome(){
    var encontrado=false
    var buscar=String(prompt("Digite o nome: "))
        for(var i=0; i<pessoas_registro.length;i++){
            if(buscar===pessoas_registro[i].nome){
                console.log(` 
                ╔═══════════════════════════════════════════════════════════════════╗
                ║                       Pessoa(s) Encontrada(s)                     ║
                ╚═══════════════════════════════════════════════════════════════════╝`)
                console.log(`
                ╔═══════════════════════════════════════════════════════════════════╗
                ║`+"Nome: "+pessoas_registro[i].nome+                              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"CPF: "+pessoas_registro[i].cpf+                                `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Telefone: "+pessoas_registro[i].telefone+                      `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Estado: "+pessoas_registro[i].localizacao.estado+              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Cidade: "+pessoas_registro[i].localizacao.cidade+              `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"Rua: "+pessoas_registro[i].localizacao.rua+                    `
                ╠═══════════════════════════════════════════════════════════════════╣
                ║`+"CEP: "+pessoas_registro[i].localizacao.cep+                    `
                ╠═══════════════════════════════════════════════════════════════════╣         
                ╚═══════════════════════════════════════════════════════════════════╝`)
                encontrado=true

            }
            if(!encontrado && i===pessoas_registro.length-1){
                alert("Ficha não encontrada")
            }
        }







}
var aux=Number(prompt("Selecione o modo de pesquisa: \n 1- Por nome \n 2- Por CPF \n 3- Sair"))
    switch(aux){
        case 1:
            busca_nome();
            break;
        case 2:
            busca_cpf();
            break;
        case 3:
            break;
        default:
            alert("Opção Invalida")
        
    }

}
// função de adoção 
function adotar_animal(){
    lista_animais_disponiveis();
    var encontrado_cpf=false
    var encontrado_id=false
    var aux_1=null // variaveis auxiliares para guardar o valor de i e j
    var aux_2=null
    var busca_cpf=Number(prompt("Digite seu CPF"))
    for(var i=0;i<pessoas_registro.length;i++){
        if(busca_cpf===pessoas_registro[i].cpf){
        console.log("Pessoa localizada \n"+"Nome: "+pessoas_registro[i].nome+"\n"+"CPF: "+pessoas_registro[i].cpf)
        encontrado_cpf=true
        }
        aux_1=i
        if(!encontrado_cpf && i===pessoas_registro.length-1){
            alert("Ficha não encontrada, por favor se cadastre antes")
            return
    } 
         }

    var buscar_animal_id=Number(prompt("Digite o id do animal"))
    for(var j=0;j<animais_resgistros.length;j++){
        if(buscar_animal_id===animais_resgistros[j].id && animais_resgistros[j].situacao==="disponivel"){
            console.log("Animal encontrado \n "+"Nome:"+animais_resgistros[j].nome+"\n"+"Chip: "+animais_resgistros[j].chip)
            encontrado_id=true
            
        }
        aux_2=j
        if(!encontrado_id && j=== animais_resgistros.length-1){
            alert("Animal não encontrado ou não disponivel ")
            return
        }
    }
    var adocao=Number(prompt("Desejar adotar este animal? \n 1- Sim \n 2- Não"))
        switch(adocao){
            case 1:
                pessoas_registro[aux_1].animaisAdotados.push(animais_resgistros[aux_2])
                animais_resgistros[aux_2].situacao="adotado"
                pessoas_registro[aux_1].situacao="adotante"
                console.log("Adoção realizada com sucesso") 
                console.log(` 
        ╔═══════════════════════════════════════════════════════════════════╗
        ║                         Ficha de Adoção                           ║
        ╚═══════════════════════════════════════════════════════════════════╝`)
        console.log(`
        ╔═══════════════════════════════════════════════════════════════════╗
        ║`+"Nome: "+pessoas_registro[aux_1].nome+                              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"CPF: "+pessoas_registro[aux_1].cpf+                                `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Telefone: "+pessoas_registro[aux_1].telefone+                      `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Estado: "+pessoas_registro[aux_1].localizacao.estado+              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Cidade: "+pessoas_registro[aux_1].localizacao.cidade+              `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"Rua: "+pessoas_registro[aux_1].localizacao.rua+                    `
        ╠═══════════════════════════════════════════════════════════════════╣
        ║`+"CEP: "+pessoas_registro[aux_1].localizacao.cep+                    `
        ╠═══════════════════════════════════════════════════════════════════╣
        ╠`+"Animal adotado: "+animais_resgistros[aux_2].nome+               `        
        ╚═══════════════════════════════════════════════════════════════════╝`)


                break;
            case 2:
                break;
            default:
                alert("opção invalida por favor refaça o processo")
                break;

        }




}
// funções de edição
function remover_animais(){
    var buscar_animal=Number(prompt("digite o Id do animal a ser removido"))
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
        if(buscar_animal === animais_resgistros[i].id && animais_resgistros[i].status === "morto"){
            alert("Este animal não pode ser removido pois seu status esta como (morto) ")
            return
        }
        if( buscar_animal === animais_resgistros[i].id && animais_resgistros[i].situacao==="adotado"){
            alert("Este animal não pode ser removido pois se status esta como (adotado) ")
            return
        }
        if (buscar_animal === animais_resgistros[i].id ) {
            console.log(`
            ╔═══════════════════════════════════════════════════════════════════╗
            ║`+"Nome: "+animais_resgistros[i].nome+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Idade: "+animais_resgistros[i].idade+                          `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Chip: "+animais_resgistros[i].chip+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Peso: "+animais_resgistros[i].peso+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Id: "+animais_resgistros[i].id+                                `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Especie: "+animais_resgistros[i].especie+                      `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Status: "+animais_resgistros[i].status+                        `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Situação: "+animais_resgistros[i].situacao+                    `
            ╚═══════════════════════════════════════════════════════════════════╝`)          
             var aux=Number(prompt("Deseja remover esse animal? \n 1- Sim \n 2-Não"))
               switch(aux){
                  case 1:
                        animais_resgistros[i].id += +animais_resgistros.length // essa função ira somar o id do animal + o tamanho da lista
                        animais_resgistros.sort(function(a,b){    // metodo sort ira colocar o animal selecionado no final do array
                            if(a.id<b.id){
                                return -1;
                            }
                            else{
                                return true;
                            }
                        })
                        animais_resgistros.pop()  // função pop para remover o ultimo elemento do array
                        console.log("Animal Removido com sucesso")
                        break;
                    case 2:
                        break;
                    default: 
                    alert("opção invalida!")
                }

            } 
            encontrado = true;
        }if (!encontrado && i === animais_resgistros.length - 1) {
        console.log("Ficha não encontrada");
    }
    
}
function remover_pessoa(){
 var encontrado=false
    var buscar=Number(prompt("Digite o numero do CPF: "))
        for(var i=0; i<pessoas_registro.length;i++){
                if(buscar===pessoas_registro[i].id){
                    console.log(` 
                    ╔═══════════════════════════════════════════════════════════════════╗
                    ║                       Pessoaa Encontrada                          ║
                    ╚═══════════════════════════════════════════════════════════════════╝`)
                    console.log(`
                    ╔═══════════════════════════════════════════════════════════════════╗
                    ║`+"Nome: "+pessoas_registro[i].nome+                              `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"CPF: "+pessoas_registro[i].cpf+                                `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"Telefone: "+pessoas_registro[i].telefone+                      `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"Estado: "+pessoas_registro[i].localizacao.estado+              `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"Cidade: "+pessoas_registro[i].localizacao.cidade+              `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"Rua: "+pessoas_registro[i].localizacao.rua+                    `
                    ╠═══════════════════════════════════════════════════════════════════╣
                    ║`+"CEP: "+pessoas_registro[i].localizacao.cep+                    `
                    ╠═══════════════════════════════════════════════════════════════════╣         
                    ╚═══════════════════════════════════════════════════════════════════╝`)
                    encontrado=true
                        
                }if(!encontrado && i===pessoas_registro.length-1){
                    alert("Ficha não encontrada")
                    return
                }
        }
        for(var k=0 ;k<pessoas_registro.length;k++){
         for(var j=0; j<pessoas_registro[k].animaisAdotados.length;j++){
            if(pessoas_registro[k].animaisAdotados[j].status==="vivo"){
                alert("Esta pessoa não pode ser removida pois tem um animal vivo em seu cadastro")
                return
            }
        }
            var aux=Number(prompt("Deseja remover esta pessoa? \n 1- Sim \n 2- Não "))
             switch(aux){
                case 1:
                    pessoas_registro[k].id += +pessoas_registro.length // essa função ira somar o id da pessoa + o tamanho da lista
                    pessoas_registro.sort(function(a,b){    // metodo sort ira colocar o pessoa selecionado no final do array
                        if(a.id<b.id){
                            return -1;
                        }
                        else{
                            return true;
                        }
                    })
                    pessoas_registro.pop();
                    console.log("Pessoa removida com sucesso")
                    break;
                case 2:
                    break;
                default:
                    alert("opção invalida")
            
                }
             
        }        
}
function edicao_status_animal_disponivel(){
    var buscar_animal=Number(prompt("digite o Id do animal a ser editado"))
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
        if (buscar_animal === animais_resgistros[i].id ) {
            console.log(`
            ╔═══════════════════════════════════════════════════════════════════╗
            ║`+"Nome: "+animais_resgistros[i].nome+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Idade: "+animais_resgistros[i].idade+                          `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Chip: "+animais_resgistros[i].chip+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Peso: "+animais_resgistros[i].peso+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Id: "+animais_resgistros[i].id+                                `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Especie: "+animais_resgistros[i].especie+                      `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Status: "+animais_resgistros[i].status+                        `
            ╠═══════════════════════════════════════════════════════════════════╣
            ║`+"Situação: "+animais_resgistros[i].situacao+                    `
            ╚═══════════════════════════════════════════════════════════════════╝`) 

            animais_resgistros[i].status="morto"
            console.log("o status do animal "+animais_resgistros[i].nome+" foi mudado para "+animais_resgistros[i].status)
            encontrado = true;
            }
          if (!encontrado && i === animais_resgistros.length - 1) {
            console.log("Ficha não encontrada");
    }  
            
        }

        

}
// menus 
function menu_inicial(){
    do{
    var opcao=Number(prompt(` 
    ╔══════════════════════╗
                Menu Incial         
    ╚══════════════════════╝ 
    `
    +"\n 1- Menu de Registros \n 2- Menu de Listas \n 3- Menu de Pesquisa \n 4- Menu de Edição \n 5- Menu de Adoção \n 6- Sair "))
        switch(opcao){
            case 1:
                var menu_registro=Number(prompt("Menu de registro \n 1- Registrar Animal \n 2- Registrar Pessoa \n 3- Sair"))
                    switch(menu_registro){
                        case 1:
                            registro_animais();
                            break;
                        case 2:
                            registro_pessoas();
                            break;
                        case 3:
                            break;
                        default:
                            alert("Opção invalida")
                            break;
                    }
                break;
            case 2:
                var menu_listas=Number(prompt("Menu de Listas \n 1- Lista animais disponiveis \n 2- Lista animais adotados \n 3- Lista Pessoas \n 4- Sair"))
                    switch(menu_listas){
                        case 1:
                            lista_animais_disponiveis();
                            break;
                        case 2:
                            lista_animais_adotados();
                            break;
                        case 3:
                            lista_pessoas();
                            break;
                        case 4:
                            break;
                        default:
                            alert("opção invalida")
                            break;
                            


                    }

                
                break;
            case 3:
                var menu_busca=Number(prompt("Menu de Pesquisa \n 1- Pesquisar animal \n 2- Pesquisar pessoa \n 3- Sair"))
                    switch(menu_busca){
                        case 1:
                            buscar_animal();
                            break;
                        case 2:
                            buscar_pessoa();
                            break;
                        case 3:
                            break;
                        default:
                            alert("opção invalida")



                    }
                break;
            case 4:
                var menu_edicao=Number(prompt("Menu de Edições \n 1- Remover animal \n 2- Remover pessoa \n 3- Editar status de animal \n 4- Sair"))
                    switch(menu_edicao){
                        case 1:
                            remover_animais();
                            break;
                        case 2:
                            remover_pessoa();
                            break;
                        case 3:
                            edicao_status_animal_disponivel();
                            break;
                        case 4:
                            break;
                        default:
                            alert("Opção invalida")

                    }
                break;
            case 5:
                var menu_adocao=Number(prompt("Menu de Adoção \n Deseja adotar um animal? \n 1-Sim \n 2-Não"))
                    switch(menu_adocao){
                        case 1:
                            adotar_animal();
                            break;
                        case 2:
                            break;
                        default:
                            alert("Opção invalida")
                            break;
                    }
                break;
            
        }

    }
    while(opcao!=6)
}
menu_inicial()

