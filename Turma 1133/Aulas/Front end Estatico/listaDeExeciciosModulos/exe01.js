const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 
'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 
'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

let frutas = []

let legumes = []

let verduras = []

const identificador = (elementos) =>{

    for (const key in elementos) {
       if (elementos[key] == "banana" || elementos[key] == "maçã" || elementos[key] == "abacaxi" 
       || elementos[key] == "melancia" || elementos[key] == "laranja" || elementos[key] == "limão") {
            frutas.push(elementos[key]);   
        
       }else if(elementos[key] == "cenoura" || elementos[key] == "batata" || elementos[key] == "brócolis" 
       || elementos[key] == "abóbora" || elementos[key] == "tomate" || elementos[key] == "alho-poró"){
            legumes.push(elementos[key]);

        }else if(elementos[key] == "alface" || elementos[key] == "espinafre" || elementos[key] == "rúcula" 
        || elementos[key] == "couve" || elementos[key] == "agrião" || elementos[key] == "acelga"){
            verduras.push(elementos[key]);

        }
    }

   console.log(`A quantidade de frutas presentes é ${frutas.length}, a quantidade legumes é ${legumes.length} e a quantidade de verduras é ${verduras.length}`)
    
}


identificador(hotifrutis);
