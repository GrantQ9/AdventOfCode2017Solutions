const fs = require('fs');
const data = fs.readFileSync('input4.txt', 'utf8');
const lines = data.split(/\r?\n/);
total = 0;
partTwo = true

function noDuplicate(line) {
    for (var w_n = 0; w_n < line.length-1; w_n++) {
        for (c_w = w_n+1; c_w < line.length; c_w++) {
            if (line[w_n] == line[c_w]) {
                return false
            }
        }
    }
    return true
}

function noAnagram(line) {
    for (var w_n = 0; w_n < line.length-1; w_n++) {
        for (c_w = w_n+1; c_w < line.length; c_w++) {
            w1 = line[w_n]
            w2 = line[c_w]
            if (w1.length == w2.length) {
                letters = []
                isAna = true
                for  (var c = 0; c < 26; c++) {
                    letters.push(0)
                }
                for (var n = 0; n < line[c_w].length; n++) { 
                    letters[w1.charCodeAt(n) - 97] += 1 //only works on lowercase
                    letters[w2.charCodeAt(n) - 97] -= 1
                }
                for  (var c = 0; c < 26; c++) {
                    if (letters[c] != 0) {
                        isAna = false
                    }
                }
                if (isAna) {
                    return false
                }
            }
        }
    }
    return true
}



for (l of lines) {
    words = l.split(" ")
    if (noDuplicate(words) && !partTwo) {
        total += 1
    }
    if (noAnagram(words) && partTwo) {
        total += 1
    }
}

console.log(total)