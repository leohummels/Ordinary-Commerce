export default function randomKey() {
    const key:Array<number> = []

    for(let i = 0; i < 16; i++ ){
        let num = Math.floor(Math.random() * (9))
        key.push(num)
    }

    return key.join("")
}