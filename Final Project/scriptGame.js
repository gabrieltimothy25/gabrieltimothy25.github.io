var memoryArray = ['Python', 'Python', 'JavaScript', 'JavaScript', 'C++', 'C++', 'Kotlin', 'Kotlin', 'SQL', 'SQL', 'C#', 'C#', 'HTML', 'HTML', 'CSS', 'CSS', 'Ruby', 'Ruby', 'PHP', 'PHP', 'Swift', 'Swift', 'Java', 'Java'];
var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;

// MengShuffle Jawaban
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
// Mulai Dari Awal
function newBoard() {
    tilesFlipped = 0;
    var output = '';
    memoryArray = shuffle(memoryArray);
    for (var i = 0; i < memoryArray.length; i++) {
		output +=  `<div id="tile_${i}" onclick="memoryFlipTile(this,'${memoryArray[i]}')"></div>`;
    }
    document.getElementById('memoryBoard').innerHTML = output;
}

function memoryFlipTile(tile,val){
    // Jikalau User Menge-flip sebuah Kartu
	if(tile.innerHTML == "" && memoryValues.length < 2){
		tile.style.background = '#FFF';
        tile.innerHTML = val;
        // Kalau ini kartu pertama yang user menebak
		if(memoryValues.length === 0){
			memoryValues.push(val);
            memoryTileIds.push(tile.id);
        // Kalau ini kartu kedua yang user menebak
		} else if(memoryValues.length === 1){
			memoryValues.push(val);
            memoryTileIds.push(tile.id);
            // Kalau tebakan benar
			if(memoryValues[0] === memoryValues[1]){
				tilesFlipped += 2;
				// Clear both arrays
				memoryValues = [];
            	memoryTileIds = [];
				// Check to see if the whole board is cleared
				if(tilesFlipped == memoryArray.length){
					alert("Selamat! Anda telah menebak seluruh puzzle ini, tekan OK untuk me-render board baru...");
					document.getElementById('memoryBoard').innerHTML = "";
					newBoard();
                }
            // Kalau tebakan salah
			} else {
				function closeCards(){
				    // Menutup kembali kedua Kartu
				    var tile_1 = document.getElementById(memoryTileIds[0]);
				    var tile_2 = document.getElementById(memoryTileIds[1]);
				    tile_1.style.background = 'url(tile_bg6.png) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile_bg6.png) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memoryValues = [];
            	    memoryTileIds = [];
				}
				setTimeout(closeCards, 700);
			}
		}
	}
}