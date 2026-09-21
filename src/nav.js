import React, { useMemo } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

/**
 * Penghubung antara layar Vaxtime (yang memakai navigation.navigate('Nama'))
 * dan Expo Router (yang memakai path file).
 */
const PATHS = {
  Onboarding: '/',
  SignIn: '/sign-in',
  SignUp: '/sign-up',
  Beranda: '/beranda',
  Jadwal: '/jadwal',
  Klinik: '/klinik',
  Profil: '/profil',
  AddSchedule: '/add-schedule',
  History: '/history',
  Reminders: '/reminders',
  AddReminder: '/add-reminder',
  ReminderSuccess: '/reminder-success',
  EditProfile: '/edit-profile',
  ScheduleDetail: (p) => `/schedule/${p.id}`,
  ClinicDetail: (p) => `/clinic/${p.id}`,
};

function toHref(name, params) {
  const target = PATHS[name];
  if (!target) throw new Error(`Rute tidak dikenal: ${name}`);
  if (typeof target === 'function') return target(params || {});
  return params && Object.keys(params).length ? { pathname: target, params } : target;
}

export function withRouter(Screen) {
  function Wrapped() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const navigation = useMemo(
      () => ({
        navigate: (name, p) => router.navigate(toHref(name, p)),
        replace: (name, p) => router.replace(toHref(name, p)),
        goBack: () => (router.canGoBack() ? router.back() : router.replace('/beranda')),
      }),
      [router]
    );
    return <Screen navigation={navigation} route={{ params }} />;
  }
  Wrapped.displayName = `Route(${Screen.name || 'Screen'})`;
  return Wrapped;
}
