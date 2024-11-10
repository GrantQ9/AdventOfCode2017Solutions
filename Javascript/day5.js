const fs = require('fs');
const data = fs.readFileSync('input5.txt', 'utf8');
const lines = data.split(/\r?\n/);
instruct = []
steps = 0
place = 0
partTwo = true

for (l of lines) {
    instruct.push(Number(l))
}

while (place >= 0 && place < instruct.length) {
    next_place = place + instruct[place]
    instruct[place] += 1
    steps += 1
    if (partTwo && instruct[place] >= 4) {
        instruct[place] -= 2
    }
    place = next_place
}

console.log(steps)