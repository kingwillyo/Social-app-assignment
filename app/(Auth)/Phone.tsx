import BackButton from "@/components/BackButton";
import { CircleButton } from "@/components/CircleButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { Background } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const Phone = () => {
  const [phone, setPhone] = React.useState("");

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <BackButton />
          <View style={styles.container}>
            <Text style={styles.title}>Lets get you signed up!</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.countryBox}>
                <Text style={styles.flag}>🇬🇧</Text>
                <Text style={styles.countryCode}>+44</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                maxLength={15}
                selectionColor={COLORS.primary}
              />
            </View>
            <Text style={styles.footerText}>
              By entering your number, you’re agreeing to our{" "}
              <Link href={"/(Auth)/Phone"} style={styles.link}>
                Terms &{"\n"} Conditions
              </Link>{" "}
              and{" "}
              <Link href={"/(Auth)/Phone"} style={styles.link}>
                Privacy Policy
              </Link>
            </Text>
            <View style={{ flex: 1 }} />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.fabWrap} pointerEvents="box-none">
          <CircleButton onPress={() => router.push("/(Auth)/Verification")} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Phone;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.textPrimary,
    textAlign: "center",
    lineHeight: 40,
    marginBottom: SPACING.xxl,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: SPACING.l,
    paddingVertical: 8,
    backgroundColor: COLORS.inputCard,
    height: 56,
    borderRadius: 16,
    gap: SPACING.m,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.surfaceLight,
    marginBottom: SPACING.m,
  },
  countryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    height: 40,
    width: "auto",
    padding: 8,
  },
  flag: {
    fontSize: 18,
    marginRight: 4,
  },
  countryCode: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.regular,
    height: "100%",
  },
  footerText: {
    color: COLORS.textPrimary,
    textAlign: "center",
    fontFamily: FONTS.regular,
  },
  link: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
  fabWrap: {
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 100,
  },
});
