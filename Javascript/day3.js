
function getRingStart(num) {
    if (num == 1) {
        return 1, 1
    }
    let ringNum = 1
    let ringStart = 2
    while (true) {
        newNum = ringNum + 2;
        newStart = newNum**2 + 1;
        if (newStart > num) {
            console.log(ringStart, ringNum)
            return ringNum
        }
        ringNum = newNum;
        ringStart = newStart;
    }
}

function getSteps(ringStart, ringNum, num) {
    if (num == 1) {
        return 0
    }
    stepsIn = Math.floor((ringNum + 1) / 2);
    width = stepsIn * 2 + 1;
    centerAdd = stepsIn - 1;
    if (num <= ringStart + ringNum) {
        return stepsIn + Math.abs((num) - (ringStart + centerAdd))
    }
    if (num <= ringStart + ringNum*2 + 1) {
        return stepsIn + Math.abs(num - (ringStart + centerAdd + width - 1))
    }
    if (num <= ringStart + ringNum*2 + width) {
        return stepsIn + Math.abs(num - (ringStart + centerAdd + (2 * width) - 2))
    }
    else {
        return stepsIn + Math.abs(num - (ringStart + centerAdd + (3 * width) - 3))
    }
}

test = 368078;
let s, n;
n = getRingStart(test)
s = n**2 + 1
console.log(getSteps(s, n, test))