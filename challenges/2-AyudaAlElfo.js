/*
    Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
    El tema es que es una cadena de texto y es muy difícil de leer 😱. 
    ¡Menos mal que han puesto cada regalo separado por espacio! 
    (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

    Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
    por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

    Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece
*/

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

// ------------------------------------------------------------------------------------------------