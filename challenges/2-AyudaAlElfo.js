function listGifts(letter) {
    let gifts = {}
    let data = letter.trim().split(' ')
    data.forEach(gift => {
        if(!gift.includes('_') && gift.length) gifts[gift] ? gifts[gift] += 1 : gifts[gift] = 1
    });
    return gifts
}

const carta = 'bici coche balón  _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)