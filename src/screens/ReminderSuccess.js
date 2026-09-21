import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Txt, Button } from '../components/UI';
import { colors } from '../theme';

export default function ReminderSuccess({ navigation }) {
  return (
    <Screen scroll={false} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name="checkmark-circle-outline" size={110} color={colors.green} />
      <Txt w="bold" size={20} color={colors.navy} align="center" style={{ marginTop: 14 }}>
        Pengingat Berhasil{'\n'}Ditambahkan
      </Txt>
      <Txt size={13} color={colors.muted} align="center" style={{ marginTop: 8, marginBottom: 24 }}>
        Jangan lupa untuk menjaga{'\n'}kesehatan kamu ya!
      </Txt>
      <View style={{ width: 200 }}>
        <Button title="Lihat Daftar" onPress={() => navigation.replace('Reminders')} />
      </View>
    </Screen>
  );
}
