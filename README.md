# Destructuring-Arrays

Apa itu _destructuring assignment_? adalah ekspresi pada javascript yang memungkinkan untuk mengurai/mengambil nilai dari sebuah array, method ataupun object menjadi variable lain yang berbeda. Artinya kita dapat menamai ulang variable/property dari sebuah objek selama nama itu masih merujuk ke nama property aslinya.

Berikut hal yang bisa kita lakukan dengan _destructuring assignment_

## Cara Manual

Jika kita ingin membaca data dari arrays kita harus menggunakan index dari arrays untuk mengambil data

```javascript
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

## Cara yang lebih powerfull

Caranya hampir mirip dengan yang diatas, tetapi _destructor_ berada di sebelah kiri dari arrays/objek yang akan diambil datanya. Untuk penulisanya bisa langsung dimasukkan sekaligus dalam satu kurung besar (_parenthesis_) tanpa harus di tulis satu satu

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3
```

> Hasilnya akan sama dengan cara yang manual walaupun hanya beberapa baris kode saja. `[a,b,c]` merupakan destructor/pemecah dari `array` [1,2,3]

> Penulisan syntax untuk melakukan proses _Destructuring arryas_ **menggunakan kurung besar []**

## Membaca data/property dari suatu objek

Kita coba gunakan contoh rumah makan sebagai objek kita

```javascript
const rumahMakan = {
  nama: 'Rumah makan berkah',
  lokasi: 'Jalan merpati blok m',
  kategori: ['tradisional', 'murah', 'warteg'],
  minuman: ['es teh', 'es jeruk', 'kopi'],
  makanan: ['soto', 'gulai ikan', 'rendang'],
};
```

Misalkan kita ingin mengetahui makanan apa saja yang ada di rumah makan berkah diatas

### Cara manual

Kita anggap variable `a` mewakili nama daftar makanan untuk mempersingkat kata

```javascript
let a = rumahMakan.makanan;
console.log(a[0], a[1], a[2]); // soto, gulai ikan, rendang
```

> Kita mengurai data yang ada pada `array` makanan dengan indeks/urutan yang kita 'wakilkan' dengan variable `a`. (a adalah daftar makanan)

### Menggunakan destructuring array

```javascript
let [a, b, c] = rumahMakan.makanan;
console.log(a, b, c);
```

> Penulisanya hampir sama saja, hanya saja kita sudah tidak memerlukan index untuk mengambil datanya karena setiap urutan sudah diwakili oleh variable-variable yang sudah kita buat yaitu `a`,`b` dan `c`

## Menukar nilai antar variable

### Cara Manual

Berikut jika kita ingin mengubah nilai dari suatu variable secara manual. Dengan tetap menggunakan contoh yang telah kita buat diatas

```javascript
const temp = a; // temp : temporary = nilai sementara. temp = soto
```

> Kita definisikan `temp` pertama kali dengan nilai yang sudah dipunyai `a` sebelumnya yaitu soto

```javascript
a = b; // soto kita ganti dengan gulai ikan
```

> `a` yang sudah kita definisikan soto kita ganti lagi nilainya dengan nilai milik `b` yaitu gulai ikan

```javascript
b = temp; // gulai ikan kita ganti dengan soto
```

> Kemudian nilai `b` yang sudah ditentukan diawal kita isi lagi dengan nilai dari variable `temp` yaitu `a` (`soto` sebelum diganti dengan `gulai ikan`). `a` sekarang menjadi `gulai ikan` dan `b` menjadi `soto`. karena `a` pada awalnya adalah `soto` jadi `temp` lah yang nilainya tetap dia tidak berubah sama sekali, Jadi `b` otomatis terisi dengan soto. Lanjut ya :)

Hasilnya

```javascript
console.log(a, b); // gulai, ikan soto
```

### Menggunakan destructuring assignment

Sekarang kita menggunakan metode _destructuring assignment_

```javascript
[a, b] = [b, a];
```

That's it!. Coba perhatikan, bahwa seperti yang sudah saya jelaskan diatas bahwa kita menuliskan sumber dari data/objek/array-nya disebelah kiri kemudian diikuti _destructornya_ yang siap untuk diisi. Pertama-tama kita balik dulu variable nya [b, a] kemudian kita tinggal pasangkan dengan destructornya [a,b] jadi a=b dan b=a.

