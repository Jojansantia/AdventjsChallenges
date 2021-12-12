function createXmasTree(height) {
    let xMaxTree = ''
    let maxUnderscore = (height * 2) - 2

    for (let index = 0; index < height; index++) {
        let underscoreXLvl = (maxUnderscore/2) - (index * 1)
        xMaxTree += '_'.repeat(underscoreXLvl) + '*'.repeat(2*index + 1) + '_'.repeat(underscoreXLvl) + '\n'
    }

    let log = '_'.repeat(maxUnderscore/2) + '#' + '_'.repeat(maxUnderscore/2)
    xMaxTree += log + '\n' + log
    return xMaxTree
}

let newXMasTree = createXmasTree(5)

console.log(newXMasTree)
