# Reto 3 - El Grinch quiere fastidiar la Navidad

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas.
 Por suerte sólo los ha dejado en medio de los paréntesis...

```jsx harmony
function isValid(letter) {
    let isValid = true
    let data = letter.split('')
    let last = ""
    let pile = []

    data.forEach(el => {
        if(['{','[','(',')',']','}'].includes(el) && isValid){
            switch (el) {
                case ')':
                    let lastPile1 = pile.pop()
                    if(lastPile1 !== '(' || (lastPile1 === '(' && ['{','[','(',')',']','}'].includes(last))) isValid = false
                    break;
                case ']':
                    let lastPile2 = pile.pop()
                    if(lastPile2 !== '[' || (lastPile2 === '[' && ['{','[','(',')',']','}'].includes(last))) isValid = false
                    break;
                case '}':
                    let lastPile3 = pile.pop()
                    if(lastPile3 !== '{' || (lastPile3 === '{' && ['{','[','(',')',']','}'].includes(last))) isValid = false
                    break;
                default:
                    pile.push(el)
                    break;
            }
        }
        last = el
    });
    if(pile.length) isValid = false
    return isValid
}

const letterBad = "peluche (bici [coche) bici coche balón"
const letterGood = "bici coche (balón) bici coche peluche"

const resBad = isValid(letterBad)
const resGood = isValid(letterGood)

console.log(resBad, resGood)
```