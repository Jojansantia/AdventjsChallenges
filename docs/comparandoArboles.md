# Reto 24 - Comparando árboles de Navidad

El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas

```jsx harmony
function checkIsSameTree(treeA, treeB) {
  if (treeA.value !== treeB.value) return false;
  let branchs = ['left', 'right']
 
  for (const branch of branchs) {
    if (!treeA[branch] || !treeB[branch]) {
      if (treeA[branch] !== treeB[branch]) return false;
    } else return checkIsSameTree(treeA[branch], treeB[branch]);
  };

  return true;
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree)) // true
console.log(checkIsSameTree(tree, tree2)) // false
```