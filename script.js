const rumahMakan = {
  name: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "rempah", "gurih", "lezar"],
  menuPembuka: ["es buah", "es krim", "soto"],
  menuUtama: ["Padang", "gulai", "rendang"],
  order: function (starterIndex, mainIndex) {
    return [this.menuPembuka[starterIndex], this.menuUtama[mainIndex]];
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
// Membuat method/function di dalam objek yang mengurai data yang ada di dalam array objek restaurant

console.log(rumahMakan.order(2, 1));
