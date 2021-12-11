# Reto 11 - ¿Vale la pena la tarjeta fidelidad del cine?

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

```jsx harmony
function shouldBuyFidelity(times) {
    const entranceValue = 12; // 12$
    const discount = 0.75; // 75%
    const tarjetValue = 250; // 250$
    let amount = 0;

    for (let time = 1; time <= times; time++) {
        amount += entranceValue * ( Math.pow(discount, time))
    }

    let normal = entranceValue * times
    let withTarjet = tarjetValue + amount
    return (withTarjet < normal)
}

console.log(shouldBuyFidelity(1), shouldBuyFidelity(100))
```