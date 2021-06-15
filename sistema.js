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
    dono: null,
    codCor: null,
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
var cores=["#D2691E","#8B008B","#DC143C","#0000CD" ]
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
        dono: null,  
        codCor: null,     
    } 
    
    // Area de cadastro do animal  
    animal.nome=String(prompt("Digite o nome do animal")) // Nome do animal vai ser registrado aqui 
    animal.id=id_code_animal // Id gerado automaticamente 
    animal.status="vivo" // Status de Vivo sera direcionado automatico 
    var especie=Number(prompt("Selecione a Especie \n 1- cachorro \n 2- gato \n 3- passaro \n 4- Outros ")) // menu de escolha de especie 
          switch(especie){
                case 1:
                  especie="cachorro"
                  animal.codCor=0
                  break;
                case 2:
                  especie="gato"
                  animal.codCor=1
                   break;
                case 3:
                  especie="passaro"
                  animal.codCor=2
                  break; 
                case 4:
                    especie=String(prompt("Digite a especie do animal"))
                    animal.codCor=3
                    break;
                default:
                  alert("opção invalida !!")
                  return
           }
    var genero=Number(prompt("Selecione o genero \n 1- Femea \n 2- Macho")) // menu de escolha de genero 
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
 
    animal.chip=String(prompt("Digite o chip de "+animal.nome))// Codigo do chip vai ser registrado aqui
    for(var i=0;i<chips_registrados.length;i++){  
        if(animal.chip===chips_registrados[i]){
            alert(" ⚠️ Chip ja foi registrado!")
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
     console.log("%cO animal foi registrado com sucesso ✔️","color:Green")
     
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
    pessoa.cpf=String(prompt("Informe seu cpf sem pontos ou traços: "))
        for(var i=0;i<cpfs_cadastrados.length;i++){      // teste para verificar se o cpf ja esta registrado
            if(pessoa.cpf===cpfs_cadastrados[i]){
                alert(" ⚠️ CPF ja cadastrado!")
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
    console.log("%cRegistro efetuado com sucesso ✔️","color:Green;")
}
// funções de listagem 
function lista_animais_disponiveis(){
    var cont_fichas=1
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
        return
    }
         console.log(`%c
             ╔═══════════════════════════════════════════════════════════════════╗
             ║                       Animais Disponiveis                         ║
             ╚═══════════════════════════════════════════════════════════════════╝`,"color: Green; ")
     for(var i=0;i<animais_resgistros.length;i++){
         if(animais_resgistros[i].situacao==="disponivel"){
             var cor=animais_resgistros[i].codCor
            console.log("Ficha "+cont_fichas) 
            console.log(`%c
             ╔═══════════════════════════════════════════════════════════════════╗
             ║`+"Nome: "+animais_resgistros[i].nome+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Idade: "+animais_resgistros[i].idade+                          `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Chip: "+animais_resgistros[i].chip+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Peso: "+animais_resgistros[i].peso+                            `                                                           
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Especie: "+animais_resgistros[i].especie+                      `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Status: "+animais_resgistros[i].status+                        `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Situação: "+animais_resgistros[i].situacao+                    `
             ╚═══════════════════════════════════════════════════════════════════╝`,"color:"+cores[cor] )
             cont_fichas++
        }       
    }   
}
function lista_animais_adotados(){
    var cont_fichas=1
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
        return
    }
         console.log(`%c
             ╔═══════════════════════════════════════════════════════════════════╗
             ║                        Animais Adotados                           ║
             ╚═══════════════════════════════════════════════════════════════════╝`,"color:#FFA500;")
    
     for(var i=0;i<animais_resgistros.length;i++){
         if(animais_resgistros[i].situacao==="adotado"&& animais_resgistros[i].status==="vivo"){
            var cor=animais_resgistros[i].codCor
            console.log("Ficha "+cont_fichas) 
            console.log(`%c
             ╔═══════════════════════════════════════════════════════════════════╗
             ║`+"Nome: "+animais_resgistros[i].nome+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Idade: "+animais_resgistros[i].idade+                          `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Chip: "+animais_resgistros[i].chip+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Peso: "+animais_resgistros[i].peso+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Especie: "+animais_resgistros[i].especie+                      `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Sexo: "+animais_resgistros[i].sexo+                            `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Status: "+animais_resgistros[i].status+                        `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Situação: "+animais_resgistros[i].situacao+                    `
             ╠═══════════════════════════════════════════════════════════════════╣
             ║`+"Dono: " +animais_resgistros[i].dono+                            `
             ╚═══════════════════════════════════════════════════════════════════╝`,"color:"+cores[cor])
             cont_fichas++
        }    
    }   
}
function lista_pessoas(){
    var cont_fichas=1
    if(pessoas_registro.length==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
        return
    }
    console.log(`%c 
        ╔═══════════════════════════════════════════════════════════════════╗
        ║                       Pessoas Registradas                         ║
        ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue")
     for(var i=0;i<pessoas_registro.length;i++){
        console.log("Ficha "+cont_fichas) 
        console.log(`%c
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
        ║`+"CEP: "+pessoas_registro[i].localizacao.cep+                                                 `
        ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
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
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
    }
    for (var i = 0; i < animais_resgistros.length; i++) {
          if (buscar === animais_resgistros[i].nome) {
            var cor=animais_resgistros[i].codCor
           console.log(`%c 
        ╔═══════════════════════════════════════════════════════════════════╗
        ║                       Animal(s) Encontrado(s)                     ║
        ╚═══════════════════════════════════════════════════════════════════╝`,"color: Green;")

              console.log(`%c
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
        ╚═══════════════════════════════════════════════════════════════════╝`,"color:"+cores[cor] )                
              encontrado = true;
          }if (!encontrado && i === animais_resgistros.length - 1) {
          console.log("%c ❌ Ficha inexistente","color:Red;");         
        }
    }
}
function buscar_por_chip(){
    var encontrado= false
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
    }
    for (var i = 0; i < animais_resgistros.length; i++) {
          if (buscar === animais_resgistros[i].chip) {
            var cor=animais_resgistros[i].codCor
            console.log(`%c 
         ╔═══════════════════════════════════════════════════════════════════╗
         ║                       Animal Encontrado                           ║
         ╚═══════════════════════════════════════════════════════════════════╝`,"color: Green;")
 
               console.log(`%c
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
         ╚═══════════════════════════════════════════════════════════════════╝`,"color:"+cores[cor] )
              encontrado = true;
            }if (!encontrado && i === animais_resgistros.length - 1) {
              console.log("%c ❌ Ficha inexistente","color:Red;");   
            }
        }
    }
}
function buscar_pessoa(){

function busca_cpf(){
    var encontrado=false
    var buscar=String(prompt("Digite o numero do CPF: "))
    if(pessoas_registro==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
    }
        for(var i=0; i<pessoas_registro.length;i++){
            if(buscar===pessoas_registro[i].cpf){
                console.log(`%c
                ╔═══════════════════════════════════════════════════════════════════╗
                ║                        Pessoa Encontrada                          ║
                ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
                console.log(`%c
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
                ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
                encontrado=true

            }
            if(!encontrado && i===pessoas_registro.length-1){
                console.log("%c ❌ Ficha inexistente","color:Red;")
            }
        }
}
function busca_nome(){
    var encontrado=false
    var buscar=String(prompt("Digite o nome: "))
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
    }
        for(var i=0; i<pessoas_registro.length;i++){
            if(buscar===pessoas_registro[i].nome){
                console.log(`%c 
                ╔═══════════════════════════════════════════════════════════════════╗
                ║                       Pessoa(s) Encontrada(s)                     ║
                ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
                console.log(`%c
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
                ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
                encontrado=true

            }
            if(!encontrado && i===pessoas_registro.length-1){
                console.log("%c ❌ Ficha inexistente","color:Red;")
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
    var busca_cpf=String(prompt("Digite seu CPF"))
    if(pessoas_registro.length==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
        return
    }
    for(var i=0;i<pessoas_registro.length;i++){
        if(busca_cpf===pessoas_registro[i].cpf){
        console.log("Pessoa localizada \n"+"Nome: "+pessoas_registro[i].nome+"\n"+"CPF: "+pessoas_registro[i].cpf)
        encontrado_cpf=true
        }
        aux_1=i
        if(!encontrado_cpf && i===pessoas_registro.length-1){
            alert(" ⚠️ Ficha não encontrada, por favor se cadastre antes")
            return
        } 
    }

    var buscar_animal_chip=String(prompt("Digite o Chip do animal"))
    if(animais_resgistros.length==0){
        console.log("%c ❌ Ficha inexistente","color:Red;")
        return
    }
    for(var j=0;j<animais_resgistros.length;j++){
        if(buscar_animal_chip===animais_resgistros[j].chip && animais_resgistros[j].situacao==="disponivel"){
            console.log("Animal encontrado \n "+"Nome:"+animais_resgistros[j].nome+"\n"+"Chip: "+animais_resgistros[j].chip)
            encontrado_id=true           
        }
        aux_2=j
        if(!encontrado_id && j=== animais_resgistros.length-1){
            alert(" ⚠️ Animal não encontrado ou não disponivel ")
            return
        }
    }
    var adocao=Number(prompt("Desejar adotar este animal? \n 1- Sim \n 2- Não"))
        switch(adocao){
            case 1:
                pessoas_registro[aux_1].animaisAdotados.push(animais_resgistros[aux_2])
                animais_resgistros[aux_2].situacao="adotado"
                animais_resgistros[aux_2].dono=pessoas_registro[aux_1].nome
                pessoas_registro[aux_1].situacao="adotante"
                console.log("%cAdoção realizada com sucesso ✔️","color: Green") 
                console.log(`%c 
        ╔═══════════════════════════════════════════════════════════════════╗
        ║                         Ficha de Adoção                           ║
        ╚═══════════════════════════════════════════════════════════════════╝`,"color: Blue;")
        console.log(`%c
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
        ╚═══════════════════════════════════════════════════════════════════╝`,"color:Blue;")
                break;
            case 2:
                break;
            default:
                alert(" ⚠️ opção invalida por favor refaça o processo")
                break;
        }
}
// funções de edição
function remover_animais(){
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
        return
    }
    var buscar_animal=String(prompt("digite o Chip do animal a ser removido"))
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
        var cor=animais_resgistros[i].codCor
        if(buscar_animal === animais_resgistros[i].chip && animais_resgistros[i].status === "morto"){
            alert(" ⚠️ Este animal não pode ser removido pois seu status esta como (morto) ")
            return
        }
        if( buscar_animal === animais_resgistros[i].chip && animais_resgistros[i].situacao==="adotado"){
            alert(" ⚠️ Este animal não pode ser removido pois se status esta como (adotado) ")
            return
        }
        if (buscar_animal === animais_resgistros[i].chip ) {
            console.log(`%c
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
            ╚═══════════════════════════════════════════════════════════════════╝`,"color:"+cores[cor])          
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
                        console.log("%cAnimal Removido com sucesso ✔️","color: Green;")
                        break;
                    case 2:
                        break;
                    default: 
                    alert("opção invalida!")
                }
              encontrado = true;  
            } 
          if (!encontrado && i === animais_resgistros.length - 1) {
            console.log("%c ❌ Ficha inexistente","color:Red;");  

        }
        
    }   
}
function remover_pessoa(){
 var encontrado=false
    if(pessoas_registro.length==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
        return
    }
    var buscar=String(prompt("Digite o numero do CPF: "))
    
        for(var i=0; i<pessoas_registro.length;i++){
                if(buscar===pessoas_registro[i].cpf){
                    console.log(`%c
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
                    ║`+"Id: "+pessoas_registro[i].id+                                  `
                    ╚═══════════════════════════════════════════════════════════════════╝`,"color: Blue;")
                    encontrado=true
                        
                }if(!encontrado && i===pessoas_registro.length-1){
                    alert("%c ❌ Ficha inexistente","color:Red;")
                    return
                }
        }
        for(var k=0 ;k<pessoas_registro.length;k++){
         for(var j=0; j<pessoas_registro[k].animaisAdotados.length;j++){
            if(pessoas_registro[k].animaisAdotados[j].status==="vivo"){
                alert(" ⚠️ Esta pessoa não pode ser removida pois tem um animal vivo em seu cadastro")
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
                    console.log("%cPessoa removida com sucesso ✔️","color:Green;")
                    break;
                case 2:
                    break;
                default:
                    alert("opção invalida")
                }       
        }        
}
function editar_animal(){
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
        return
    }
    var buscar_animal=String(prompt("Digite o nome do animal"))
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
        if(buscar_animal===animais_resgistros[i].nome){
            do{
            var edicao_animal=Number(prompt("Quais dados deseja editar? \n 1- Nome \n 2- Chip \n 3- Peso \n 4- Idade \n 5- Sair"))
                switch(edicao_animal){
                    case 1:
                        var aux=String(prompt("Digite o novo nome de " +animais_resgistros[i].nome))
                        animais_resgistros[i].nome=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 2:
                        var aux=String(prompt("Digite o novo chip de " +animais_resgistros[i].nome))
                        animais_resgistros[i].chip=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 3:
                        var aux=String(prompt("Digite o novo peso de " +animais_resgistros[i].nome))
                        animais_resgistros[i].peso=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 4:
                        var aux=String(prompt("Digite o nova idade de " +animais_resgistros[i].nome))
                        animais_resgistros[i].idade=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 5:
                        return
                    default:
                        alert("opção invalida")
                        break;
                }
            }while(buscar_animal!=5)
            encontrado=true

        }if(!encontrado && i===animais_resgistros.length-1){
            console.log("%c ❌ Ficha inexistente","color:Red;")
        }
    }   
}
function editar_pessoa(){
    if(pessoas_registro.length==0){
        console.log("⚠️ %cNão existem pessoas registrados","color:Red;")
        return
    }
    var buscar_pessoa=String(prompt("Digite o nome da Pessoa"))
    var encontrado= false
    for (var i = 0; i < pessoas_registro.length; i++) {
        if(buscar_pessoa===pessoas_registro[i].nome){
          do{
            var edicao_pessoa=Number(prompt("Quais dados deseja editar? \n 1- Nome \n 2- CPF \n 3- Estado \n 4- Cidade \n 5- Rua \n 6- Cep \n 7- Sair"))
                switch(edicao_pessoa){
                    case 1:
                        var aux=String(prompt("Digite o novo nome de " +pessoas_registro[i].nome))
                        pessoas_registro[i].nome=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 2:
                        var aux=String(prompt("Digite o novo CPF de " +pessoas_registro[i].nome))
                        pessoas_registro[i].cpf=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 3:
                        var aux=String(prompt("Digite o novo estado de " +pessoas_registro[i].nome))
                        pessoas_registro[i].localizacao.estado=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 4:
                        var aux=String(prompt("Digite o nova cidade " +pessoas_registro[i].nome))
                        pessoas_registro[i].localizacao.cidade=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 5:
                        var aux=String(prompt("Digite o nova rua de " +pessoas_registro[i].nome))
                        pessoas_registro[i].localizacao.rua=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 6:
                        var aux=String(prompt("Digite o nova rua de " +pessoas_registro[i].nome))
                        pessoas_registro[i].localizacao.cep=aux
                        console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                        break;
                    case 7:
                        return
                    default:
                        alert("opção invalida")
                        break;
                }
            }while(edicao_pessoa!=7)
            encontrado=true
        }if(!encontrado && i===pessoas_registro.length-1){
            console.log("%c ❌ Ficha inexistente","color:Red;")
        }
    }   

}
function edicao_status_animal(){
    if(animais_resgistros.length==0){
        console.log("⚠️ %cNão existem animais registrados","color:Red;")
        return
    }
    var buscar_animal=String(prompt("Digite o Chip do animal a ser definido como morto \n Obs: Esta ação não pode ser desfeita"))
    var encontrado= false
    for (var i = 0; i < animais_resgistros.length; i++) {
        if (buscar_animal === animais_resgistros[i].chip ) {
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
        var opcao=Number(prompt("Deseja mudar o status de "+animais_resgistros[i].nome+" para morto? \n 1- Sim  \n 2- Não"))
            switch(opcao){
                case 1:
                  animais_resgistros[i].status="morto"
                  animais_resgistros[i].situacao="indisponivel"
                  console.log("%cCadastro atualizado com sucesso ✔️ ","color: Green;")
                  encontrado = true;  
                  break;
                case 2:
                    return
                default:
                    alert("⚠️ Opção Invalida")
            }
            
            }
          if (!encontrado && i === animais_resgistros.length) {
            console.log("%c ❌ Ficha inexistente","color:Red;");
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
                var menu_edicao=Number(prompt("Menu de Edições \n 1- Remover animal \n 2- Remover pessoa \n 3- Editar status de animal \n 4- Editar animal \n 5- Editar Pessoa \n 6- Sair"))
                    switch(menu_edicao){
                        case 1:
                            remover_animais();
                            break;
                        case 2:
                            remover_pessoa();
                            break;
                        case 3:
                            edicao_status_animal();
                            break;
                        case 4:
                            editar_animal();
                            break;
                        case 5:
                            editar_pessoa();
                            break;
                        case 6:
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
