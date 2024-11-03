const fs = require('fs');
const data = fs.readFileSync('input2.txt', 'utf8');
const lines = data.split(/\r?\n/);
dif_sum = 0;
wantDiv = true;

function bigDiff(nums) {
    min = 10000
    max = 0
    for (n of nums) {
        n = Number(n)
        if (min > n) {
            min = n
        }
        if (max < n) {
            max = n
        }
    }
    return max - min
}

function onlyDiv(nums) {
    for (var i = 0; i < nums.length-1; i++) {
        for(var j = i+1; j < nums.length; j++) {
            k = Number(nums[i])
            l = Number(nums[j])
            if (k > l && k % l == 0) {
                return Math.floor(k / l)
            }
            if (k < l && l % k == 0) {
                return Math.floor(l / k)
            }
        }
    }
}

for (l of lines) {
    nums = l.split("\t")
    if (nums.length == 1) {
        continue
    }
    if (wantDiv) {
        dif_sum += Number(onlyDiv(nums))
    } else {
        dif_sum += bigDiff(nums)
    }
}

console.log(dif_sum)

