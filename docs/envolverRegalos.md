# Reto 13 - Envuelve regalos con asteriscos

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...

```jsx harmony
function wrapGifts(gifts) {
    if(!gifts.length) return gifts

    const length = gifts[0].length
    let newGifts = []

    newGifts.push('*'.repeat(length + 2))
    for (const gift of gifts) newGifts.push('*' + gift + '*')
    newGifts.push('*'.repeat(length + 2))

    return newGifts
}

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
```