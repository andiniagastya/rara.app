import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Card, Button } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { confirmAction, countdownLabel, formatDate } from '../utils';

function Row({ label, value }) {
  return (
    <View style={{ paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.border }}>
      <Txt size={11} color={colors.muted}>
        {label}
      </Txt>
      <Txt w="semi" size={13} color={colors.navy}>
        {value || '-'}
      </Txt>
    </View>
  );
}

export default function ScheduleDetail({ route, navigation }) {
  const { schedules, deleteSchedule, markDone } = useApp();
  const item = schedules.find((s) => s.id === route.params.id);

  if (!item) {
    return (
      <Screen>
        <Header title="Detail Jadwal" onBack={() => navigation.goBack()} />
        <Txt color={colors.muted} align="center">
          Jadwal tidak ditemukan.
        </Txt>
      </Screen>
    );
  }

  const remove = () =>
    confirmAction('Hapus jadwal?', `Jadwal ${item.vaccine} akan dihapus.`, async () => {
      await deleteSchedule(item.id);
      navigation.goBack();
    }, 'Hapus');

  const finish = () =>
    confirmAction('Tandai sudah divaksinasi?', `${item.vaccine} akan dipindahkan ke riwayat.`, async () => {
      await markDone(item.id);
      navigation.goBack();
    }, 'Tandai');

  return (
    <Screen>
      <Header title="Detail Jadwal" onBack={() => navigation.goBack()} />
      <Card style={{ padding: 18 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <View
            style={{
              width: 56, height: 56, borderRadius: 14, backgroundColor: colors.sky,
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Ionicons name={item.done ? 'checkmark-circle' : 'calendar'} size={30} color={item.done ? colors.green : colors.navy} />
          </View>
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Txt w="bold" size={20} color={colors.navy}>
              {item.vaccine}
            </Txt>
            {!item.done && (
              <Txt size={12} color={colors.muted}>
                {countdownLabel(item.date)}
              </Txt>
            )}
          </View>
        </View>
        <Row label="Tanggal Vaksin" value={formatDate(item.date)} />
        <Row label="Lokasi Vaksin" value={item.location} />
        <Row label="Catatan" value={item.note} />
      </Card>

      {!item.done ? (
        <View style={{ marginTop: 22, gap: 12 }}>
          <Button title="Hapus" variant="danger" onPress={remove} />
          <Button title="Tandai Sudah Divaksinasi" variant="green" onPress={finish} />
        </View>
      ) : (
        <View style={{ marginTop: 22 }}>
          <Button title="Hapus dari Riwayat" variant="danger" onPress={remove} />
        </View>
      )}
    </Screen>
  );
}
