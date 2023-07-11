//Crear numero telefonico


function crearTelefono(nums) {
    const parte1 = nums.slice(0, 3).join(""); 
    const parte2 = nums.slice(3, 6).join("");
    const parte3 = nums.slice(6, 10).join("");
    return `(${parte1}) ${parte2}-${parte3}`;
}

  // Ejemplo de uso:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Por favor inserta 10 numeros
const numeroTelefono = crearTelefono(nums); 
// Devuelve "(123) 456-7890"
console.log(numeroTelefono);