// const notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// -----------------teste 1-----------------
// function calculaMediaNotas(lista){
//     let somaNotas=0
//     for(let i=0;i<lista.length;i++){
//         // somaNotas+=lista[i]
//         somaNotas=somaNotas+lista[i]
       
//     }
//     return somaNotas/lista.length
// }

// console.log(calculaMediaNotas(notas))

// -----------------teste 2-----------------
// function quantidadeNotasAltas(lista){
//    let notasMaiorIgualSete=[]
   
//    for(let i=0;i<lista.length;i++){
//     if(lista[i]>=7){
//         notasMaiorIgualSete.push(lista[i])
//         console.log(notasMaiorIgualSete)
//     }

//    }
//    return notasMaiorIgualSete.length
   
// }

// console.log(quantidadeNotasAltas(notas))

// -----------------teste 3-----------------
// function quantidadeNotasBaixas(lista){
//        let notasMenorSete=[]
//    for(let i=0;i<lista.length;i++){
//     if(lista[i]<7){
//         notasMenorSete.push(lista[i])
//     }
//    }
//    return notasMenorSete.length
// }

// console.log(quantidadeNotasBaixas(notas))

// -----------------teste 4-----------------
// function buscaNotaMaisAlta(lista){
//     let notaMaisAlta = 0
//     for(let i =0;i<lista.length;i++){
//         if(lista[i]>notaMaisAlta){
//             notaMaisAlta=lista[i]
//         }
//     }
//     return notaMaisAlta
// }

// console.log(buscaNotaMaisAlta(notas))

// -----------------teste 5-----------------
// function buscaNotaMaisBaixa(lista) {
//     let notaMaisBaixa = 10
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] < notaMaisBaixa) {
//             notaMaisBaixa = lista[i]
//         }
//     }
//     return notaMaisBaixa
// }

// console.log(buscaNotaMaisBaixa(notas))

// -----------------teste 6-----------------
// function retornaPares(n,m){
//     let output=[]
//     for(let i=n;i<=m;i++){
//         if(i%2==0){
//             output.push(i)
//         }
//     }
//     return output
// }

// console.log(retornaPares(0,5))

// -----------------teste 7-----------------
// function retornaImpares(n,m){
//     let output=[]
//     for(let i=n;i<=m;i++){
//         if(i%2!==0){
//             output.push(i)
//         }
//     }
//     return output
// }

// console.log(retornaImpares(0,5))

// -----------------teste 8-----------------
// const frutas = ["uva","maçã","manga","laranja","limão"]
// const quant = [10,5,5,20,20]
// function totalDeFrutas(lista1,lista2){
//     let soma = 0
//     if(lista1.length==lista2.length){
//         for (let i=0;i<lista1.length;i++){
//             soma+=[i]*lista2[i]
//         }
//     }
//     return soma
// }

// console.log (totalDeFrutas(frutas,quant))

// -----------------teste 9-----------------
// function verificaOcorrenciaDeCaracter(frase,letra){
//        let contador = 0
//     for(let i=0; i<frase.length;i++){
//         if(frase[i]==letra){
//         contador++
//     }
// }
// if(contador>0){
//     return `Letra ${letra} aparece ${contador} vez(es)`
// }
//     return `Letra ${letra} não encotrada`
// }

// let nome = "rafael almeida freitas"
// console.log(verificaOcorrenciaDeCaracter(nome,"r"))

// -----------------teste 10-----------------
// function calculaFatorial(n){
//     let result=1
//     for(i=1;i<=n;i++){
//         result*=i
//     }
//     return result
// }

// console.log(calculaFatorial(5))