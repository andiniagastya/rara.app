import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Svar() {

  //soal 1
  for (let i = 1; i <= 10; i++) {
  console.log(i);
  }

  //soal 2
  for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
  console.log(i);
  }
  }

  //soal 3
  for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
  console.log(i);
  }
  }

  //soal 4
  let array1 = [1, 2, 3, 4, 5, 6];
  console.log(array1[5]);

  //soal 5
  let array2 = [5, 2, 4, 1, 3, 5];
  array2.sort();
  console.log(array2);

  //soal 6
  let array3 = [
  "selamat",
  "kalian",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for"
  ];
  for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
  }

  //soal 7
  let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 === 0) {
  console.log(array4[i]);
  }
  }

  //soal 8
  let kalimat = [
  "saya",
  "sangat",
  "senang",
  "belajar",
  "javascript"
  ];
  console.log(kalimat.join(" "));

  //soal 9
  var sayuran = [];
  sayuran.push("Kangkung");
  sayuran.push("Bayam");
  sayuran.push("Buncis");
  sayuran.push("Kubis");
  sayuran.push("Timun");
  sayuran.push("Seledri");
  sayuran.push("Tauge");
  console.log(sayuran);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Soal 1</Text>
        <Text>Looping angka 1 sampai 10</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 2</Text>
        <Text>Angka ganjil: 1, 3, 5, 7, 9</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 3</Text>
        <Text>Angka genap: 2, 4, 6, 8, 10</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 4</Text>
        <Text>Array index ke-5: 6</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 5</Text>
        <Text>[1, 2, 3, 4, 5, 5]</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 6</Text>
        <Text>selamat{"\n"}kalian{"\n"}melakukan{"\n"}perulangan{"\n"}array{"\n"}dengan{"\n"}for</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 7</Text>
        <Text>2, 4, 6, 8, 10</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 8</Text>
        <Text>saya sangat senang belajar javascript</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>Soal 9</Text>
        <Text>
          Kangkung{"\n"}
          Bayam{"\n"}
          Buncis{"\n"}
          Kubis{"\n"}
          Timun{"\n"}
          Seledri{"\n"}
          Tauge
        </Text>
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