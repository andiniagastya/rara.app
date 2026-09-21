import React from 'react';
import {
  Platform, Pressable, StyleSheet, Text, TextInput, View, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, font, radius } from '../theme';

export function Txt({ w = 'reg', size = 14, color = colors.text, align, style, children, ...rest }) {
  return (
    <Text
      {...rest}
      style={[{ fontFamily: font[w], fontSize: size, color, textAlign: align, lineHeight: size * 1.4 }, style]}
    >
      {children}
    </Text>
  );
}

/** Kerangka layar: safe area + (opsional) scroll + keyboard avoiding. */
export function Screen({ children, scroll = true, style, contentStyle, bg = colors.bg }) {
  const body = scroll ? (
    <ScrollView
      contentContainerStyle={[{ padding: 20, paddingBottom: 32, flexGrow: 1 }, contentStyle]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[{ flex: 1, padding: 20 }, contentStyle]}>{children}</View>
  );
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: bg }, style]} edges={['top']}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {body}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function Header({ title, onBack, right }) {
  return (
    <View style={s.header}>
      <View style={s.headerSide}>
        {onBack ? (
          <Pressable onPress={onBack} hitSlop={12} accessibilityLabel="Kembali">
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </Pressable>
        ) : null}
      </View>
      <Txt w="bold" size={17} color={colors.navy} align="center" style={{ flex: 3 }} numberOfLines={1}>
        {title}
      </Txt>
      <View style={[s.headerSide, { alignItems: 'flex-end' }]}>{right}</View>
    </View>
  );
}

export function Field({ label, icon, error, style, multiline, ...props }) {
  return (
    <View style={[{ marginBottom: 14 }, style]}>
      {label ? (
        <Txt w="med" size={13} color={colors.text} style={{ marginBottom: 6 }}>
          {label}
        </Txt>
      ) : null}
      <View
        style={[
          s.inputWrap,
          multiline && { height: 112, alignItems: 'flex-start' },
          error && { borderColor: colors.red },
        ]}
      >
        {icon ? <Ionicons name={icon} size={18} color={colors.placeholder} style={{ marginRight: 8 }} /> : null}
        <TextInput
          {...props}
          multiline={multiline}
          placeholderTextColor={colors.placeholder}
          style={[
            s.input,
            multiline && { textAlignVertical: 'top', paddingTop: 10, height: '100%' },
            Platform.select({ web: { outlineStyle: 'none' } }),
          ]}
        />
      </View>
      {error ? (
        <Txt size={12} color={colors.red} style={{ marginTop: 4 }}>
          {error}
        </Txt>
      ) : null}
    </View>
  );
}

const VARIANTS = {
  primary: { bg: colors.navy, fg: '#fff', border: colors.navy },
  green: { bg: colors.green, fg: '#fff', border: colors.green },
  danger: { bg: '#fff', fg: colors.red, border: colors.red },
  outline: { bg: '#fff', fg: colors.navy, border: colors.navy },
  google: { bg: '#F1F2F6', fg: colors.text, border: '#E1E3EC' },
};

export function Button({ title, onPress, variant = 'primary', icon, small, style, disabled }) {
  const v = VARIANTS[variant];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        s.btn,
        small && { height: 34, paddingHorizontal: 14 },
        { backgroundColor: v.bg, borderColor: v.border, opacity: disabled ? 0.5 : pressed ? 0.85 : 1 },
        style,
      ]}
    >
      {icon}
      <Txt w="semi" size={small ? 12 : 14} color={v.fg} style={icon ? { marginLeft: 8 } : null}>
        {title}
      </Txt>
    </Pressable>
  );
}

export function Card({ children, style, onPress }) {
  const Comp = onPress ? Pressable : View;
  return (
    <Comp onPress={onPress} style={[s.card, style]}>
      {children}
    </Comp>
  );
}

export function Divider({ label }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
      <View style={s.line} />
      {label ? (
        <Txt size={12} color={colors.muted} style={{ marginHorizontal: 10 }}>
          {label}
        </Txt>
      ) : null}
      <View style={s.line} />
    </View>
  );
}

export function Logo({ size = 64 }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: size, height: size, borderRadius: size * 0.28,
          backgroundColor: colors.sky, alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Ionicons name="calendar" size={size * 0.56} color={colors.navy} />
        <View
          style={{
            position: 'absolute', right: -size * 0.08, bottom: -size * 0.08,
            width: size * 0.42, height: size * 0.42, borderRadius: size * 0.21,
            backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center',
            borderWidth: 2, borderColor: '#fff',
          }}
        >
          <Ionicons name="medkit" size={size * 0.22} color="#fff" />
        </View>
      </View>
      <Txt w="bold" size={size * 0.34} color={colors.navy} style={{ marginTop: 8 }}>
        Vaxtime
      </Txt>
    </View>
  );
}

export function EmptyState({ icon, title, text, action }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 }}>
      <View style={s.emptyIcon}>
        <Ionicons name={icon} size={54} color={colors.navy} />
      </View>
      <Txt w="bold" size={18} color={colors.navy} align="center" style={{ marginTop: 18 }}>
        {title}
      </Txt>
      <Txt size={13} color={colors.muted} align="center" style={{ marginTop: 6, marginBottom: 20 }}>
        {text}
      </Txt>
      {action}
    </View>
  );
}

export function VaccineRow({ item, onPress }) {
  return (
    <Card onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={s.rowIcon}>
        <Ionicons name="calendar" size={22} color={colors.navy} />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Txt w="semi" size={14} color={colors.navy}>
          {item.vaccine}
        </Txt>
        <Txt size={12} color={colors.muted}>
          {item.dateLabel}
        </Txt>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.muted} />
    </Card>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', minHeight: 44, marginBottom: 18 },
  headerSide: { flex: 1 },
  inputWrap: {
    flexDirection: 'row', alignItems: 'center', height: 44, paddingHorizontal: 12,
    borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, backgroundColor: '#fff',
  },
  input: { flex: 1, fontFamily: font.reg, fontSize: 13, color: colors.navy, paddingVertical: 0 },
  btn: {
    height: 44, borderRadius: radius.sm, borderWidth: 1, paddingHorizontal: 18,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff', borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: 14,
  },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  emptyIcon: {
    width: 110, height: 110, borderRadius: 55, backgroundColor: colors.sky,
    alignItems: 'center', justifyContent: 'center',
  },
  rowIcon: {
    width: 42, height: 42, borderRadius: 10, backgroundColor: colors.sky,
    alignItems: 'center', justifyContent: 'center',
  },
});
