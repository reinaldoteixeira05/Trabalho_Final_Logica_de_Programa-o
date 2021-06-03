var animais_resgistros=[]
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
var lista_especies_registradas=["cachorro","gato","passaro"]
var chips_registrados=[]
var pessoas_registro=[]
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
    animais_adotados:[],
}
var id_code_animal=1 // contadores de ID 
var id_code_pessoa=1 

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
    animal.id=id_code // Id gerado automaticamente 
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
     id_code=id_code_animal+1
     console.log("---------------------------------------------")
     console.log("O animal: "+animal.nome+" foi registrado com sucesso !")
     console.log("---------------------------------------------")
     console.log("Nome: "+animal.nome+"\n"+"Chip: "+animal.chip+"\n"+"Status: Vivo "+"\n"+"Especie: "+animal.especie+"\n"+"Genero: "+animal.sexo)
    }
      
function registro_pessoas(){



}
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
             ║                       Animais Disponiveis                         ║
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

function lista_pessoas(){}
function buscar_animal(){
    var aux=Number(prompt("Selecione o modo de buscar:\n 1-Por nome \n 2-por chip \n 3- por id"))
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
            default:
            alert("Opção invalida!")
            break;
        }
        console.log(buscar)
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
          console.log("Animal nao encontrado");
          
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
              console.log("Animal nao encontrado");   
            }
        }
    }
}


function busca_pessoa(){}
function remover_animais(){
    var buscar_animal=Number(prompt("digite o Id do animal a ser removido"))
    var encontrado= false
    var aux_2=  null
    for (var i = 0; i < animais_resgistros.length; i++) {
        if (buscar_animal === animais_resgistros[i].id) {
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
            } 
            encontrado = true;
            aux_2 = i 
        }if (!encontrado && i === animais_resgistros.length - 1) {
        console.log("Animal nao encontrado");
    }
    var aux=Number(prompt("Deseja remover esse animal? \n 1- Sim \n 2-Não"))
    switch(aux){
        case 1:
            animais_resgistros[aux_2-1].id += +animais_resgistros.length
            animais_resgistros.sort(function(a,b){
                if(a.id<b.id){
                    return -1;
                }
                else{
                    return true;
                }
            })
            animais_resgistros.pop()
            break;
        case 2:
            break;
        default: 
        alert("opção invalida!")
    }
}
   
function menu_inicial(){
    do{
    var opcao=Number(prompt(` 
    ╔══════════════════════╗
                Menu Incial         
    ╚══════════════════════╝ 
    `
    +"\n 1-cadastrar animal \n 2-cadastrar pessoa \n 3-Listar animais Adotados \n 4-Remover Animais \n 5-Buscar Animal "))
        switch(opcao){
            case 1:
                registro_animais();
                break;
            case 2:
                lista_animais_disponiveis()
                break;
            case 3:
                lista_animais_adotados()
                break;
            case 4:
                remover_animais()
                break;
            case 5:
                buscar_animal()
                break;
            
        }

    }
    while(opcao!=10)
}
menu_inicial()

