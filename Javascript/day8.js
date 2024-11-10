const fs = require('fs');
const data = fs.readFileSync('input8.txt', 'utf8');
const lines = data.split(/\r?\n/);

regs = new Map();
highest = 0;

function isValid(reg, compare, val) {
    reg_val = regs.get(reg);
    switch (compare) {
        case ">":
            if (reg_val > val) {
                return true
            } break
        case "<": 
            if (reg_val < val) {
                return true
            } break
        case "<=": 
            if (reg_val <= val) {
                return true
            } break
        case ">=": 
            if (reg_val >= val) {
                return true
            } break
        case "!=": 
            if (reg_val != val) {
                return true
            } break
        case "==": 
            if (reg_val == val) {
                return true
            } break
    }
    return false
}

function regChange(reg, instr, amount) {
    switch (instr) {
        case "inc": 
            regs.set(reg, regs.get(reg) + amount)
            break
        case "dec": 
            regs.set(reg, regs.get(reg) - amount)
    }
    if (regs.get(reg) > highest) {
        highest = regs.get(reg)
    }
}




for (l of lines) {
    l = l.split(" ")
    if (regs.get(l[0]) == undefined) {
        regs.set(l[0], 0)
    }
    if (regs.get(l[4])== undefined) {
        regs.set(l[4], 0)
    }
    if (isValid(l[4], l[5], Number(l[6]))) {
        regChange(l[0], l[1], Number(l[2]))
    }
}

for (m of regs) {
    console.log(m)
}
console.log(highest)