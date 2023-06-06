let a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let b = [];
let c = [];
let d = [];
for (let i = 0; i < a.length; i++) {

    if (a[i] % 2 == 0 && a[i] != 0) {
        b.push(a[i]);
    } else if (a[i] % 2 != 0) {
        c.push(a[i]);
    } else if (a[i] == 0) {
        d.push(a[i]);
    }
}
console.log(b.concat(d, c));