## Membuat function untuk mengurai/membaca array yang ada di dalam objek

Kita akan membuat function yang dapat mengurai/mengambil data dari objek `rumahMakan`.

```javascript
const rumahMakan = {
  nama: 'Rumah makan berkah',
  lokasi: 'Jalan merpati blok m',
  kategori: ['tradisional', 'murah', 'warteg'],
  minuman: ['es teh', 'es jeruk', 'kopi'],
  makanan: ['soto', 'gulai ikan', 'rendang'],
  order: function (minumanIndex, makananIndex) {
    return [this.minuman[minumanIndex], this.makanan[makananIndex]];
  },
};
```

Coba kita urai functionya :

```javascript
order: function (minumanIndex, makananIndex) {
    return [this.minuman[minumanIndex], this.makanan[makananIndex]];
  }
```

> Function `order` diatas mencoba mengurai/mengambil data dari property `minuman` dan `makanan` dengan menggunakan keyword `this` dan menggunakan [index]untuk melacak urutan dari array mereka.

Kita tampilkan hasilnya menggunakan `console.log` yang nilai dari function tadi kita simpan dalam variable const `[minum, makan]`

```javascript
const [minum, makan] = rumahMakan.order(2, 1);
console.log(minum, makan); // kopi, gulai ikan
```

## Nested Arrays Destructuring

Arrays yang ada di dalam arrays

```javascript
const sarang = [2, 4, [6, 8]];
const [i, , j] = sarang; // Ada 3 indeks
console.log([i, j]); // 2, [6,8]
```

> `i` dan `j` merupakan indeks/perwakilan dari urutan nested

> Nilai dalam nested berjumlah 3 data yaitu 2, 4 dan [6,8]

## Default value dari sebuah arrays

Secara default javascript memberikan nilai `undefined` terhadap suatu variable yang nilainya tidak diketahui. Jadi `undefined` masih merupakan sebuah nilai

```javascript
const [p, q, r] = [8, 9]; // r tidak memiliki nilai
console.log([p, q, r]); // 8, 9 , undefined
```

> Nilai r adalah undefined karena data pada array hanya ada 3 value
> tapi kita masih bisa mengatur nilai default dari sebuah arrays jika nilai yang kita urai pada sebuah arrays ternyata tidak tersedia

### Menetapkan sebuah nilai default sendiri

Kita bisa menetapkan sebuah nilai default untuk berjaga jaga jika apabila array/method yang kita ambil datanya tidak memiliki nilai.

```javascript
const [p = 1, q = 1, r = 1] = [8, 9]; // Maka r sama dengan 1
console.log(p, q, r); // 8, 9, 1
```

# Destructuring Objects

> Destructuring objek menggunakan **_kurung kurawa_** {}

Dalam membuat objek sama seperti array tapi menggunakan kurung kurawa (karena objek), dan nama variable yang ada di dalam kurung tersebut (sebagai destructor) harus memiliki nama yang sama persis dengan properti yang ada di dalam objek yang ada disampingnya

```javascript
const { nama, lokasi, kategori } = rumahMakan;
console.log(nama, lokasi, kategori);
```

> Hasilnya secara berturut turut : (`Nama`)Rumah makan berkah, (`lokasi`) Jalan merpati blok m, (`Kategori`) Array(3) [ "tradisional", "murah", "warteg" ]

## Mengubah nama variable

Jika kita ingin mengubah nama variablenya (karena dari tadi menggunakan nama property asli dari objeknya).
Kita bisa mengubah namannya tetapi **_tetap harus merujuk ke nama property objek_** yang akan kita ambil datanya

```javascript
const { nama: namanya, lokasi: lokasinya } = rumahMakan;
```

> Jadi kita **_hanya_** menambahkan nama pengganti baru tetapi dengan tetap merujuk ke nama property dari objek tersebut.

```javascript
> console.log(namanya, lokasinya); // Hasil tetap sama
```

## Menambahkan nilai default

Dalam beberapa kasus jika ternyata variable yang kita tambahkan di _destructor_ tidak terdapat di dalam objek maka secara _default_ nilainya _undefined_, maka dalam hal ini kita tambahkan nilai yang kita sendiri tentukan

```javascript
const { menu = [], minuman: minumnya = [] } = rumahMakan;
console.log(menu, minumnya);
```

## Mutating/Override Objects

Kita ingin mengisi lagi nilai dari `d` dan `e`

