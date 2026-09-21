import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { View } from "react-native";
import { Button, Card, Field, Header, Screen, Txt } from "../components/UI";
import { CLINICS } from "../data/clinics";
import { colors } from "../theme";

export function Rating({ c }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons name="star" size={13} color={colors.star} />
      <Txt size={12} color={colors.muted} style={{ marginLeft: 4 }}>
        {c.rating} ({c.reviews})
      </Txt>
    </View>
  );
}

export function ClinicThumb({ height = 84, width }) {
  return (
    <View
      style={{
        width,
        height,
        borderRadius: 10,
        backgroundColor: colors.sky,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="business" size={height * 0.45} color={colors.navy} />
    </View>
  );
}

export default function Clinics({ navigation }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return CLINICS;
    return CLINICS.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        c.address.toLowerCase().includes(s) ||
        c.vaccines.some((v) => v.toLowerCase().includes(s)),
    );
  }, [q]);

  return (
    <Screen>
      <Header title="Klinik Terdekat" />
      <Field
        icon="search"
        placeholder="Cari klinik atau vaksin…"
        value={q}
        onChangeText={setQ}
      />

      {list.length === 0 && (
        <Txt
          size={13}
          color={colors.muted}
          align="center"
          style={{ marginTop: 20 }}
        >
          Tidak ada klinik yang cocok dengan “{q}”.
        </Txt>
      )}

      {list.map((c) => (
        <Card key={c.id} style={{ marginBottom: 12, flexDirection: "row" }}>
          <ClinicThumb width={84} height={110} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Txt w="semi" size={14} color={colors.navy} numberOfLines={1}>
              {c.name}
            </Txt>
            <Rating c={c} />
            <Txt
              size={11}
              color={colors.muted}
              numberOfLines={2}
              style={{ marginTop: 2 }}
            >
              {c.address}
            </Txt>
            <View style={{ flexDirection: "row", marginTop: 8, gap: 8 }}>
              <Button
                small
                title="Detail"
                onPress={() =>
                  navigation.navigate("ClinicDetail", { id: c.id })
                }
              />
            </View>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
