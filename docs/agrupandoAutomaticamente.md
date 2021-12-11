# Reto 9 - Agrupando cosas automáticamente

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de ejemplos:

```jsx harmony
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
], 'rating')
/* { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    9: [{ title: 'Clean Code', rating: 9 }],
    10: [{ title: 'Aprendiendo Git', rating: 10 }] } */
```

Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

```jsx harmony
function groupBy(collection, it) {
    let newObj = {}
    for (const item of collection) {
        let key_ = (typeof it === 'function') ? it(item) : item[it]
        newObj[key_] = (newObj[key_]) ? [...newObj[key_], item] : [item]
    }
    return newObj
}

let test1 = groupBy([6.1, 4.2, 6.3], Math.floor)
let test2 = groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], 'rating')

console.log(test1, test2)
```