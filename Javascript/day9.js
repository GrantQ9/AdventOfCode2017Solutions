const fs = require('fs');
const data = fs.readFileSync('input9.txt', 'utf8');
const lines = data.split(/\r?\n/);

groupSum = 0
groupLvl = 0;
isGarbage = false;
negate = false;

function normalCheck(c) {
    switch (c) {
        case "}": groupSum += groupLvl
            groupLvl -= 1
            break
        case "{": groupLvl += 1
            break
        case "<": isGarbage = true;
            break
        default:
            break
    }
}

function garbageCheck(c) {
    switch (c) {
        case "!": negate = true
            break
        case ">":
            isGarbage = false;
            break
        default: 
            g += 1
            break
    }
}

g = 0

for (c of lines[0]) {
    if (negate) {
        negate = false
        continue
    }
    if (isGarbage) {
        garbageCheck(c)
        continue
    } else {
        normalCheck(c)
    }
}

console.log(groupSum)
console.log(g)