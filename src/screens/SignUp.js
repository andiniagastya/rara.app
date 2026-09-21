import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Field, Button, Divider, Logo } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { notify } from '../utils';

export default function SignUp({ navigation }) {
  const { signUp } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    const err = signUp({ name, email, password });
    setError(err || '');
  };

  return (
    <Screen>
      <Header title="" onBack={() => navigation.goBack()} />
      <View style={{ alignItems: 'center', marginBottom: 6 }}>
        <Logo size={56} />
      </View>
      <Txt w="bold" size={20} color={colors.navy} align="center" style={{ marginTop: 10 }}>
        Buat Akun Baru
      </Txt>
      <Txt size={13} color={colors.muted} align="center" style={{ marginBottom: 22 }}>
        Isi data diri kamu dengan lengkap
      </Txt>

      <Field label="Nama" icon="person-outline" placeholder="Masukkan nama lengkap anda" value={name} onChangeText={setName} />
      <Field
        label="Email"
        icon="mail-outline"
        placeholder="Masukkan email anda"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Field
        label="Password"
        icon="lock-closed-outline"
        placeholder="Minimal 6 karakter"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onSubmitEditing={submit}
        error={error}
      />

      <Button title="Daftar" onPress={submit} style={{ marginTop: 6 }} />
      <Divider label="atau" />
      <Button
        title="Daftar dengan Google"
        variant="google"
        icon={<Ionicons name="logo-google" size={18} color="#DB4437" />}
        onPress={() => notify('Login Google belum diaktifkan. Lihat README untuk cara menyambungkannya.')}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Txt size={12} color={colors.muted}>
          Sudah punya akun?{' '}
        </Txt>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Txt size={12} w="semi" color={colors.navy}>
            Masuk
          </Txt>
        </Pressable>
      </View>
    </Screen>
  );
}
