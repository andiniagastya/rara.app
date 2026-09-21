import { Stack } from 'expo-router';
import { ActivityIndicator, Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { AppProvider, useApp } from '../store';
import { colors } from '../theme';

function Loader() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={colors.navy} />
    </View>
  );
}

function RootStack() {
  const { ready, user } = useApp();
  if (!ready) return <Loader />;

  const stack = (
    <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="index" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack.Protected>

      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="add-schedule" />
        <Stack.Screen name="schedule/[id]" />
        <Stack.Screen name="history" />
        <Stack.Screen name="reminders" />
        <Stack.Screen name="add-reminder" />
        <Stack.Screen name="reminder-success" />
        <Stack.Screen name="clinic/[id]" />
        <Stack.Screen name="edit-profile" />
      </Stack.Protected>
    </Stack>
  );

  if (Platform.OS !== 'web') return stack;
  return (
    <View style={{ flex: 1, backgroundColor: colors.page, alignItems: 'center' }}>
      <View
        style={{
          flex: 1, width: '100%', maxWidth: 480, backgroundColor: colors.bg,
          borderLeftWidth: 1, borderRightWidth: 1, borderColor: colors.border,
        }}
      >
        {stack}
      </View>
    </View>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!loaded) return <Loader />;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppProvider>
        <RootStack />
      </AppProvider>
    </SafeAreaProvider>
  );
}