# Reto 22 - ¿Cuantos adornos necesita el árbol?

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

```jsx harmony
function countDecorations(bigTree) {
  let amount = 0
  for (const item in bigTree) {
    if(typeof bigTree[item] === 'object') amount += countDecorations(bigTree[item])
    else amount += bigTree.value
  }
  return amount
}

const tree = {
  value: 1, 
  left: {
    value: 2, 
    left: null, 
    right: null 
  },
  right: {
    value: 3, 
    left: null, 
    right: null 
  }
}

console.log(countDecorations(tree)) // 6
```