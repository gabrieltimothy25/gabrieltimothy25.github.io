# Hacktiv8 p0 Project Update
# Bisa Ditemukan dan dijalankan di halaman github.io saya, di bagian 'My Latest Project'
- Project Ini merupakan sebuah game simple yang menguji kemampuan/daya ingat.
- Terdapat 12 pasang kartu (24 total) yang masing-masing pasang merupakan sebuah bahasa pemograman terkenal.
- Akan tetapi, kartu-kartu tersebut mengadap kebawah alias tertutup bagi si pemain.
- Pemain hanya bisa membuka dan melihat isi dari 2 kartu di saat yang bersamaan. 
- Bila kedua kartu yang pemain buka merupakan bahasa pemograman yang sama, kedua kartu tersebut akan terus terbuka sampai akhir permainan.
- Namun, apabila kedua kartu tersebut tidak merupakan bahasa pemograman yang sama, kedua tersebut akan tertutup dengan sendirinya. Tiap tebakan yang salah, pemain akan diberi waktu kurang dari sedetik untuk melihat kartu yang telah mereka buka.
- Tujuan akhir permainan adalah untuk menebak tiap pasangan kartu dengan benar hingga seluruh kartu terbuka.
- Pemain bisa memilih untuk mulai dan menshuffle ulang permainan ini setelah Ia tamatkan


### Cara Kerja - Layout
1. Terdapat Variable array yang terdefined di file script.js berisi berbagai macam bahasa pemograman dan pasangannya (24 total).
2. Sebuah fungsi shuffle di-declare untuk me-randomize variable dalam array sebelum di masukkan kedalam kartu-kartu.
3. Sebuah fungsi newBoard() di declare untuk membuat layout bagi masing-masing value dalam array yang sudah di shuffle; berisi looping yang akan terus menerus membuat div bagi masing-masing bahasa pemograman di array awal.
cth : for (var i = 0; i < languagesArray.length; i++) {
  output += `<div id="tile_${i}" onclick="memoryFlipTile(this,'${memoryArray[i]}')"></div>`; ---> pembuatan sebuah div 24 kali dengan 24 unique id
}
document.getElementById('memoryBoard').innerHTML = output; ---> yang awal wujudnya string dimasukkan ke semacam grid system yang sudah di preset
### Cara Kerja - Checker
4. Ketika User meng-flip sebuah kartu, div kartu tersebut akan dimanipulate dan berubah tampilan untuk menunjukkan kontennya, yang akan menampilkan value string.  Sama halnya terjadi dengan kartu kedua yang Ia pilih
5. Masing index dari kedua kartu di simpan dalam temp variable.
6. Apabila kartu1 === kartu2, maka elemen tidak akan dimanipulasi dan akan stay terbuka, karena dianggap terpecahkan.
7. Apabila tidak, Menggunakan DOM access element by Id program akan mencari indeks dari kartu 1 dan 2, dan menutup mereka berdua.
8. Terdapat timer yang akan auto-run. Disini temponya di set di 700ms/0.7s.

### Cara Kerja - Generate new puzzle
9. Ketika Jumlah kartu yang terbuka telah sama dengan panjang array global/keseluruhan, maka sudah pasti pemain telah menebak lokasi dari seluruh kartu. Oleh Karena itu, innerHTML dari board akan dikosongkan, lalu fungsi generateBoard akan dijalankan lagi.
