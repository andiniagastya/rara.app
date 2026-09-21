import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cancelNotif, scheduleAt } from './notifications';
import { dateAt, uid } from './utils';

const KEY = 'vaxtime:v1';
const EMPTY = { accounts: [], session: null, data: {} };

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

const norm = (e) => String(e || '').trim().toLowerCase();

export function AppProvider({ children }) {
  const [db, setDb] = useState(EMPTY);
  const [ready, setReady] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        if (raw) setDb({ ...EMPTY, ...JSON.parse(raw) });
      } catch {}
      loaded.current = true;
      setReady(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    AsyncStorage.setItem(KEY, JSON.stringify(db)).catch(() => {});
  }, [db]);

  const user = db.accounts.find((a) => a.email === db.session) || null;
  const mine = (user && db.data[user.email]) || { schedules: [], reminders: [] };

  const patchMine = (fn) =>
    setDb((cur) => {
      const email = cur.session;
      if (!email) return cur;
      const prev = cur.data[email] || { schedules: [], reminders: [] };
      return { ...cur, data: { ...cur.data, [email]: fn(prev) } };
    });

  const actions = useMemo(
    () => ({
      signUp({ name, email, password }) {
        const e = norm(email);
        if (!name.trim() || !e || !password) return 'Lengkapi semua data terlebih dahulu.';
        if (!/^\S+@\S+\.\S+$/.test(e)) return 'Format email belum benar.';
        if (password.length < 6) return 'Password minimal 6 karakter.';
        if (db.accounts.some((a) => a.email === e)) return 'Email ini sudah terdaftar. Silakan masuk.';
        const account = { email: e, password, name: name.trim(), phone: '', age: '' };
        setDb((cur) => ({ ...cur, accounts: [...cur.accounts, account], session: e }));
        return null;
      },
      signIn(email, password) {
        const e = norm(email);
        if (!e || !password) return 'Isi email dan password kamu.';
        const acc = db.accounts.find((a) => a.email === e);
        if (!acc || acc.password !== password) return 'Email atau password salah.';
        setDb((cur) => ({ ...cur, session: e }));
        return null;
      },
      signOut() {
        setDb((cur) => ({ ...cur, session: null }));
      },
      updateProfile(patch) {
        setDb((cur) => ({
          ...cur,
          accounts: cur.accounts.map((a) => (a.email === cur.session ? { ...a, ...patch } : a)),
        }));
      },

      async addSchedule({ vaccine, date, location, note }) {
        // Pengingat otomatis H-1 pukul 08.00
        const notifId = await scheduleAt(
          'Vaksin besok',
          `${vaccine}${location ? ' di ' + location : ''}. ${note || ''}`.trim(),
          dateAt(date, '08:00', -1)
        );
        const item = { id: uid(), vaccine, date, location, note, done: false, notifId };
        patchMine((m) => ({ ...m, schedules: [...m.schedules, item] }));
        return item.id;
      },
      async deleteSchedule(id) {
        const s = mine.schedules.find((x) => x.id === id);
        if (s) await cancelNotif(s.notifId);
        patchMine((m) => ({ ...m, schedules: m.schedules.filter((x) => x.id !== id) }));
      },
      async markDone(id) {
        const s = mine.schedules.find((x) => x.id === id);
        if (s) await cancelNotif(s.notifId);
        patchMine((m) => ({
          ...m,
          schedules: m.schedules.map((x) =>
            x.id === id ? { ...x, done: true, notifId: null, doneAt: new Date().toISOString() } : x
          ),
        }));
      },

      async addReminder({ vaccine, date, time, note }) {
        const notifId = await scheduleAt('Waktunya vaksin', `${vaccine}. ${note || ''}`.trim(), dateAt(date, time));
        const item = { id: uid(), vaccine, date, time, note, notifId };
        patchMine((m) => ({ ...m, reminders: [...m.reminders, item] }));
      },
      async deleteReminder(id) {
        const r = mine.reminders.find((x) => x.id === id);
        if (r) await cancelNotif(r.notifId);
        patchMine((m) => ({ ...m, reminders: m.reminders.filter((x) => x.id !== id) }));
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [db, mine]
  );

  const value = { ready, user, schedules: mine.schedules, reminders: mine.reminders, ...actions };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
