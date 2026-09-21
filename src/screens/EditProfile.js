import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Field, Button } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { notify } from '../utils';

export default function EditProfile({ navigation }) {
  const { user, updateProfile } = useApp();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone || '');
  const [age, setAge] = useState(String(user.age || ''));
  const [errors, setErrors] = useState({});

  const save = () => {
    const e = {};
    if (!name.trim()) e.name = 'Nama tidak boleh kosong.';
    if (phone && !/^[0-9+\-\s]{8,16}$/.test(phone)) e.phone = 'Nomor telepon belum benar.';
    if (age && (!/^\d{1,3}$/.test(age) || +age > 120)) e.age = 'Usia harus berupa angka.';
    setErrors(e);
    if (Object.keys(e).length) return;
    updateProfile({ name: name.trim(), phone: phone.trim(), age: age.trim() });
    notify('Data profil berhasil disimpan.');
    navigation.goBack();
  };

  return (
    <Screen>
      <Header title="Edit Profile" onBack={() => navigation.goBack()} />
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Ionicons name="person-circle-outline" size={84} color={colors.text} />
      </View>
      <Field label="Nama Lengkap" value={name} onChangeText={setName} error={errors.name} />
      <Field label="Email" value={user.email} editable={false} style={{ opacity: 0.6 }} />
      <Field label="No. Telp" value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="08123456789" error={errors.phone} />
      <Field label="Usia" value={age} onChangeText={setAge} keyboardType="number-pad" placeholder="Dalam tahun" error={errors.age} />
      <Button title="Simpan Data" onPress={save} style={{ marginTop: 8 }} />
    </Screen>
  );
}
