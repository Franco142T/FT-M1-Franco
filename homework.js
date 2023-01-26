'use strict';

function BinarioADecimal(num) {
   let decimal = 0, i = 0, resto;

   while (num != 0) {
      resto = num % 10;
      num = Number.parseInt(num/10)
      decimal = decimal + resto * Math.pow(2, i);
      ++i
   }
   return decimal;
}

function DecimalABinario(num) {
   var binario = []; // el binario pasa a ser string

   while(num !== 0){ // mientras el numero no sea '0'
      binario.unshift(num % 2); // aposicionar el resto del numero al final
      num = Math.floor(num / 2); // redondea y divide el num menor mas cercano
   }
   return binario.join(''); //retorna el num en string
}
console.log(DecimalABinario('6'))
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
