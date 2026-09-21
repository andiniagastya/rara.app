import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// soal 1
type UserCardProps = {
  name: string;
  status: string;
  imageSource: any;
};

const UserCard = ({ name, status, imageSource }: UserCardProps) => {
  return (
    <View style={styles.userCard}>
      <Image source={imageSource} style={styles.image} />

      <View>
        <Text style={styles.userName}>{name}</Text>

        <Text>{status}</Text>
      </View>
    </View>
  );
};

// soal 2
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 2: Login Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={() => console.log("Login")}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

// soal 3
const products = Array.from({ length: 50 }, (_, index) => ({
  id: String(index + 1),
  name: `Produk ${index + 1}`,
}));

const ProductList = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 3: Product List</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.name}</Text>
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

// soal 4
const LearningPage = () => {
  const categories = ["HTML", "CSS", "JavaScript", "React"];

  const articles = [
    "Pengenalan HTML",
    "Dasar CSS",
    "Belajar JavaScript",
    "Pengenalan React",
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 4: Learning Page</Text>

      <ScrollView horizontal>
        {categories.map((category) => (
          <View key={category} style={styles.category}>
            <Text>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView style={styles.articleList}>
        {articles.map((article) => (
          <Text key={article} style={styles.listItem}>
            {article}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

// soal 5
type MyButtonProps = {
  title: string;
  onPress: () => void;
  variant: "primary" | "success" | "danger";
};

const MyButton = ({ title, onPress, variant }: MyButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "primary" && styles.primary,
        variant === "success" && styles.success,
        variant === "danger" && styles.danger,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

// soal 6
const FetchData = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 6: Fetch Data</Text>

      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </Pressable>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <ActivityIndicator size="large" />

            <Text style={styles.modalText}>Memuat data...</Text>

            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// soal 7
type CustomImageProps = {
  imageUrl: string;
};

const CustomImage = ({ imageUrl }: CustomImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator size="large" />}

      <Image
        source={{ uri: imageUrl }}
        style={styles.customImage}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

// soal 8
const GradeList = () => {
  const nilai = [
    {
      title: "Kejuruan",
      data: ["Pemrograman: 90", "Basis Data: 88"],
    },
    {
      title: "Umum",
      data: ["Bahasa Indonesia: 85", "Matematika: 87"],
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 8: Nilai Siswa</Text>

      <SectionList
        sections={nilai}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        scrollEnabled={false}
      />
    </View>
  );
};

// soal 9
const CategoryChoice = () => {
  const categories = ["Light Mode", "Dark Mode", "System Default"];

  const [selectedCategory, setSelectedCategory] = useState("Dark Mode");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 9: Pilihan Kategori Kustom</Text>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={
                selectedCategory === category
                  ? styles.activeText
                  : styles.categoryText
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// soal 10
const PrivacyAgreement = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Soal 10: Privacy Agreement</Text>

      <View style={styles.switchRow}>
        <Switch value={agreed} onValueChange={setAgreed} />

        <Text style={styles.privacyText}>
          Saya menyetujui kebijakan privasi
        </Text>
      </View>

      <Pressable
        disabled={!agreed}
        style={[styles.button, !agreed && styles.disabledButton]}
        onPress={() => console.log("Submit")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

// ==================== KOMPONEN UTAMA ====================
export default function ComponentSoal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* SOAL 1 */}
      <View style={styles.card}>
        <Text style={styles.title}>Soal 1: User Card</Text>

        <UserCard
          name="Alisa, Aura, Reva, Zahira"
          status="Aktif"
          imageSource={require("./2.jpg")}
        />

        <UserCard
          name="Aura, Kela"
          status="Alumni"
          imageSource={require("./3.jpg")}
        />
      </View>

      {/* SOAL 2 */}
      <LoginForm />

      {/* SOAL 3 */}
      <ProductList />

      {/* SOAL 4 */}
      <LearningPage />

      {/* SOAL 5 */}
      <View style={styles.card}>
        <Text style={styles.title}>Soal 5: My Button</Text>

        <MyButton
          title="Primary"
          variant="primary"
          onPress={() => console.log("Primary")}
        />

        <MyButton
          title="Success"
          variant="success"
          onPress={() => console.log("Success")}
        />

        <MyButton
          title="Danger"
          variant="danger"
          onPress={() => console.log("Danger")}
        />
      </View>

      {/* SOAL 6 */}
      <FetchData />

      {/* SOAL 7 */}
      <View style={styles.card}>
        <Text style={styles.title}>Soal 7: Custom Image</Text>

        <CustomImage imageUrl="https://picsum.photos/300/200" />
      </View>

      {/* SOAL 8 */}
      <GradeList />

      {/* SOAL 9 */}
      <CategoryChoice />

      {/* SOAL 10 */}
      <PrivacyAgreement />
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

  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },

  userName: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#476BAD",
    alignItems: "center",
    marginTop: 8,
  },

  primary: {
    backgroundColor: "#476BAD",
  },

  success: {
    backgroundColor: "#4CAF50",
  },

  danger: {
    backgroundColor: "#E53935",
  },

  disabledButton: {
    backgroundColor: "#9CA3AF",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  listItem: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  category: {
    padding: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
  },

  articleList: {
    marginTop: 10,
    height: 100,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  modalBox: {
    width: 250,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  modalText: {
    marginTop: 10,
  },

  imageContainer: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  customImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    position: "absolute",
  },

  categoryContainer: {
    gap: 10,
  },

  categoryButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: "#F0F1F5",
    alignItems: "center",
  },

  categoryActive: {
    backgroundColor: "#2196F3",
  },

  categoryText: {
    color: "#111827",
  },

  activeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  privacyText: {
    marginLeft: 8,
    flex: 1,
  },
});
