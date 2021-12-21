# Reto 21 - La ruta con los regalos

Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

Un número con la capacidad máxima de regalos en el trineo.

El viaje que es un array de arrays. Cada subarray contiene tres números que representan:

```jsx harmony
trip[0] = número de regalos a transportar
trip[1] = punto de recogida de los regalos
trip[2] = punto de entrega de los regalos
```

La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

Lo difícil, e importante, es que entiendas que Santa Claus va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.

```jsx harmony
function canCarry(capacity, trip) {
  let maxDeliveryPoint = Math.max(...trip.map(step => step[2]))
  let actualCapacity = 0

  for (let point = 1; point <= maxDeliveryPoint; point++) {
    trip.forEach(step => { 
      if(step[1] === point) actualCapacity += step[0]
      if(step[2] === point) actualCapacity -= step[0]
    })

    if(actualCapacity > capacity) return false;
  }

  return true
}

console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]])) // false
console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])) // true
```