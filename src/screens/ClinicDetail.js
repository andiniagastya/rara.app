import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Header, Txt, Card, Button } from '../components/UI';
import { colors } from '../theme';
import { CLINICS } from '../data/clinics';
import { Rating, ClinicThumb, openMaps, callClinic } from './Clinics';

function Info({ icon, label, value }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 14 }}>
      <Ionicons name={icon} size={20} color={colors.navy} style={{ marginTop: 2 }} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Txt w="semi" size={13} color={colors.navy}>
          {label}
        </Txt>
        <Txt size={12} color={colors.muted}>
          {value}
        </Txt>
      </View>
    </View>
  );
}

export default function ClinicDetail({ route, navigation }) {
  const c = CLINICS.find((x) => x.id === route.params.id);
  if (!c) return null;

  return (
    <Screen>
      <Header title="Klinik Terdekat" onBack={() => navigation.goBack()} />
      <Card style={{ padding: 12 }}>
        <ClinicThumb height={150} />
        <Txt w="bold" size={17} color={colors.navy} style={{ marginTop: 12 }}>
          {c.name}
        </Txt>
        <Rating c={c} />

        <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
          <Button small title="Petunjuk Arah" onPress={() => openMaps(c)} />
          <Button small variant="outline" title="Hubungi" onPress={() => callClinic(c)} />
        </View>

        <Info icon="location" label="Alamat" value={c.address} />
        <Info icon="time" label="Jam Buka" value={c.hours} />
        <Info icon="call" label="Kontak" value={c.phone} />
        <Info icon="mail" label="Email" value={c.email} />
        <Info icon="medkit" label="Vaksin Tersedia" value={c.vaccines.join(', ')} />
      </Card>

      <Button
        variant="green"
        title="Buat Jadwal di Sini"
        style={{ marginTop: 18 }}
        onPress={() => navigation.navigate('AddSchedule', { location: c.name })}
      />
    </Screen>
  );
}
