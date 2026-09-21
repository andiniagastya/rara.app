import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Card, Button } from '../components/UI';
import { useApp } from '../store';
import { colors } from '../theme';
import { confirmAction, notify } from '../utils';

function MenuItem({ icon, title, sub, onPress, last }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row', alignItems: 'center', paddingVertical: 12,
        borderBottomWidth: last ? 0 : 1, borderBottomColor: colors.border,
      }}
    >
      <Ionicons name={icon} size={22} color={colors.navy} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Txt w="semi" size={13} color={colors.navy}>
          {title}
        </Txt>
        <Txt size={11} color={colors.muted}>
          {sub}
        </Txt>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Pressable>
  );
}

export default function Profile({ navigation }) {
  const { user, signOut } = useApp();

  return (
    <Screen>
      <Header title="Profile" />
      <View style={{ alignItems: 'center', marginBottom: 22 }}>
        <Ionicons name="person-circle-outline" size={84} color={colors.text} />
        <Txt w="bold" size={16} color={colors.navy}>
          {user.name}
        </Txt>
        <Txt size={12} color={colors.muted}>
          {user.email}
        </Txt>
        {user.phone ? (
          <Txt size={12} color={colors.muted}>
            {user.phone}
          </Txt>
        ) : null}
      </View>

      <Card style={{ paddingVertical: 4 }}>
        <MenuItem icon="create-outline" title="Edit Profil" sub="Ubah data diri kamu" onPress={() => navigation.navigate('EditProfile')} />
        <MenuItem
          icon="information-circle-outline"
          title="Tentang Aplikasi"
          sub="Versi dan informasi"
          onPress={() => notify('Vaxtime versi 1.0.0\nPengingat jadwal vaksin untuk kamu dan keluarga.')}
        />
        <MenuItem
          icon="help-circle-outline"
          title="Bantuan & Dukungan"
          sub="Hubungi kami"
          last
          onPress={() => notify('Kirim pertanyaanmu ke support@vaxtime.app')}
        />
      </Card>

      <View
        style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 16, padding: 12,
          borderRadius: 12, backgroundColor: colors.sky,
        }}
      >
        <Ionicons name="shield-checkmark" size={26} color={colors.navy} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Txt w="semi" size={12} color={colors.navy}>
            Data terlindungi
          </Txt>
          <Txt size={11} color={colors.muted}>
            Jadwal dan profilmu tersimpan di perangkat ini.
          </Txt>
        </View>
      </View>

      <Button
        title="Keluar"
        variant="danger"
        icon={<Ionicons name="log-out-outline" size={18} color={colors.red} />}
        style={{ marginTop: 22 }}
        onPress={() => confirmAction('Keluar dari akun?', 'Kamu bisa masuk lagi kapan saja.', signOut, 'Keluar')}
      />
    </Screen>
  );
}
