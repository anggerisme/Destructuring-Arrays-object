'use strict';

const rumahMakan = {
  name: 'Rumah makan berkah',
  lokasi: 'Jalan merpati blok m',
  kategori: ['tradisional', 'rempah', 'gurih', 'lezar'],
  menuPembuka: ['es buah', 'es krim', 'soto'],
  menuUtama: ['Padang', 'gulai', 'rendang'],
  order: function (pembukaIndex, utamaIndex) {
    return [this.menuPembuka[pembukaIndex], this.menuUtama[utamaIndex]];
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
};

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
/*Dalam membuat objek sama seperti array tapi menggunakan kurung kurawa (karena objek), dan nama variable yang ada di dalam kurung tersebut (sebagai destructor) harus memiliki nama yang sama persis dengan apa yang ada di dalam objek yang ada disampingnya*/
const { name, jamBuka, kategori } = rumahMakan;
console.log(name, jamBuka, kategori);

// ---- Jika kita ingin mengubah nama variablenya (karena tadi menggunakan nama property asli dari objeknya) -----
/*Kita bisa mengubah namannya tetapi tetap harus merujuk ke nama property objek yang akan kita ambil datanya*/
const { name: nama, jamBuka: jamBukanya, kategori: tags } = rumahMakan;
/*Jadi yang kita hanya menambahkan nama baru tetapi dengan tetap merujuk ke nama property dari objek tersebut.*/
console.log(nama, jamBukanya, tags);

// ----- Menambahkan nilai default -----
/* Dalam beberapa kasus jika ternyata variable yang kita tambahkan di destructor tidak terdapat di dalam objek maka secara default nilainya undefined, maka dalam hal ini kita tambahkan nilai yang kita sendiri tentukan*/
const { menu = [], menuPembuka: starters = [] } = rumahMakan;
console.log(menu, starters);

// ----- Mutating Objects -----
let d = 4;
let e = 5;
const obj = { d: 1, e: 2, f: 3 };
/* Kita tidak bisa menggunakan let atau const karena 'd' dan 'e' sebelumnya sudah di deklarasikan di atas */
let { d, e } = obj;
/* Inikan polanya/formasinya sama dengan ini */
// const { name, jamBuka, kategori } = rumahMakan;
