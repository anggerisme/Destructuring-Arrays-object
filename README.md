## Destructuring-Arrays

Seri belajar data struktur javascript - part 1

Jika kita ingin membaca data dari arrays kita harus menggunakan index dari arrays untuk mengambil data

```javascript
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

Cara yang lebih modern
`[x,y,z]` merupakan destructuring assignment

> The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.

```javascript
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
```

### Switching variable manual

```javascript
const temp = main;
```

> Kita definisikan temp pertama kali dengan nilai yang sudah dipunyai main sebelumnya

```javascript
main = secondary;
```

> Main yang sudah kita definisikan kita ganti lagi nilainya dengan nilai milik secondary

```javascript
secondary = temp;
```

> Kemudian nilai secondary yang sudah ditentukan diawal kita isi lagi dengan nilai dari variable temp yaitu main. Main sekarang menjadi 3 dan secondary menjadi 1 karena main pada awalnya 1 sebelum diisi
> console.log(main, secondary);

### Switching using destructuring

Membuat array baru dengan 2 variable di dalamnya

```javascript
[main, secondary] = [secondary, main];
```

### Membuat function untuk mengurai array yang ada di dalam objek

Kita akan membuat function yang dapat mengurai/mengambil data dari objek rumahMakan.

```javascript
const rumahMakan = {
  name: 'Rumah makan berkah',
  lokasi: 'Jalan merpati blok m',
  kategori: ['tradisional', 'rempah', 'gurih', 'lezar'],
  menuPembuka: ['es buah', 'es krim', 'soto'],
  menuUtama: ['Padang', 'gulai', 'rendang'],
  order: function (pembukaIndex, UtamaIndex) {
    return [this.menuPembuka[pembukaIndex], this.menuUtama[UtamaIndex]];
  },
};
```

Coba kita urai functionya :

```javascript
order: function (pembukaIndex, UtamaIndex) {
    return [this.menuPembuka[pembukaIndex], this.menuUtama[UtamaIndex]];
  }
```

> Function diatas mencoba mengurai/mengambil data dari property `menuPembuka` dan `menuUtama` dengan menggunakan keyword `this` dan menggunakan [index] yang digunakan untuk melacak urutan dari array mereka.

Kita tampilkan hasilnya menggunakan console.log yang nilai dari function tadi kita simpan dalam variable const `[starter, main1]`

```javascript
const [starter, main1] = rumahMakan.order(2, 1);
console.log(starter, main1);
```

### Nested Destructuring

```javascript
const nested = [2, 4, [6, 8]];
const [i, , j] = nested;
console.log([i, j]); //
```

> `i` dan `j` merupakan indeks/perwakilan dari urutan nested

```javascript
const nested = [2, 4, [6, 8]];
```

> // Nilai dalam nested berjumlah 3 data yaitu 2, 4 dan [6,8]

### Default value dari sebuah arrays

```javascript
const [p, q, r] = [8, 9];
console.log([p, q, r]);
```

> Nilai r adalah undefined karena data pada array hanya ada 3 value
> tapi kita masih bisa mengatur nilai default dari sebuah arrays jika nilai yang kita urai pada sebuah arrays ternyata tidak tersedia

```javascript
const [p = 1, q = 1, r = 1] = [8, 9]; // Maka r sama dengan 1
```

## Destructuring Objects

Dalam membuat objek sama seperti array tapi menggunakan kurung kurawa (karena objek), dan nama variable yang ada di dalam kurung tersebut (sebagai destructor) harus memiliki nama yang sama persis dengan properti yang ada di dalam objek yang ada disampingnya

```javascript
const { name, jamBuka, kategori } = rumahMakan;
console.log(name, jamBuka, kategori);
```

> Hasilnya secara berturut turut : (`Nama`)Rumah makan berkah, (`jamBuka`) Object { kam: {…}, jum: {…}, sab: {…} }, (`Kategori`) Array(4) [ "tradisional", "rempah", "gurih", "lezar" ]

### Mengubah nama variable

Jika kita ingin mengubah nama variablenya (karena tadi menggunakan nama property asli dari objeknya).
Kita bisa mengubah namannya tetapi **_tetap harus merujuk ke nama property objek_** yang akan kita ambil datanya

```javascript
const { name: nama, jamBuka: jamBukanya, kategori: tags } = rumahMakan;
```

> Jadi kita **_hanya_** menambahkan nama baru tetapi dengan tetap merujuk ke nama property dari objek tersebut.

```javascript
> console.log(nama, jamBukanya, tags); // Hasil tetap sama
```

### Menambahkan nilai default

Dalam beberapa kasus jika ternyata variable yang kita tambahkan di destructor tidak terdapat di dalam objek maka secara default nilainya undefined, maka dalam hal ini kita tambahkan nilai yang kita sendiri tentukan

```javascript
const { menu = [], menuPembuka: starters = [] } = rumahMakan;
console.log(menu, starters);
```

### Mutating/Override Objects

Kita ingin mengisi lagi nilai dari `d` dan `e`

```javascript
let d = 4;
let e = 5;
const obj = { d: 1, e: 2, f: 3 };
```

> Kita tidak bisa menggunakan let atau const karena 'd' dan 'e' sebelumnya sudah di deklarasikan di atas

```javascript
let { d, e } = obj;
```

> Inikan polanya/formasinya sama dengan ini

```javascript
const { name, jamBuka, kategori } = rumahMakan;
```

Kita juga tidak bisa menggunakan kurung kurawa karena javascript menganggapnya block kode, jadi kita tidak mengisi nilai apapun ke dalamnya

```javascript
{a,b} = obj
```

Jadi solusinya kita wrap/bungkus semua ini ke dalam kurung balok (_parenthesis_)

```javascript
[({ d, e } = obj)];
console.log(d, e);
```
