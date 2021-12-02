
function contarOvejas(ovejas) {
    let ovejasFiltradas = ovejas.filter(x =>
        (x.name.toLowerCase().includes("n") &&
            x.name.toLowerCase().includes("a") &&
            x.color === "rojo"
        )
    )
    return ovejasFiltradas
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)

// ------------------------------------------------------------------------------------------------

function listGifts(letter) {
    let gifs = {}
    let data = letter.trim().split(' ')
    data.forEach(gif => {
        if(!gif.includes('_') && gif.length) gifs[gif] ? gifs[gif] += 1 : gifs[gif] = 1
    });
    return gifs
}

const carta = 'bici coche balón  _playstation bici coche peluche'
const regalos = listGifts(carta)
console.log("Reto 2",regalos)

// ------------------------------------------------------------------------------------------------