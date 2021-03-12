'use strict';

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
      open: 12,
      close: 22,
    },
    jum: {
      open: 11,
      close: 23,
    },
    sab: {
      open: 0,
      close: 24,
    },
  },
  // Parameternya diisi dengan property yang dipakai untuk menerima masukan/argumen dan mengembalikan nilainya
  // Ingar! harus menggunakan kurung kurawa untuk mengurai objek
  // Nilai default selalu menggunakan sama dengan untuk pengisian
  pesanan: function ({
    minumanIndex = 1,
    makananIndex = 0,
    alamat,
    pukul = '20:00',
  }) {
    console.log(
      `Pesanan diterima! ${this.minuman[minumanIndex]} dan ${this.makanan[makananIndex]} siap diantarkan ke alamat ${alamat} pukul ${pukul}`
    );
  },
};

rumahMakan.pesanan({
  minumanIndex: 0,
  makananIndex: 1,
  alamat: 'Jalan merpati, 30',
  // pukul : karena pukul tidak kita definisikan maka javascript akan mengambil nilai default yang kita tetapkan diatas
});

// Membuat function yang dapat menerima banyak argumen dari berbagai objek selama memiliki parameter yang sama
rumahMakan.pesanan({
  pukul: '22:30',
  alamat: 'Jalan merbabu, 21',
  minumanIndex: 2,
  makananIndex: 2,
});

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Cara yang lebih modern

const [x, y, z] = arr; // [x,y,z] merupakan destructuring assignment The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
console.log(x, y, z);

let [main, , secondary] = rumahMakan.kategori;
console.log(main, secondary);

//  ------- Jika kita ingin switching variable secara manual -------
const temp = main;
main = secondary; // Main yang sudah kita definisikan kita ganti lagi nilainya dengan nilai milik secondary
secondary = temp; // Kemudian nilai secondary yang sudah ditentukan diawal kita isi lagi dengan nilai dari variable temp yaitu main.
// Main sekarang menjadi 3 dan secondary menjadi 1 karena main pada awalnya 1 sebelum diisi
console.log(main, secondary);

//  ------- Jika kita ingin switching variable secara manual -------

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Function
/*Membuat method/function di dalam objek yang mengurai data yang ada di dalam array objek restaurant*/

const [starter, main1] = rumahMakan.order(2, 1);
console.log(starter, main1);

// ------------ Nested Destructuring ----------
const nested = [2, 4, [6, 8]];
const [i, , j] = nested; // i dan j merupakan indeks/perwakilan order
console.log([i, j]); // Nilai dalam nested berjumlah 3 data yaitu 2, 4 dan [6,8]

// ----------- Default Value ---------
const [p, q, r] = [8, 9];
console.log([p, q, r]); // Nilai r adalah undefined karena data pada array hanya ada 3 value

// ----------- Destructuring Object ---------
/* Destructuring objek menggunakan kurung kurawa  */
/*Dalam membuat objek sama seperti array tapi menggunakan kurung kurawa (karena objek), dan nama variable yang ada di dalam kurung tersebut (sebagai destructor) harus memiliki nama yang sama persis dengan apa yang ada di dalam objek yang ada disampingnya*/
const { nama, jamBuka, kategori } = rumahMakan;
console.log(nama, jamBuka, kategori);

// ---- Jika kita ingin mengubah nama variablenya (karena tadi menggunakan nama property asli dari objeknya) -----
/*Kita bisa mengubah namannya tetapi tetap harus merujuk ke nama property objek yang akan kita ambil datanya*/
const { nama: namanya, jamBuka: jamBukanya, kategori: tags } = rumahMakan;
/*Jadi yang kita hanya menambahkan nama baru tetapi dengan tetap merujuk ke nama property dari objek tersebut.*/
console.log(namanya, jamBukanya, tags);

// ----- Menambahkan nilai default -----
/* Dalam beberapa kasus jika ternyata variable yang kita tambahkan di destructor tidak terdapat di dalam objek maka secara default nilainya undefined, maka dalam hal ini kita tambahkan nilai yang kita sendiri tentukan*/
const { menu = [], minuman: starters = [] } = rumahMakan;
console.log(menu, starters);

// ----- Mutating/Override Objects -----
/* Kita ingin mengisi lagi nilai dari `d` dan `e` */
let d = 4;
let e = 5;
const obj = { d: 1, e: 2, f: 3 };
/* Kita tidak bisa menggunakan let atau const karena 'd' dan 'e' sebelumnya sudah di deklarasikan di atas */
// let { d, e } = obj;
/* Inikan polanya/formasinya sama dengan ini */
// const { nama, jamBuka, kategori } = rumahMakan;
/* Kita juga tidak bisa menggunakan kurung kurawa karena javascript menganggapnya block kode, jadi kita tidak mengisi nilai apapun ke dalamnya*/
// {a,b} = obj
/*Jadi solusinya kita wrap/bungkus semua ini ke dalam kurung balok */
[({ d, e } = obj)];
console.log(d, e);

// ----- Nested Objects -----
/*Mengurai nilai/property yang ada di objek (yang objek ini bersarang di dalam objek lainya) */
const { jum } = jamBuka;
// const { nama, jamBuka, kategori } = rumahMakan;
/*Kesamaan pola */
// Kenapa kita bisa menggunakan jamBuka secara langsung tanpa menggunakan parentnya? (rumahMakan), karena nama variable jamBuka sudah kita definisikan sebelumnya. Kalau belum didefinisikan ya harus menyertakan parentnya rumahMakan.jamBuka
// console.log(nama, jamBuka, kategori);
console.log(jum); // Object {open :11, close :23}
/* Nilai `jum` ini merupakan nama property yang ada di objek `jamBuka` */

// ----- Mengurai lebih dalam lagi property yang ada di dalam objek jum -----
const {
  jum: { open, close },
} = jamBuka;
console.log(open, close); // 11, 23 -> Hanya menampilkan nilainya saja tanpa keterangan tambahan
// Mengisi dengan nama variable baru yang merujuk ke nama property sebelumnya
const {
  jum: { open: buka, close: tutup },
} = jamBuka;
console.log(buka, tutup);
