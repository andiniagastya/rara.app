import React, { useState } from 'react';
import { Screen, Header, Field, Button, Txt } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { formatDate, parseDate, todayISO } from '../utils';

export default function AddSchedule({ navigation, route }) {
  const { addSchedule } = useApp();
  const [vaccine, setVaccine] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState(route.params?.location || '');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const save = async () => {
    const e = {};
    const iso = parseDate(date);
    if (!vaccine.trim()) e.vaccine = 'Isi nama vaksin.';
    if (!iso) e.date = 'Tulis tanggal, misalnya 17 Oktober 2026 atau 17/10/2026.';
    if (!location.trim()) e.location = 'Isi lokasi vaksinasi.';
    setErrors(e);
    if (Object.keys(e).length) return;

    setSaving(true);
    const id = await addSchedule({ vaccine: vaccine.trim(), date: iso, location: location.trim(), note: note.trim() });
    setSaving(false);
    navigation.replace('ScheduleDetail', { id });
  };

  const preview = parseDate(date);

  return (
    <Screen>
      <Header title="Tambah Jadwal" onBack={() => navigation.goBack()} />
      <Field label="Nama Vaksin" placeholder="Masukkan nama vaksin" value={vaccine} onChangeText={setVaccine} error={errors.vaccine} />
      <Field
        label="Tanggal"
        placeholder="Masukkan tanggal vaksin"
        value={date}
        onChangeText={setDate}
        error={errors.date}
        keyboardType="numbers-and-punctuation"
      />
      {preview && preview < todayISO() ? (
        <Txt size={12} color={colors.muted} style={{ marginTop: -8, marginBottom: 12 }}>
          {formatDate(preview)} sudah lewat, jadwal ini tidak akan mendapat notifikasi.
        </Txt>
      ) : null}
      <Field label="Lokasi" placeholder="Masukkan nama klinik" value={location} onChangeText={setLocation} error={errors.location} />
      <Field
        label="Catatan (opsional)"
        placeholder="Contoh: Bawa kartu vaksin dan KTP"
        value={note}
        onChangeText={setNote}
        multiline
      />
      <Button title={saving ? 'Menyimpan…' : 'Simpan Jadwal'} onPress={save} disabled={saving} style={{ marginTop: 8 }} />
    </Screen>
  );
}
