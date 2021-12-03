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