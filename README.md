# Destructuring-Arrays

Seri belajar Data struktur javascript

Jika kita ingin membaca data dari arrays kita harus menggunakan index dari arrays untuk mengambil data

```javascript
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

// Cara yang lebih modern
[x,y,z] merupakan destructuring assignment The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

### Switching variable manual

```javascript
const temp = main;
```

```javascript
main = secondary;
```

> Main yang sudah kita definisikan kita ganti lagi nilainya dengan nilai milik secondary

```javascript
secondary = temp;
```

> Kemudian nilai secondary yang sudah ditentukan diawal kita isi lagi dengan nilai dari variable temp yaitu main. Main sekarang menjadi 3 dan secondary menjadi 1 karena main pada awalnya 1 sebelum diisi
> console.log(main, secondary);

# Switching using destructuring

Membuat array baru dengan 2 variable di dalamnya

```javascript
[main, secondary] = [secondary, main];
```
