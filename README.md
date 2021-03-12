## Destructuring-Arrays

Seri belajar data struktur javascript - part 1
Apa itu _destructuring assignment_? adalah ekspresi pada javascript yang memungkinkan untuk mengurai/mengambil nilai dari sebuah array, method ataupun object menjadi variable lain yang berbeda. artinya kita dapat menamai ulang variable/property dari sebuah objek selama nama itu masih merujuk ke nama property aslinya.

### Cara Manual

Jika kita ingin membaca data dari arrays kita harus menggunakan index dari arrays untuk mengambil data

```javascript
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

### Cara yang lebih powerfull

Caranya hampir mirip dengan yang diatas, tetapi _destructor_ berada di sebelah kiri dari arrays/objek yang akan diambil datanya

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3
```

> Hasilnya akan sama dengan cara yang manual walaupun hanya beberapa baris kode saja. `[a,b,c]` merupakan destructor/pemecah dari `array` [1,2,3]

> Penulisan untuk melakukan proses _Destructuring arryas_ menggunakan kurung besar []

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

> Destructuring objek menggunakan **_kurung kurawa_** {}

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
const obj = { d: 1, e: 2, f: 3 }; // Diisi dengan nilai d=1 dan e=2
```

> Kita tidak bisa menggunakan `let` atau `const` karena `d` dan `e` sebelumnya sudah di deklarasikan di atas

```javascript
let { d, e } = obj; // redeclaration
```

> Inikan polanya/formasinya sama dengan ini

```javascript
const { name, jamBuka, kategori } = rumahMakan;
```

Kita juga tidak bisa menggunakan kurung kurawa karena javascript menganggapnya _block kode_, jadi kita tidak bisa mengisi nilai apapun ke dalamnya

```javascript
{a,b} = obj // expected expression, got '=' (Mozilla)
```

Jadi solusinya kita wrap/bungkus semua ini ke dalam kurung balok (_parenthesis_)

```javascript
[({ d, e } = obj)];
console.log(d, e); // 1,2
```

### Nested Objects

Mengurai nilai/property yang ada di objek (yang objek ini bersarang di dalam objek lainya)

```javascript
const { jum } = jamBuka;
```

Kesamaan Pola/formasi

```javascript
const { nama, jamBuka, kategori } = rumahMakan;
```

Kenapa kita bisa menggunakan `jamBuka` secara langsung tanpa menggunakan parentnya? (`rumahMakan`), karena nama variable `jamBuka` sudah kita definisikan sebelumnya. Kalau belum didefinisikan ya harus menyertakan parentnya `rumahMakan.jamBuka`

```javascript
console.log(jum); // Object {open :11, close :23}
```

> Nilai `jum` ini merupakan nama property yang ada di objek `jamBuka`

### Mengurai lebih dalam lagi property yang ada di dalam objek `jum`

```javascript
const {
  jum: { open, close },
} = jamBuka;
console.log(open, close); // 11, 23 -> Hanya menampilkan nilainya saja tanpa keterangan tambahan
```

### Mengganti variable dengan nama baru yang merujuk ke nama property sebelumnya

```javascript
const {
  jum: { open: buka, close: tutup },
} = jamBuka;
console.log(buka, tutup);
```

### Membuat function yang dapat menerima banyak argumen dari berbagai objek selama memiliki parameter yang sama

Kita masih tetap memakai objek yang sama hanya saja kita menambahkan function/method baru di dalamnya

```javascript
  pesanan: function ({
    pembukaIndex = 1, // Objek yang akan menggunakan function ini harus memiliki parameter/variable yang sama namanya
    utamaIndex = 0,
    alamat,
    pukul = '20:00',
  }) {
    console.log( // Console.log untuk menampilkan/mengembalikan hasil ke console
      `Pesanan diterima! ${this.menuPembuka[pembukaIndex]} dan ${this.menuUtama[utamaIndex]} siap diantarkan ke alamat ${alamat} pukul ${pukul}`
    );
  },

};
```

> Ingat! harus menggunakan kurung kurawa untuk mengurai objek, Nilai default selalu menggunakan = untuk pengisian

```javascript
pesanan: function ({})
```

> Parameternya diisi dengan property yang dipakai untuk menerima masukan/argumen dan mengembalikan nilainya

Mari kita gunakan functionya untuk memesan makanan sesuai order! :

```javascript
rumahMakan.pesanan({
  pukul: '22:30',
  alamat: 'Jalan merbabu, 21',
  pembukaIndex: 2, // Ini akan memilih sesuai indeks array urutan ke 2 dari menuPembuka
  utamaIndex: 2,
});
```

mari kita gunakan `pukul` default yang function ini sediakan :

```javascript
rumahMakan.pesanan({
  pembukaIndex: 0,
  utamaIndex: 1,
  alamat: 'Jalan merpati, 30',
});
```

> pukul : karena pukul tidak kita definisikan maka javascript akan mengambil nilai default yang kita tetapkan diatas

Hasilnya :

```javascript
Pesanan diterima! es buah dan gulai siap diantarkan ke alamat Jalan merpati, 30 pukul 20:00
```
