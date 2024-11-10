config = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]
config = [0, 2, 7, 0]
seen_config  = [config.toString()]
cycles = 0
has_repeated = false

function getBiggest(config) {
    big_index = 0;
    big_value = 0;
    for (let n = 0; n < config.length; n++) {
        if (config[n] > big_value) {
            big_index = n
            big_value = config[n]
        }
    }
    return big_index
}

function redistribute(index) {
    to_dist = config[index]
    config[index] = 0
    for (var i = index + 1; to_dist > 0; i++) {
        config[i % config.length] += 1
        to_dist -= 1
    }
}

while (!has_repeated) {
    redistribute(getBiggest(config))
    newConfig = config.toString()
    cycles += 1
    for (c of seen_config) {
        if (c == newConfig) {
            console.log(cycles)
            has_repeated = true
        }
    }
    seen_config.push(newConfig)
}