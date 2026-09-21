import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Svar() {

  //soal 1
  const firstname = "Catur";
  const lastname = "Fitra";
  let isAktif = true;
  const outputMessage1 = `Akun atas nama ${firstname} ${lastname} status aktif:${isAktif}`;
  console.log(outputMessage1);

  //soal 2
  const rawUsername = " admin_smkn10 ";
  const hilangspasi = rawUsername.trim();
  const hitung = hilangspasi.length;
  console.log(hilangspasi);
  console.log(hitung);
  const outputMessage2 = `Username bersih:"${hilangspasi}" Panjang karakter:${hitung}`;

  //soal 3
  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
  const cari = komentar.indexOf("buruk");
  const ambil = komentar.substring(0, 19);
  console.log(cari);
  console.log(ambil);
  const outputMessage3 = `mencari kata "buruk":${cari} dan Kalimat 0 sampai 19:${ambil}`;

  //soal 4
  const string1 = "diskon";
  const string2 = "spesial150";
  const gabung = string1.concat(string2);
  const kapital = gabung.toUpperCase();
  console.log(gabung);
  console.log(kapital);
  const outputMessage4 = `${gabung}, ${kapital}`;

  //soal 5
  let hargastr = "150000.50";
  let stokstr = "25";
  let konversi = parseFloat(hargastr);
  let stok = parseInt(stokstr);
  let perkalian = konversi * stok;
  console.log(konversi);
  console.log(stok);
  console.log(perkalian);
  const outputMessage5 = `hasil konversi: ${konversi} stok: ${stok} total harga: ${perkalian}`;

  //soal 6
  let totalbelanja = 250000;
  let diskonSoal6 = totalbelanja - 50000;
  let pajak = (diskonSoal6 * 10) / 100;
  let totalpembayaran = diskonSoal6 + pajak;
  console.log(diskonSoal6);
  console.log(pajak);
  const outputMessage6 = `jadi total pembayaran menjadi ${totalpembayaran}`;

  //soal 7
  let inputUsia = "17";
  let syaratUsia = 17;
  let lebihdari = parseInt(inputUsia) >= syaratUsia;
  console.log(lebihdari);
  const outputMessage7 = `Strict Equal: Lebih Dari: ${lebihdari} karena berbeda tipe data`;

  //soal 8
  let isPasswordCorrect = true;
  let isEmailVerified = false;
  let masukDashboard = isPasswordCorrect && isEmailVerified;
  console.log(masukDashboard);
  const outputMessage8 = `Password Benar: ${isPasswordCorrect}\nEmail Terverifikasi: ${isEmailVerified}\nMasuk Dashboard: ${masukDashboard}`;

  //soal 9
  let isNilaiTinggi = true;
  let isJuaraLomba = false;
  let layakBeasiswa = isNilaiTinggi || isJuaraLomba;
  console.log(layakBeasiswa);
  const outputMessage9 = `Nilai Tinggi: ${isNilaiTinggi}\nJuara Lomba: ${isJuaraLomba}\nLayak Beasiswa: ${layakBeasiswa}`;

  //soal 10
  let member = true;
  let totalHarga = 200000;
  var diskon10 = 0;
  var totalBayar10 = 0;
  if (member === true) {
    diskon10 = 0.2;
    totalBayar10 = totalHarga - totalHarga * diskon10;
  }
  console.log("Diskon:", diskon10);
  console.log("Total Bayar:", totalBayar10);
  const outputMessage10 = `Diskon: ${diskon10}\nTotal Bayar: ${totalBayar10}`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1</Text>
        <Text>{outputMessage1}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 2</Text>
        <Text>{outputMessage2}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 3</Text>
        <Text>{outputMessage3}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 4</Text>
        <Text>{outputMessage4}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 5</Text>
        <Text>{outputMessage5}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 6</Text>
        <Text>{outputMessage6}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 7</Text>
        <Text>{outputMessage7}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 8</Text>
        <Text>{outputMessage8}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 9</Text>
        <Text>{outputMessage9}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 10</Text>
        <Text>{outputMessage10}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 12,
    backgroundColor: "#F9FAFB",
  },
  box: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111827",
  },
});