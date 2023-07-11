// Número palíndromo
function next_pal(num){
  num++;
  while(!palindromo(num)) {
    num++
  }
  return num

}
function palindromo(num){
  let convertirTexto = num.toString();
  let textoReves = num.toString().split("").reverse().join("");
  
    return convertirTexto === textoReves;
}
console.log(next_pal(20))