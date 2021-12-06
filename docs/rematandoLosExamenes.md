# Reto 6 - Rematando los exámenes finales

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
Si no se encuentra, se devuelve null.

```jsx harmony
function createXmasTree(height) {
    let xMaxTree = ''
    let maxUnderscore = (height * 2) - 2

    for (let index = 0; index < height; index++) {
        let underscoreXLvl = (maxUnderscore/2) - (index * 1)
        xMaxTree += '_'.repeat(underscoreXLvl) + '*'.repeat(2*index + 1) + '_'.repeat(underscoreXLvl) + '\n'
    }

    let log = '_'.repeat(maxUnderscore/2) + '#' + '_'.repeat(maxUnderscore/2)
    xMaxTree += log + '\n' + log
    return xMaxTree
}

let newXMasTree = createXmasTree(5)

console.log(newXMasTree)
```