# Reto 20 - ¿Una carta de pangramas? ¡QUÉ!

En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales.

```jsx harmony
function pangram(letter) {
  const ALPHABET = "abcdefghijklmnñopqrstuvwxyz".split('')
  letter = letter.toLowerCase().normalize().replace(/[\u0300]/g, '')
  
  for (const _char of ALPHABET) if(!letter.includes(_char)) return false
  return true
}

console.log(pangram('Extráño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // falselse
```