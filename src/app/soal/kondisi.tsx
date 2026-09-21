import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function svar() {

  // soal 1
  const nilaiUjian = 80;
  const outputMessage1 = nilaiUjian >= 75
  ? "Selamat, Anda Lulus!"
  : "Maaf, Anda Belum Lulus.";

  // soal 2
  const suhuUdara = 38;
  const outputMessage2 = suhuUdara > 35
  ? "Peringatan: Cuaca Sangat Panas Hari Ini!"
  : "";

  // soal 3
  const isLoggedIn = true;
  const namaUser = "Catur";
  const outputMessage3 = isLoggedIn
  ? `Halo, ${namaUser}!`
  : "Silakan Login Terlebih Dahulu";

  // soal 4
  const totalBelanja = 350000;
  const outputMessage4 = totalBelanja > 500000
  ? "Anda Mendapat Diskon 20%!"
  : totalBelanja >= 200000
  ? "Anda Mendapat Diskon 10%!"
  : "Belanja lebih banyak untuk dapat diskon!";

  // soal 5
  const jamSekarang = 19;
  const outputMessage5 = jamSekarang >= 8 && jamSekarang <= 17
  ? "Toko Buka"
  : "Toko Tutup";

  // soal 6
  const isDarkMode = true;
  const outputMessage6 = isDarkMode
  ? "Mode Tampilan: Dark Mode"
  : "Mode Tampilan: Light Mode";

  // soal 7
  const password = "123";
  const outputMessage7 = password.length < 6 && "Password terlalu pendek (minimal 6 karakter)";

  // soal 8
  const jenisKendaraan = "Mobil";
  const outputMessage8 = jenisKendaraan === "Mobil"
  ? "Tarif Parkir: Rp 5.000 / jam"
  : "Tarif Parkir: Rp 2.000 / jam";

  // soal 9
  const stokBarang = 5;
  const outputMessage9 = stokBarang > 10
  ? "Stok Tersedia"
  : stokBarang >= 1
  ? "Stok Terbatas! Segera Beli"
  : "Stok Habis";

  // soal 10
  const usiaPenonton = 16;
  const outputMessage10 = usiaPenonton < 13
  ? "Kategori: Semua Umur (SU)"
  : usiaPenonton <= 17
  ? "Kategori: Remaja (R)"
  : "Kategori: Dewasa (D)";

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