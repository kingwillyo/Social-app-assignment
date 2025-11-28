import BackButton from "@/components/BackButton";
import { CircleButton } from "@/components/CircleButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { Background } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const OTP_LENGTH = 6;

const Verification = () => {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  // Allow only numbers and up to OTP_LENGTH digits
  const handleChange = (value: string) => {
    setCode(value.replace(/[^0-9]/g, "").slice(0, OTP_LENGTH));
  };

  // Focus the hidden input
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Background style={styles.background}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <BackButton />
          <View style={styles.container}>
            <Text style={styles.title}>
              Enter the code we just{"\n"}texted you
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.otpBox}
              onPress={focusInput}
            >
              <View style={styles.otpDigitsContainer}>
                {[...Array(OTP_LENGTH)].map((_, i) => {
                  const hasValue = !!code[i];
                  return (
                    <View key={i} style={styles.otpDigitBox}>
                      {hasValue ? (
                        <Text style={styles.otpDigitText}>{code[i]}</Text>
                      ) : (
                        <View style={styles.otpDot} />
                      )}
                    </View>
                  );
                })}
              </View>
              {/* Hidden TextInput overlays the digits */}
              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={handleChange}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                style={styles.otpInput}
                maxLength={OTP_LENGTH}
                caretHidden
                returnKeyType="done"
                blurOnSubmit
                accessibilityLabel="OTP code input"
              />
            </TouchableOpacity>
            <Text style={styles.resendText}>
              Didn&apos;t get it ?{" "}
              <Text style={styles.resendLink}>Tap to resend.</Text>
            </Text>
            <View style={{ flex: 1 }} />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.fabWrap} pointerEvents="box-none">
          <CircleButton onPress={() => router.push("/(Auth)/Name")} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Verification;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
  },
  container: {
    marginHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SPACING.xxl,
    lineHeight: 32,
  },
  otpBox: {
    width: "100%",
    borderColor: COLORS.surfaceLight,
    borderWidth: 1,
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: COLORS.inputCard,
    marginBottom: SPACING.m,
    position: "relative",
    overflow: "hidden",
  },
  otpDigitsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 3,
  },
  otpDigitBox: {
    width: 32,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  otpDigitText: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontFamily: FONTS.bold,
    letterSpacing: 2,
    textAlign: "center",
  },
  otpDigitPlaceholder: {
    color: COLORS.textSecondary,
  },
  otpDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.textSecondary,
  },
  otpInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    top: 0,
    left: 0,
  },
  resendText: {
    marginTop: 0,
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    fontFamily: FONTS.regular,
    marginRight: 8,
  },
  resendLink: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  fabWrap: {
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 100,
  },
});
