const fs = require('fs');
const data = fs.readFileSync('input1.txt', 'utf8');
isSecond = false;
sum_match = 0;
n = 0;
len = data.length - 1 
while (n < len) {
    if (isSecond) {
        compare = ((n + Math.floor((len)) / 2) % (len))
    }
    else {
        compare = n+1
    }
    if (data[n] == data[compare]) {
        sum_match += parseInt(data[n])
    }
    n += 1
}
if (data[data.length - 2] == data[Math.floor(data.length / 2)] && isSecond) {
    sum_match += parseInt(data[0])
}
else if (data[data.length - 2] == data[0] && !isSecond) {
    sum_match += parseInt(data[data.length - 2])
}
console.log(sum_match)