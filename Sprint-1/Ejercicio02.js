//Crear numero telefonico
function crearTelefono(nums) {
  const parte1 = nums.slice(0, 3).join(""); 
  const parte2 = nums.slice(3, 6).join("");
  const parte3 = nums.slice(6, 10).join("");
  return `(${parte1}) ${parte2}-${parte3}`;
}

function verificarNumeros(nums) {
//Verificamos si los numeros son enteros
for (let i = 0; i < nums.length; i++) {
  if (!Number.isInteger(nums[i]) || nums[i] < 0 || nums[i] > 9){
      console.error("Todos los numeros deben ser enteros positivos y menores e iguales que 9")
      return;
  }
}
// Verificar que haya exactamente 10 números
if (nums.length !== 10) {
  console.error("Deben ser exactamente 10 numeros");
  return;
}
const numeroTelefono = crearTelefono(nums) 
return(numeroTelefono)
}

const nums = [1, 2, 1, 7, 5, 8, 7, 3, 8, 9]; // Por favor inserta 10 numeros
console.log(verificarNumeros(nums));