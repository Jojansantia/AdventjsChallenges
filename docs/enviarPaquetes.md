# Reto 17 - La locura de enviar paquetes en esta época

Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

El array contiene otros arrays que contienen los datos de cada transportista
<br/>
transportista[0] -> Nombre/ID del Transportista
<br/>
transportista[1] -> Paquetes que gestiona en un día
<br/>
transportista[2] -> Array con sus subordinados

Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado.

```jsx harmony
function countPackages(carriers, carrierID) {
  let carrier = carriers.find((x) => x[0] === carrierID)
  let packages = carrier[1]

  carrier[2].forEach(subordinate => {
    packages += countPackages(carriers, subordinate)
  })

  return packages
}

const carriers = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(carriers, 'camila'))
```