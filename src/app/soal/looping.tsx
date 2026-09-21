import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Svar() {

  //soal 1
  let hasilTiket = "";
  for (let i = 1; i <= 8; i++) {
  console.log("Tiket antrean nomor: " + i);
  hasilTiket += "Tiket antrean nomor: " + i + "\n";
  }
  const outputMessage1 = hasilTiket;

  //soal 2
  let countdown = "";
  for (let i = 5; i >= 1; i--) {
  console.log(i);
  countdown += i + "\n";
  }
  console.log("Roket Meluncur!");
  countdown += "Roket Meluncur!";
  const outputMessage2 = countdown;

  //soal 3
  let jumlah = 0;
  let hasilJumlah = "";
  for (let deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log("Jumlah total saat ini: " + jumlah);
  hasilJumlah += "Jumlah total saat ini: " + jumlah + "\n";
  }
  const outputMessage3 = hasilJumlah;

  //soal 4
  let hasilMeja = "";
  for (let deret = 2; deret < 10; deret += 2) {
  console.log("Nomor meja VIP: " + deret);
  hasilMeja += "Nomor meja VIP: " + deret + "\n";
  }
  const outputMessage4 = hasilMeja;

  //soal 5
  let hasilSuhu = "";
  for (let i = 0; i <= 6; i++) {
  if (i === 3) {
  console.log("Peringatan: Suhu Mesin Stabil!");
  hasilSuhu += "Peringatan: Suhu Mesin Stabil!\n";
  } else {
  console.log(i);
  hasilSuhu += i + "\n";
    }
  }
  const outputMessage5 = hasilSuhu;

  //soal 6
  let flag = 1;
  let hasilBank = "";
  while (flag < 10) {
  console.log("Memanggil nasabah antrean ke-" + flag);
  hasilBank += "Memanggil nasabah antrean ke-" + flag + "\n";
  flag++;
  }
  const outputMessage6 = hasilBank;

  //soal 7
  let deretTabungan = 4;
  let jumlahTabungan = 0;
  let hasilTabungan = "";
  while (deretTabungan > 0) {
  jumlahTabungan += deretTabungan;
  deretTabungan--;
  console.log("Jumlah tabungan saat ini: " + jumlahTabungan);
  hasilTabungan += "Jumlah tabungan saat ini: " + jumlahTabungan + "\n";
  }
  const outputMessage7 = hasilTabungan;

  //soal 8
  let posisi = 0;
  let hasilSensor = "";
  while (posisi < 5) {
  if (posisi === 3) {
  console.log("Awas Halangan Dekat!");
  hasilSensor += "Awas Halangan Dekat!\n";
  } else {
  console.log(posisi);
  hasilSensor += posisi + "\n";
    }
  posisi++;
  }
  const outputMessage8 = hasilSensor;

  //soal 9
  let flagAbsensi = 1;
  let hasilAbsensi = "";
  while (flagAbsensi < 10) {
  console.log("Iterasi ke-" + flagAbsensi);
  hasilAbsensi += "Iterasi ke-" + flagAbsensi + "\n";
  flagAbsensi++;
  }
  const outputMessage9 = hasilAbsensi;

  //soal 10
  let hasilKupon = "";
  for (let nomor = 1; nomor <= 10; nomor++) {
  if (nomor % 2 === 0) {
  console.log(nomor + " - Kupon Genap");
  hasilKupon += nomor + " - Kupon Genap\n";
  } else {
  console.log(nomor + " - Kupon Ganjil");
  hasilKupon += nomor + " - Kupon Ganjil\n";
    }
  }
  const outputMessage10 = hasilKupon;

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