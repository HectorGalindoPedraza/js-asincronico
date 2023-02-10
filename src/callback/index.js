/* 
    Un callback es una funcion que se pasa como argumento a otra función
    y se ejecuta después de que la función original ha terminado.
*/



// function sum(num1, num2){
//     return num1 + num2;
// }


// function calc(num1, num2, sumar){
//     return sumar(num1, num2)
// }

// console.log(calc(2, 4, sum));


// setTimeout(function () {
//   console.log("Hola, JavaScript")
// },1000)


// function gretting(name){
//   console.log(`Hola, ${name}`)
// }

// setTimeout(gretting, 1000, 'Héctor')

function sum(num1, num2){
  return num1 + num2;
}


function rest(num1, num2){
  return num1 - num2;
}


function mult(num1, num2){
  return num1 * num2;
}


function div(num1, num2){
  return num1 / num2;
}


function calc(num1, num2, callback){
  return callback(num1, num2)
}

calc(4,5,mult)