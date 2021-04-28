const arr = new Array(1, 2, 3, 4, 5)
console.log('Array Iteration 1')
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('Array Iteration 2')
arr.forEach(v => {
    console.log(v)
})
console.log('Array Iteration 3')
for (let v of arr) {
    console.log(v)
}
console.log('Array Iteration 4')
for (let i in arr) {
    console.log(arr[i])
}

const set = new Set([1, 2, 3, 4, 'Hello'])
console.log('Set Iteration 1')
for (let v of set) {
    console.log(v)
}
console.log('Set Iteration 2')
for (let v of set.values()) {
    console.log(v)
}
console.log('Set Iteration 3')
set.forEach(v => {
    console.log(v)
});

/////////////////////////////////////////////////////////

const obj = { a: 1, b: 2, c: 3, 9: 4, e: 'Hello' }
console.log('Object Iteration 1')
const keys = Object.keys(obj) // [ 'a', 'b', 'c', '9', 'e' ]
for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const v = obj[k]
    console.log(k, v)
}
console.log('Object Iteration 2')
const values = Object.values(obj) // [ 1, 2, 3, 4, 'Hello' ]
for (let i = 0; i < values.length; i++) {
    const v = values[i]
    console.log(v)
}
console.log('Object Iteration 3')
const entries = Object.entries(obj) // [ ['a', 1], ['b', 2], ['c', 3], ['9', 4], ['e', 'Hello'] ]
for (let i = 0; i < entries.length; i++) {
    const k = entries[i][0]
    const v = entries[i][1]
    console.log(k, v)
}
console.log('Object Iteration 4')
for (let k in obj) {
    const v = obj[k]
    console.log(k, v)
}


const map = new Map( [ ['a', 1], ['b', 2], ['c', 3], ['9', 4], ['e', 'Hello'] ])
console.log('Map Iteration 1')
for (let [k, v] of map) {
    console.log(k, v)
}
console.log('Map Iteration 2')
for (let k of map.keys()) {
    console.log(k, map.get(k))
}
console.log('Map Iteration 3')
for (let v of map.values()) {
    console.log(v)
}
console.log('Map Iteration 4')
for (let [k, v] of map.entries()) {
    console.log(k, v)
}
console.log('Map Iteration 5')
map.forEach(function(v, k) {
    console.log(k, v)
})
