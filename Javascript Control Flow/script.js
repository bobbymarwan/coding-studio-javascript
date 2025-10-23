let nilai = 60;

if(nilai >= 85) {
    console.log('Kamu memiliki nilai A plus');
} else if (nilai >= 70) {
    console.log('Kamu memiliki nilai A');
} else if (nilai >= 50) {
    console.log('Kamu memiliki nilai B');
} else {
    console.log('Kamu memiliki nilai C');
}


let x = 3;
switch(x) {
    case 0:
        console.log('Senin');
        break;
    case 1:
        console.log('Selasa');
        break;
    case 2:
        console.log('Rabu');
        break;    
    case 3:
        console.log('Kamis');
        break;
    case 4:
        console.log('Jumat');
        break;
    case 5:
        console.log('Sabtu');
        break;
    default:
        console.log('Minggu');
        break;
}

for(let i = 0; i <= 7; i++) {
    console.log('Angka ' + i);
}

const orang = {nama: 'Jojo', age: 16};
for(const key in orang) {
    console.log(key, orang[key]);
}

const fruits = ['Apel', 'Pisang', 'Jambu', 'Belimbing'];
for(const fruit of fruits) {
    console.log(fruit);
}

let i = 1;
while(i <= 5) {
    console.log('While Hello ' + i);
    i++;
}
let j = 1;
do {
    console.log('Do While Hello ' + j);
    j++;
} while(j <= 0);