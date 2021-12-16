# Reto 16 - Descifrando los números...

Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

```jsx harmony
const document = {
    '.' : 1,
    ',' : 5,
    ':' : 10,
    ';' : 50,
    '!' : 100
}
```

Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

```jsx harmony
function decodeNumbers(symbols) {
	const document = {
		'.' : 1,
		',' : 5,
		':' : 10,
		';' : 50,
		'!' : 100
	}

	const symbolsArr = symbols.split('').reverse()

	let amount = 0
	let last = 0

	for (const symbol of symbolsArr) {
		let value = document[symbol]
		if(!value) return NaN
		if(last > value) amount -= value
		else amount += value
		last = value
	}

	return amount
}

console.log(decodeNumbers('..,!'), decodeNumbers(',...'))
```