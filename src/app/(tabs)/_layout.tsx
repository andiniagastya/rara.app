import { Tabs } from 'expo-router/js-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors, font } from '../../theme';

const ICONS: Record<string, [any, any]> = {
  beranda: ['home', 'home-outline'],
  jadwal: ['calendar', 'calendar-outline'],
  klinik: ['location', 'location-outline'],
  profil: ['person-circle', 'person-circle-outline'],
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.navy,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontFamily: font.med, fontSize: 10 },
        tabBarStyle: {
          backgroundColor: colors.sky, borderTopWidth: 0, height: 62, paddingBottom: 8, paddingTop: 6,
        },
        tabBarIcon: ({ focused, color, size }: any) => (
          <Ionicons name={ICONS[route.name][focused ? 0 : 1]} size={size} color={color} />
        ),
      })}
    >
      <Tabs.Screen name="beranda" options={{ title: 'Beranda' }} />
      <Tabs.Screen name="jadwal" options={{ title: 'Jadwal' }} />
      <Tabs.Screen name="klinik" options={{ title: 'Klinik' }} />
      <Tabs.Screen name="profil" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
