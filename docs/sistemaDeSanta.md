# Reto 18 - El sistema operativo de Santa Claus

Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido.

```jsx harmony
function fixFiles(files) {
  let newFiles = []
  let auxDoc = {}

  for (const file of files) {
    let auxFile = file
    if(auxDoc[file]){
      auxFile = `${file}(${auxDoc[file]})`
      auxDoc[file] += 1
    }
    else auxDoc[file] = 1
    newFiles.push(auxFile)
  }
  return newFiles
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files))
```