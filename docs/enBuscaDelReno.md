# Reto 14 - En busca del reno perdido

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

```jsx harmony
function missingReindeer(ids) {
    let max = Math.max(...ids)
    for (let i = 0; i < max; i++) {
        let existId = (ids.find(id => id === i) >= 0) ? true : false
        if(!existId) return i
    }
    return max + 1
}

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]), missingReindeer([0, 1]))
```