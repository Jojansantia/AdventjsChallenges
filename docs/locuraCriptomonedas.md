# Reto 8 - La locura de las criptomonedas

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura.

```jsx harmony
function maxProfit(prices) {
    let gain = -1
    for (const price of prices) {
        let minPrice = price
        for (const price2 of prices) {
            if(price2 < price && (prices.indexOf(price2) < prices.indexOf(price)) && price2 < minPrice){
                minPrice = price2
                if((price - price2) > gain) gain = (price - price2)
            }
        }
    }
    return gain
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesAda = [3, 3, 3, 3, 3]

console.log(maxProfit(pricesBtc), maxProfit(pricesAda))
```