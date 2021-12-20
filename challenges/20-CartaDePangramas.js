function pangram(letter) {
  const ALPHABET = "abcdefghijklmnñopqrstuvwxyz".split('')
  letter = letter.toLowerCase().normalize().replace(/[\u0300]/g, '')
  
  for (const _char of ALPHABET) if(!letter.includes(_char)) return false
  return true
}

console.log(pangram('Extráño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false