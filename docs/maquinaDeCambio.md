# Reto 10 - La máquina de cambio

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

```jsx harmony
export default function sumPairs(numbers, result) {
    coins[0] = 1 céntimo
    coins[1] = 2 céntimos
    coins[2] = 5 céntimos
    coins[3] = 10 céntimos
    coins[4] = 20 céntimos
    coins[5] = 50 céntimos
}
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible.

```jsx harmony
function getCoins(change) {
    let coins = [1, 2, 5, 10, 20, 50]
    let changeCoins = [...coins].fill(0)

    coins.reverse().forEach((coin, i) => {
        if(change && (change % coin) >= 0 && coin <= change){
            changeCoins[i] = Math.floor(change / coin)
            change -= (coin * Math.floor(change / coin))
        }
    });
    return changeCoins.reverse()
}

console.log(getCoins(51), getCoins(100))
```