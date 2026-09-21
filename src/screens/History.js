import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Screen, Header, Txt, Card, EmptyState } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { formatDate } from '../utils';

export default function History({ navigation }) {
  const { schedules } = useApp();
  const done = useMemo(
    () => schedules.filter((s) => s.done).sort((a, b) => b.date.localeCompare(a.date)),
    [schedules]
  );

  return (
    <Screen scroll={done.length > 0} contentStyle={done.length === 0 ? { flex: 1 } : undefined}>
      <Header title="Riwayat Selesai" onBack={() => navigation.goBack()} />
      {done.length === 0 ? (
        <EmptyState
          icon="checkmark-done-outline"
          title="Belum Ada Riwayat"
          text="Vaksin yang sudah kamu tandai selesai akan muncul di sini."
        />
      ) : (
        done.map((s) => (
          <Card
            key={s.id}
            onPress={() => navigation.navigate('ScheduleDetail', { id: s.id })}
            style={{ marginBottom: 10 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Txt w="semi" size={14} color={colors.navy}>
                {s.vaccine}
              </Txt>
              <View
                style={{
                  paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6,
                  backgroundColor: colors.greenSoft, borderWidth: 1, borderColor: colors.green,
                }}
              >
                <Txt size={10} w="med" color={colors.green}>
                  Selesai
                </Txt>
              </View>
            </View>
            <Txt size={12} color={colors.muted}>
              {formatDate(s.date)}
            </Txt>
            <Txt size={12} color={colors.muted}>
              {s.location}
            </Txt>
          </Card>
        ))
      )}
    </Screen>
  );
}
