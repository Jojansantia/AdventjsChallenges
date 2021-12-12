export default function getMinJump(obstacles) {
    const maxJump = Math.max(...obstacles) + 1
    let minJump = maxJump
    for (let i = 1; i < maxJump; i++) {
        if(obstacles.every((x) => x % i !== 0) && i < minJump) minJump = i
    }
    return minJump
}

const obstacles = [5, 3, 6, 7, 9]
const obstacles2 = [2, 4, 6, 8, 10]

console.log(getMinJump(obstacles), getMinJump(obstacles2))