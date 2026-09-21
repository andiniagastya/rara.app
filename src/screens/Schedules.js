import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Button, EmptyState, VaccineRow } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { countdownLabel, formatDate } from '../utils';

export default function Schedules({ navigation }) {
  const { schedules } = useApp();
  const upcoming = useMemo(
    () => schedules.filter((s) => !s.done).sort((a, b) => a.date.localeCompare(b.date)),
    [schedules]
  );
  const doneCount = schedules.length - upcoming.length;

  return (
    <Screen scroll={upcoming.length > 0} contentStyle={upcoming.length === 0 ? { flex: 1 } : undefined}>
      <Header
        title="Jadwal Vaksin"
        right={
          <Pressable onPress={() => navigation.navigate('History')} hitSlop={10} accessibilityLabel="Riwayat">
            <Ionicons name="time-outline" size={24} color={colors.navy} />
          </Pressable>
        }
      />

      {upcoming.length === 0 ? (
        <EmptyState
          icon="calendar-outline"
          title="Belum Ada Jadwal"
          text="Tambahkan jadwal vaksin pertamamu agar tidak terlewat."
          action={<Button title="Tambah Jadwal" onPress={() => navigation.navigate('AddSchedule')} />}
        />
      ) : (
        <>
          {upcoming.map((s) => (
            <VaccineRow
              key={s.id}
              item={{ ...s, dateLabel: `${formatDate(s.date)} · ${countdownLabel(s.date)}` }}
              onPress={() => navigation.navigate('ScheduleDetail', { id: s.id })}
            />
          ))}
          <Button title="Tambah Jadwal" onPress={() => navigation.navigate('AddSchedule')} style={{ marginTop: 10 }} />
        </>
      )}

      {doneCount > 0 && (
        <Pressable onPress={() => navigation.navigate('History')} style={{ marginTop: 16, alignItems: 'center' }}>
          <Txt size={12} w="med" color={colors.navy}>
            Lihat riwayat selesai ({doneCount})
          </Txt>
        </Pressable>
      )}
    </Screen>
  );
}
