import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Screen, Header, Field, Button, Txt } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { parseDate, parseTime } from '../utils';

export default function AddReminder({ navigation }) {
  const { addReminder } = useApp();
  const [vaccine, setVaccine] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const save = async () => {
    const e = {};
    const iso = parseDate(date);
    const t = parseTime(time);
    if (!vaccine.trim()) e.vaccine = 'Isi jenis vaksin.';
    if (!iso) e.date = 'Tulis tanggal, misalnya 23 September 2026.';
    if (!t) e.time = 'Tulis jam dengan format 08:00.';
    setErrors(e);
    if (Object.keys(e).length) return;

    setSaving(true);
    await addReminder({ vaccine: vaccine.trim(), date: iso, time: t, note: note.trim() });
    setSaving(false);
    navigation.replace('ReminderSuccess');
  };

  return (
    <Screen>
      <Header title="Tambah Pengingat" onBack={() => navigation.goBack()} />
      <Field label="Jenis Vaksin" placeholder="Masukkan nama vaksin" value={vaccine} onChangeText={setVaccine} error={errors.vaccine} />
      <Field label="Tanggal" placeholder="Masukkan tanggal vaksin" value={date} onChangeText={setDate} error={errors.date} />
      <Field label="Waktu" placeholder="Masukkan waktu pengingat" value={time} onChangeText={setTime} error={errors.time} keyboardType="numbers-and-punctuation" />
      <Field
        label="Catatan (opsional)"
        placeholder="Contoh: Bawa kartu vaksin dan KTP"
        value={note}
        onChangeText={setNote}
        multiline
      />
      {Platform.OS === 'web' && (
        <Txt size={12} color={colors.muted} style={{ marginBottom: 12 }}>
          Notifikasi terjadwal hanya berbunyi di aplikasi HP. Di web, pengingat tetap tersimpan di daftar.
        </Txt>
      )}
      <Button title={saving ? 'Menyimpan…' : 'Simpan'} onPress={save} disabled={saving} />
    </Screen>
  );
}
