import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Txt, Card, VaccineRow } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { countdownLabel, formatDate } from '../utils';

export default function Home({ navigation }) {
  const { user, schedules, reminders } = useApp();

  const upcoming = useMemo(
    () => schedules.filter((s) => !s.done).sort((a, b) => a.date.localeCompare(b.date)),
    [schedules]
  );
  const next = upcoming[0];
  const firstName = user.name.split(' ')[0];

  return (
    <Screen>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <Txt w="bold" size={20} color={colors.navy}>
          Halo, {firstName}!
        </Txt>
        <Pressable onPress={() => navigation.navigate('Reminders')} hitSlop={10} accessibilityLabel="Pengingat">
          <Ionicons name="notifications" size={24} color={colors.navy} />
          {reminders.length > 0 && (
            <View
              style={{
                position: 'absolute', top: -2, right: -2, width: 10, height: 10,
                borderRadius: 5, backgroundColor: colors.red, borderWidth: 1.5, borderColor: '#fff',
              }}
            />
          )}
        </Pressable>
      </View>
      <Txt size={12} color={colors.muted} style={{ marginBottom: 18 }}>
        Tetap ingat jadwal vaksinmu dan jaga kesehatanmu bersama Vaxtime.
      </Txt>

      <Card style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <View
          style={{
            width: 44, height: 44, borderRadius: 22, backgroundColor: colors.sky,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Ionicons name="person" size={22} color={colors.navy} />
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Txt w="semi" size={14} color={colors.navy}>
            {user.name}
          </Txt>
          <Txt size={12} color={colors.muted}>
            {user.age ? `${user.age} tahun` : 'Lengkapi profilmu'}
          </Txt>
        </View>
        <Pressable onPress={() => navigation.navigate('EditProfile')} hitSlop={10}>
          <Ionicons name="chevron-forward" size={18} color={colors.muted} />
        </Pressable>
      </Card>

      <Card
        onPress={() => (next ? navigation.navigate('ScheduleDetail', { id: next.id }) : navigation.navigate('AddSchedule'))}
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}
      >
        <View
          style={{
            width: 44, height: 44, borderRadius: 10, backgroundColor: colors.sky,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Ionicons name="calendar" size={22} color={colors.navy} />
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Txt size={11} color={colors.muted}>
            Vaksin berikutnya
          </Txt>
          {next ? (
            <>
              <Txt w="semi" size={14} color={colors.navy}>
                {next.vaccine}
              </Txt>
              <Txt size={12} color={colors.muted}>
                {formatDate(next.date)} · {countdownLabel(next.date)}
              </Txt>
            </>
          ) : (
            <Txt w="semi" size={13} color={colors.navy}>
              Belum ada jadwal. Tambahkan sekarang
            </Txt>
          )}
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.muted} />
      </Card>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Txt w="bold" size={16} color={colors.navy}>
          Vaksin Mendatang
        </Txt>
        <Pressable onPress={() => navigation.navigate('Jadwal')}>
          <Txt size={12} w="med" color={colors.navy}>
            Lihat semua
          </Txt>
        </Pressable>
      </View>

      {upcoming.length === 0 ? (
        <Txt size={13} color={colors.muted}>
          Belum ada vaksin yang dijadwalkan.
        </Txt>
      ) : (
        upcoming.slice(0, 3).map((s) => (
          <VaccineRow
            key={s.id}
            item={{ ...s, dateLabel: formatDate(s.date) }}
            onPress={() => navigation.navigate('ScheduleDetail', { id: s.id })}
          />
        ))
      )}
    </Screen>
  );
}
