lengths = [63,144,180,149,1,255,167,84,125,65,188,0,2,254,229,24]
str_len = "63,144,180,149,1,255,167,84,125,65,188,0,2,254,229,24"
position = 0
skip_size = 0
nums = []
cir_len = 256


for (x = 0; x < cir_len; x++) {
    nums.push(x)
}

function knot(nums, length) {
    past_start = 0
    list_end = position + length
    if (list_end > cir_len) {
        past_start = list_end - cir_len
        list_end = cir_len
    }
    to_rev = nums.slice(position, list_end).concat(nums.slice(0, past_start))
    to_rev = to_rev.reverse()
    new_nums = to_rev.slice(length-past_start).concat(nums.slice(past_start, position).concat(to_rev.slice(0, length - past_start)))
    if (past_start == 0) {
        new_nums = new_nums.concat(nums.slice(list_end))
    }
    position += (length + skip_size)
    position = position % cir_len
    skip_size += 1
    return new_nums
}

function KnotHash (nums, lengths) {
    for (l of lengths) {
        nums = knot(nums, l)
    } return nums
}


function DenseHash(sparse) {
    done_hash = ""
    for (n = 0; n < sparse.length; n += 16) {
        to_xor = sparse[n]
        for (m = n+1; m < n + 16; m++) {
            to_xor = to_xor ^ sparse[m]
        }
        if (to_xor.toString(16).length == 1) {
            done_hash += (0)
        }
        done_hash += to_xor.toString(16)
    }
    return done_hash
}


new_lengths = []
for (c of str_len) {
    new_lengths.push(c.charCodeAt(0))
}
new_lengths = new_lengths.concat([17, 31, 73, 47, 23])


for (n = 0; n < 64; n++) {
    nums = KnotHash(nums, new_lengths)
}

console.log(nums)


console.log(DenseHash(nums))
c500ffe015c83b60fad2e4b7d59dabc4
c500ffe015c83b60fad2e4b7d59dabc4