```javascript
let d = 4;
let e = 5;
const obj = { d: 1, e: 2, f: 3 }; // Diisi dengan nilai d=1 dan e=2
```

> Kita tidak bisa menggunakan `let` atau `const` karena `d` dan `e` sebelumnya sudah di deklarasikan di atas

```javascript
let { d, e } = obj; // error : redeclaration
```

> Inikan polanya/formasinya sama dengan ini

```javascript
const { nama, jamBuka, kategori } = rumahMakan;
```

Kita juga tidak bisa menggunakan kurung kurawa karena javascript menganggapnya _block kode_, jadi kita tidak bisa mengisi nilai apapun ke dalamnya seperti dibawah ini

```javascript
{a,b} = obj // expected expression, got '=' (Mozilla)
```

Jadi solusinya kita wrap/bungkus semua ini ke dalam kurung balok (_parenthesis_)

```javascript
[({ d, e } = obj)];
console.log(d, e); // 1,2
```

### Nested Objects

Update objek : Menambahkan `jam buka`

```javascript
const rumahMakan = {
  nama: 'Rumah makan berkah',
  lokasi: 'Jalan merpati blok m',
  kategori: ['tradisional', 'murah', 'warteg'],
  minuman: ['es teh', 'es jeruk', 'kopi'],
  makanan: ['soto', 'gulai ikan', 'rendang'],
  order: function (minumanIndex, makananIndex) {
    return [this.minuman[minumanIndex], this.makanan[makananIndex]];
  },
  jamBuka: {
    kam: {
      buka: 12,
      tutup: 22,
    },
    jum: {
      buka: 11,
      tutup: 23,
    },
    sab: {
      buka: 0,
      tutup: 24, //24 Jam :)
    },
  },
};
```

Mengurai nilai/property yang ada di objek (yang objek ini bersarang di dalam objek lainya)

```javascript
const { jum } = jamBuka;
```

Kesamaan Pola/formasi

```javascript
const { nama, lokasi } = rumahMakan;
```

Kenapa kita bisa menggunakan `jamBuka` secara langsung tanpa menggunakan parentnya? (`rumahMakan`), karena nama variable `jamBuka` sudah kita definisikan sebelumnya. Kalau belum didefinisikan ya harus menyertakan parentnya `rumahMakan.jamBuka`

```javascript
console.log(jum); // Object {buka :11, tutup :23}
```

> Nilai `jum` ini merupakan nama property yang ada di objek `jamBuka`

### Mengurai lebih dalam lagi property yang ada di dalam objek `jum`

```javascript
const {
  jum: { buka, tutup },
} = jamBuka;
console.log(buka, tutup); // 11, 23 -> Hanya menampilkan nilainya saja tanpa keterangan tambahan
```

### Mengganti variable dengan nama baru yang merujuk ke nama property sebelumnya

```javascript
const {
  jum: { buka: bukanya, tutup: tutupnya },
} = jamBuka;
console.log(bukanya, tutupnya);
```

### Membuat function yang dapat menerima banyak argumen dari berbagai objek selama memiliki parameter yang sama

Kita masih tetap memakai objek yang sama hanya saja kita menambahkan function/method baru di dalamnya

```javascript
  pesanan: function ({
    minumanIndex = 1, // Objek yang akan menggunakan function ini harus memiliki parameter/variable yang sama namanya
    makananIndex = 0,
    alamat,
    pukul = '20:00',
  }) {
    console.log( // Console.log untuk menampilkan/mengembalikan hasil ke console
      `Pesanan diterima! ${this.minuman[minumanIndex]} dan ${this.makanan[makananIndex]} siap diantarkan ke alamat ${alamat} pukul ${pukul}`
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
  minumanIndex: 2, // Ini akan memilih sesuai indeks array urutan ke 2 dari minuman
  makananIndex: 2,
});
```

mari kita gunakan `pukul` default yang function ini sediakan :

```javascript
rumahMakan.pesanan({
  minumanIndex: 0,
  makananIndex: 1,
  alamat: 'Jalan merpati, 30',
});
```

> pukul : karena pukul tidak kita definisikan maka javascript akan mengambil nilai default yang kita tetapkan diatas

Hasilnya :

```javascript
Pesanan diterima! es buah dan gulai siap diantarkan ke alamat Jalan merpati, 30 pukul 20:00
```
