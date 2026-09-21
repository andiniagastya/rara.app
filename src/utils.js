import { Alert, Platform } from 'react-native';

export const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const pad = (n) => String(n).padStart(2, '0');

function build(y, m, d) {
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null;
  return `${y}-${pad(m)}-${pad(d)}`;
}

/** Menerima "17 Oktober 2026", "17/10/2026" atau "2026-10-17" dan mengembalikan "YYYY-MM-DD". */
export function parseDate(input) {
  const s = String(input || '').trim().toLowerCase();
  let m;
  if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) return build(+m[1], +m[2], +m[3]);
  if ((m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/))) return build(+m[3], +m[2], +m[1]);
  if ((m = s.match(/^(\d{1,2})\s+([a-z]{3,})\s+(\d{4})$/))) {
    const idx = BULAN.findIndex((b) => b.toLowerCase().startsWith(m[2].slice(0, 3)));
    if (idx >= 0) return build(+m[3], idx + 1, +m[1]);
  }
  return null;
}

export function parseTime(input) {
  const m = String(input || '').trim().match(/^(\d{1,2})[:.](\d{2})$/);
  if (!m || +m[1] > 23 || +m[2] > 59) return null;
  return `${pad(+m[1])}:${m[2]}`;
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${BULAN[m - 1]} ${y}`;
}

export function todayISO() {
  const t = new Date();
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`;
}

export function daysUntil(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const target = new Date(y, m - 1, d).getTime();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((target - today) / 86400000);
}

export function countdownLabel(iso) {
  const n = daysUntil(iso);
  if (n < 0) return `Terlewat ${Math.abs(n)} hari`;
  if (n === 0) return 'Hari ini';
  if (n === 1) return 'Besok';
  return `${n} hari lagi`;
}

/** Date lokal dari "YYYY-MM-DD" + "HH:MM", dengan pergeseran hari opsional. */
export function dateAt(iso, time = '08:00', dayOffset = 0) {
  const [y, m, d] = iso.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  return new Date(y, m - 1, d + dayOffset, hh, mm, 0);
}

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/* Alert.alert tidak berfungsi di web, jadi dibungkus di sini. */
export function notify(message, title = 'Vaxtime') {
  if (Platform.OS === 'web') window.alert(message);
  else Alert.alert(title, message);
}

export function confirmAction(title, message, onConfirm, confirmText = 'Ya') {
  if (Platform.OS === 'web') {
    if (window.confirm(`${title}\n\n${message}`)) onConfirm();
    return;
  }
  Alert.alert(title, message, [
    { text: 'Batal', style: 'cancel' },
    { text: confirmText, style: 'destructive', onPress: onConfirm },
  ]);
}
