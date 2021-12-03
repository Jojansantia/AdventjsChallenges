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

console.log(regalos)