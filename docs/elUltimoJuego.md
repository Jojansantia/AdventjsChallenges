# Reto 25 - El último juego y hasta el año que viene

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:
<br/><br/>
Un espacio vacío es que no hay nada
<br/>
Una m es el ratón
<br/>
Un * es la comida

```jsx harmony
function canMouseEat(direction, game) {
  const MOUSE = "m";
  const FOOD = "*";
  let isMatch = false;

  for (let i = 0; i < game.length; i++) {
    const positionMouse = game[i].findIndex((item) => item === MOUSE);
    if (positionMouse !== -1) {
      switch (direction) {
        case "up":
          if (i != 0) {
            isMatch = game[i - 1][positionMouse] === FOOD;
          }
          break;
        case "down":
          if (i !== game.length - 1) {
            isMatch = game[i + 1][positionMouse] === FOOD;
          }
          break;
        case "left":
          if (positionMouse > 0) {
            isMatch = game[i][positionMouse - 1] === FOOD;
          }
          break;
        case "right":
          if (positionMouse < game[i].length) {
            isMatch = game[i][positionMouse + 1] === FOOD;
          }
          break;
      }
      if (isMatch) i = game.length;
    }
  }
  return isMatch;
}

const room = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up',    room)) // false
console.log(canMouseEat('down',  room)) // false
console.log(canMouseEat('right', room)) // true
console.log(canMouseEat('left',  room)) // false
```