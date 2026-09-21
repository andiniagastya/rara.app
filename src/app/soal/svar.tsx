
// soal 1
// export default function svar(){
// const firstName = "Budi";
// const lastName = "Santoso";
// let isAktif = true;

// const outputMessage = `Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`;

// console.log(outputMessage);

// return (
//   <View>
//   <Text> {outputMessage}</Text>
//   </View>
// );
// }

// soal 2
// export default function svar(){
// const rawUsername = " admin_smkn10 ";
// const username = rawUsername.trim();
// const usernameLength = username.length;

// console.log(`Username baru: ${username}`);
// console.log(`Panjang karakter: ${usernameLength}`);

// return (
//   <View>
//   <Text>Username baru: {username}</Text>
//   <Text>Panjang karakter: {usernameLength}</Text>
//   </View>
// );
// }

// soal 3
// export default function svar(){
// let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";

//const posisiBuruk = komentar.indexOf("buruk");
//const potonganKomentar = komentar.substring(0, 19);

//console.log(`Posisi kata buruk: ${posisiBuruk}`);
//console.log(`Potongan komentar: ${potonganKomentar}`);

//return (
//  <View>
//  <Text>Posisi kata buruk: {posisiBuruk}</Text>
//  <Text>Potongan komentar: {potonganKomentar}</Text>
//  </View>
//);
//}

// soal 4
// export default function svar(){

// const string1 = "diskon";
// const string2 = "spesial50";

// const kodeKupon = string1.concat(string2).toUpperCase();

// console.log(`Kode kupon: ${kodeKupon}`);

//return (
//  <View>
//  <Text>Kode kupon: {kodeKupon}</Text>
//  </View>
//);
//}

// soal 5
// export default function svar(){

// const hargaStr = "150000.50";
// const harga = parseFloat(hargaStr);

// const stokStr = "25";
// const stok = parseInt(stokStr);

// const total = harga * stok;

// console.log(`Total harga: ${total}`);

//return (
//  <View>
//  <Text>Total harga: {total}</Text>
//  </View>
//);
//}

// soal 6
// export default function svar(){
// let totalBelanja = 250000;

// totalBelanja -= 50000;

// const pajak = totalBelanja * 10 / 100;
// totalBelanja += pajak;

// console.log(`Total pembayaran: ${totalBelanja}`);

//return (
//  <View>
//  <Text>Total pembayaran: {totalBelanja}</Text>
//  </View>
//);
//}

// soal 7
// export default function svar() {
// const inputUsia = "17";
// const syaratUsia = 17;

// const hasilStrict = inputUsia === syaratUsia;
// const hasilPerbandingan = inputUsia >= syaratUsia;

// console.log(`Hasil === : ${hasilStrict}`);
// console.log(`Hasil >= : ${hasilPerbandingan}`);

//return (
//  <View>
//  <Text>Hasil === : {String(hasilStrict)}</Text>
//  <Text>Hasil &gt;= : {String(hasilPerbandingan)}</Text>
//  </View>
//);
//}

// soal 8
// export default function svar() {
// const isPasswordCorrect = true;
// const isEmailVerified = true;

// const canAccessDashboard = isPasswordCorrect && isEmailVerified;

// console.log(`Buka Dashboard: ${canAccessDashboard}`);

// uji jika email belum diverifikasi
// const isEmailVerified2 = false;
// const canAccessDashboard2 = isPasswordCorrect && isEmailVerified2;

// console.log(`Jika email belum diverifikasi: ${canAccessDashboard2}`);

//return (
//  <View>
//  <Text>Buka Dashboard: {String(canAccessDashboard)}</Text>
//  <Text>Jika email belum diverifikasi: {String(canAccessDashboard2)}</Text>
//  </View>
//);
//}

// soal 9
// export default function svar() {
// const isNilaiTinggi = true;
// const isJuaraLomba = false;

// const isEligible = isNilaiTinggi || isJuaraLomba;

// console.log(`Status beasiswa: ${isEligible}`);

//return (
//  <View>
//  <Text>Status beasiswa: {String(isEligible)}</Text>
//  </View>
//);
//}

// soal 10
// export default function svar() {
// const member = true;

// if (member === true) {
// let diskon = 0.2;
// var diskonVar = 0.3;

// console.log(`Diskon let di dalam blok: ${diskon}`);
// console.log(`Diskon var di dalam blok: ${diskonVar}`);
//}

// console.log(`Diskon var di luar blok: ${diskonVar}`);

// console.log(diskon);
// Jika dijalankan, akan muncul error:
// ReferenceError: diskon is not defined

//return (
//  <View>
//  <Text>Diskon var di luar blok: {diskonVar}</Text>
//  <Text>Variabel let hanya dapat digunakan di dalam blok if</Text>
//  </View>
//);
//}
