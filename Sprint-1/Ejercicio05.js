function drawX(tamano) {
// verifica que el tamaño es un número impar mayor o igual a 3
if (typeof tamano !== "number" || tamano < 3 || tamano % 2 === 0) {
    console.error("El tamaño debe ser un número impar mayor o igual a 3");
    return;
}

// matriz de tamaño tamano x tamano
const matriz = new Array(tamano)
    .fill()
    .map(() => new Array(tamano).fill(" "));

  // Dibuja la X
for (let i = 0; i < tamano; i++) {
    matriz[i][i] = "*";
    matriz[i][tamano - i - 1] = "*";
}

  // Imprime la matriz
console.log(matriz.map((row) => row.join("")).join("\n"));
}

console.log(drawX(5));
