import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Txt, Field, Button, Divider, Logo } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { notify } from '../utils';

export default function SignIn({ navigation }) {
  const { signIn } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    const err = signIn(email, password);
    setError(err || '');
  };

  return (
    <Screen bg={colors.sky} contentStyle={{ padding: 0 }}>
      <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
        <Logo size={56} />
      </View>
      <View
        style={{
          flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28,
          padding: 24, paddingTop: 28,
        }}
      >
        <Txt w="bold" size={20} color={colors.navy} align="center">
          Selamat Datang !
        </Txt>
        <Txt size={13} color={colors.muted} align="center" style={{ marginBottom: 22 }}>
          Masuk untuk melanjutkan
        </Txt>

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
          placeholder="Masukkan password anda"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={submit}
          error={error}
        />

        <Pressable
          onPress={() => notify('Fitur reset password akan tersedia setelah server akun terhubung.')}
          style={{ alignSelf: 'flex-end', marginBottom: 16 }}
        >
          <Txt size={12} color={colors.navy} w="med">
            Lupa Password?
          </Txt>
        </Pressable>

        <Button title="Masuk" onPress={submit} />
        <Divider label="atau" />
        <Button
          title="Masuk dengan Google"
          variant="google"
          icon={<Ionicons name="logo-google" size={18} color="#DB4437" />}
          onPress={() => notify('Login Google belum diaktifkan. Lihat README untuk cara menyambungkannya.')}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Txt size={12} color={colors.muted}>
            Belum punya akun?{' '}
          </Txt>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Txt size={12} w="semi" color={colors.navy}>
              Daftar disini
            </Txt>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
