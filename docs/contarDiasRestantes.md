# Reto 4 - ¡Es hora de poner el árbol de navidad en casa!

Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -).

Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.

```jsx harmony
function daysToXmas(date) {
    const xMasDay = new Date('Dec 25, 2021')
    var difference = xMasDay - date;
    let days = difference/(1000 * 3600 * 24)

    return Math.ceil(days)
}

const date1 = new Date('Dec 23, 2021 23:59:59')
const date2 = new Date('Dec 5, 2021')
    
console.log(daysToXmas(date1), daysToXmas(date2))
```