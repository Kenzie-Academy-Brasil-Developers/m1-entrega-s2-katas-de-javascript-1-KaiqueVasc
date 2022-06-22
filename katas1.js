function oneThroughTwenty() {
  let lista =[];
  for(let num = 0;num<=20;num++){
    lista.push(num)
  }
   return lista;
}
 console.log(oneThroughTwenty());

 

function evensToTwenty() {
  let lista = []
  for(let num = 0; num <= 20 ; num++){
    if (num% 2 == 0){
      lista.push(num)
    } 
  }
  return lista;   
}
 console.log(evensToTwenty())


function oddsToTwenty() {
  let lista = []
  for(let num = 0;num <= 20; num++){
    if(num % 2 != 0){
      lista.push(num)
    }
  }  
   return lista;
}
 console.log(oddsToTwenty())

function multiplesOfFive() {
  let lista = []
  for(let num = 0;num <=100; num++){
    if (num% 5 == 0 ){
      lista.push(num)
    }
  }
  return lista;
}
   console.log(multiplesOfFive())


function squareNumbers() {
  let lista = []
  for(let num = 0; num<=100;num++){
    for( let x = 0; x<=100; x++){
      if(x * x == num){
        lista.push(num)
      }
    }
  } 
   return lista;
}

  console.log(squareNumbers())

function countingBackwards() {
  let lista = []
  for(let num = 20; num >=0; num-- ){
    lista.push(num)
  }
    return lista;
}  
 
  console.log(countingBackwards())


function evenNumbersBackwards() {
  let lista  = []
   for(let num = 20; num >=0; num--){
    if(num% 2 == 0){
      lista.push(num);
    }
   }
   return lista;

}
   console.log(evenNumbersBackwards())


function oddNumbersBackwards() {
  let lista = []
  for( let num = 20; num >=0; num --){
    if(num% 2 != 0 ){
      lista.push(num)
    }
  }    
    return lista;
}
    console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {
  let lista = []
  for(let num = 100; num >=0; num --){
    if(num% 5 == 0 ){
      lista.push(num)
    }
  }
   return lista; 
}
  console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards() {
    
  
}


