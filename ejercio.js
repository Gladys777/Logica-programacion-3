/*

------ FACTORIAL -----
1. Debe solicitar al usuario un número por prompt o por input y guardarlo.
2. Debe calcular el factorial del número recibido.
3. Debe imprimir el resultado por consola o por el DOM.
4. Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.

FACTORIAL
4! = 4 × 3 × 2 × 1 = 24
7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
*/
console.log("archivo js cargado con exito")
let boton = document.getElementById('boton');

boton.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log("se hizo CLICK");
  let numInput = document.getElementById('numInput').value;
  if(numInput == ''){
    alert("Ingrese un valor");
  }else if (numInput == Number(numInput)) {
    let resultado = 1;
    for (let i = 1; i <= numInput; i++) {
      resultado *= i;
    }
    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = `Factorial de ${numInput} es: ${resultado}`;
    document.body.appendChild(resultDisplay);
  }
  document.getElementById('numInput').value='';
});







// let num;
// while(isNaN(num)){
//   num = Number(prompt('Factorial de:'));
//   if(isNaN(num)){
//     alert('Error: debes ingresar un número')
//   }
// }

// const factorial = () => {
//     let i = 1;
//     let resultado = 1;
//     for(i; i <= num; i++){
//       resultado *= i; 
//     }
//     return(console.log(`Factorial de ${num} es: ${resultado}`));
  
// }
// factorial();