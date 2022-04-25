/* Tarefa
Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
Esta função deve retornar a string obtida */

//========================== Tarefa - 1 =================================//

function snapCrackle(maxValue){
    let result = [];
    for (let i = 1; i<= maxValue; i++){
        if(i%5==0 && i%2!==0){
            result.push(" SnapCrakle");
        }else if (i%5==0){
            result.push(" Crakle");
        }else if(i%2!==0){
            result.push(" Snap");
        }else{
            result.push(" " + i);
        }
    }
    result = result.join();
    console.log(result);
}
//========================== Bônus  - 2 =================================//

function snapCracklePrime(maxValue){
    let result=[];
    let cont = 0;
    let contarray=[];
    let maxarray=[];
    for (let i = 1; i<= maxValue; i++){
        maxarray.push(i);
        if(i%5==0 && i%2!==0){
            result.push(" SnapCrakle");
        }else if (i%5==0){
            result.push(" Crakle");
        }else if(i%2!==0){
            result.push(" Snap");
        }else if(i==2){
            result.push(" ");
        }else {
            result.push(" "+ i);
        }   
    }
    for (let i = 1; i<=maxValue; i++){
        cont = 0;
        for(let y = 1 ;y<=maxValue;y++ ){
            if(i%y == 0 ){
                cont = cont + 1;
            } 
        }
        contarray.push(cont);
    }
    for(let i = 0; i<contarray.length; i++){
        if (contarray[i] === 2){
            result[i]=result[i]+"prime";
        }
    }
    result=result.join();
    console.log(result);
}
snapCracklePrime(15);
snapCrackle(12);