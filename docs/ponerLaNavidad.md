# Reto 4 - ¡Es hora de poner el árbol de navidad en casa!

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. 
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

```jsx harmony
function createXmasTree(height) {
    let xMaxTree = ''
    let maxUnderscore = (height * 2) - 2

    for (let index = 0; index < height; index++) {
        let underscoreXLvl = (maxUnderscore/2) - (index * 1)
        xMaxTree += `${'_'.repeat(underscoreXLvl)}${'*'.repeat(2*index + 1)}${'_'.repeat(underscoreXLvl)}\n`
    }

    let log = `${'_'.repeat(maxUnderscore/2)}#${'_'.repeat(maxUnderscore/2)}`
    xMaxTree += log + '\n' + log
    return xMaxTree
}

let newXMasTree = createXmasTree(5)

console.log(newXMasTree)
```