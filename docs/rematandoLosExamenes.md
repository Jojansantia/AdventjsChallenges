# Reto 6 - Rematando los exámenes finales

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
Si no se encuentra, se devuelve null.

```jsx harmony
export default function sumPairs(numbers, result) {
    let values = null
    numbers.forEach((num, i) => {
        numbers.forEach((num2, j) => {
            if(i !== j && ((num + num2) === result) && !values) values = [num, num2]
        });
    });

    return values
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
```