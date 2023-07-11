
function countNameRepetitions(nombres) {
    const contadorNombre = {};
    
// contar repeticiones
for (const nombre of nombres) {
    if (nombre in contadorNombre) {
        contadorNombre[nombre]++;
    } else {
        contadorNombre[nombre] = 1;
    }
}
    
// crear representación de asteriscos
const asteriscos = {};
for (const nombre in contadorNombre) {
    const asterisks = "*".repeat(contadorNombre[nombre]);
    asteriscos[nombre] = asterisks;
    }
    
    return asteriscos;
}

const nombres = [ 'Juan','María','Pedro','Juan','María','María']

console.log(countNameRepetitions(nombres))