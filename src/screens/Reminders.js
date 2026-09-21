import React, { useMemo } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Card, Button, EmptyState } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { confirmAction, formatDate } from '../utils';

export default function Reminders({ navigation }) {
  const { reminders, deleteReminder } = useApp();
  const sorted = useMemo(
    () => [...reminders].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
    [reminders]
  );

  return (
    <Screen scroll={sorted.length > 0} contentStyle={sorted.length === 0 ? { flex: 1 } : undefined}>
      <Header title="Pengingat" onBack={() => navigation.goBack()} />

      {sorted.length === 0 ? (
        <EmptyState
          icon="notifications-outline"
          title="Belum Ada Pengingat"
          text="Yuk, tambahkan pengingat vaksin kamu!"
          action={<Button title="Tambah Pengingat" onPress={() => navigation.navigate('AddReminder')} />}
        />
      ) : (
        <>
          {sorted.map((r) => (
            <Card key={r.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <View
                style={{
                  width: 42, height: 42, borderRadius: 21, backgroundColor: colors.sky,
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Ionicons name="alarm" size={22} color={colors.navy} />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Txt w="semi" size={14} color={colors.navy}>
                  {r.vaccine}
                </Txt>
                <Txt size={12} color={colors.muted}>
                  {formatDate(r.date)} · {r.time}
                </Txt>
                {r.note ? (
                  <Txt size={12} color={colors.muted} numberOfLines={1}>
                    {r.note}
                  </Txt>
                ) : null}
              </View>
              <Pressable
                hitSlop={10}
                accessibilityLabel="Hapus pengingat"
                onPress={() =>
                  confirmAction('Hapus pengingat?', `Pengingat ${r.vaccine} akan dihapus.`, () => deleteReminder(r.id), 'Hapus')
                }
              >
                <Ionicons name="trash-outline" size={20} color={colors.red} />
              </Pressable>
            </Card>
          ))}
          <Button title="Tambah Pengingat" onPress={() => navigation.navigate('AddReminder')} style={{ marginTop: 10 }} />
        </>
      )}
    </Screen>
  );
}
