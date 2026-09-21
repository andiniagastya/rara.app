// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Link } from 'expo-router';

// export default function MenuIndex() {
//   const menuList = [
//     { title: '1. Soal Variabel', path: '/soal/variabel' },
//     { title: '2. Soal Kondisi', path: '/soal/kondisi' },
//     { title: '3. Soal Looping', path: '/soal/looping' },
//     { title: '4. Soal Array', path: '/soal/array' },
//     { title: '5. Soal Fungsi', path: '/soal/fungsi' },
//     { title: '6. Soal Component', path: '/soal/component' },
//   ];
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Daftar Tugas PPB</Text>
//       <View style={styles.list}>
//         {menuList.map((item, idx) => (
//           <Link key={idx} href={item.path as any} asChild>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>{item.title}</Text>
//             </TouchableOpacity>
//           </Link>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF7F7',
//     padding: 24,
//     justifyContent: 'flex-start',
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//     color: 'rgb(0, 65, 156)',
//   },
//   list: {
//     gap: 14,
//   },
//   button: {
//     backgroundColor: 'rgb(0, 65, 156)',
//     paddingVertical: 15,
//     paddingHorizontal: 18,
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 3,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 15,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });