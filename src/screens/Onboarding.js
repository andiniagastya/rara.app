import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Txt, Button, Logo } from '../components/UI';
import { colors } from '../theme';

export default function Onboarding({ navigation }) {
  return (
    <Screen scroll={false} contentStyle={{ justifyContent: 'space-between', paddingVertical: 32 }}>
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <Logo size={72} />
        <Txt size={15} color={colors.muted} align="center" style={{ marginTop: 10 }}>
          Catat jadwal vaksinmu{'\n'}bersama Vaxtime
        </Txt>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: 220, height: 220, borderRadius: 110, backgroundColor: colors.sky,
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Ionicons name="phone-portrait-outline" size={110} color={colors.navy} />
          <View style={{ position: 'absolute', top: 30, right: 26 }}>
            <Ionicons name="shield-checkmark" size={44} color={colors.green} />
          </View>
          <View style={{ position: 'absolute', bottom: 34, left: 24 }}>
            <Ionicons name="notifications" size={38} color={colors.navy} />
          </View>
        </View>
      </View>

      <Button title="Mulai Sekarang" onPress={() => navigation.navigate('SignIn')} />
    </Screen>
  );
}
