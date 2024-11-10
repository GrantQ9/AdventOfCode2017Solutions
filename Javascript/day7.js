const fs = require('fs');
const data = fs.readFileSync('input7.txt', 'utf8');
const lines = data.split(/\r?\n/);

weightList = new Map();
descList = new Map();

for (l of lines) {
    s = l.replaceAll(",", "").split(" ")
    disc = s[0];
    weight = Number(s[1].slice(1, -1));
    above = []
    for (n = 3; n < s.length; n++) {
        above.push(s[n])
    }
    weightList.set(disc, [weight, above])
    for (d of above) {
        descList.set(d, disc)
    }
}

on_disk = "iaibv";

while (true) {
    if (descList.get(on_disk) == undefined) {
        // console.log(on_disk)
        break
    }
    on_disk = descList.get(on_disk)
}


//TIDY UP TO ACTUALLY GIVE REAL ANSWER
function getWeight(disk, weights = []) {
    if (weightList.get(disk)[1].length > 0) {
        const weights = []
        for (w of weightList.get(disk)[1]) {
            this_weight = getWeight(w)
            weights.push(this_weight)
        }
        weight_sum = weightList.get(disk)[0];
        for (w of weights) {
            weight_sum += w
            if (w != weights[0]) {
                console.log("!!!")
                console.log(weights, disk)
            }
        }
        return weight_sum
    }
    return weightList.get(disk)[0]
}

console.log(getWeight('sfjspc'))

