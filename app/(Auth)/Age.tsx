import { AppInput } from "@/components/AppInput";
import BackButton from "@/components/BackButton";
import { CircleButton } from "@/components/CircleButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { useUser } from "@/contexts/UserContext";
import { Background } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const Age = () => {
  const { userData, updateData } = useUser();

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <BackButton />
          <View style={styles.container}>
            <Text style={styles.title}>What&apos;s your age ?</Text>
            <AppInput
              placeholder="Age"
              value={userData.age}
              onChangeText={(text) => updateData("age", text)}
              keyboardType="numeric"
            />
            <Text style={styles.infoText}>
              This is to personalize your experience and will not be visible on
              your profile.
            </Text>
            <View style={{ flex: 1 }} />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.fabWrap} pointerEvents="box-none">
          <CircleButton onPress={() => router.push("/(Auth)/AddPhoto")} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Age;

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
  infoText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    fontFamily: FONTS.regular,
    marginTop: SPACING.m,
  },
  fabWrap: {
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 100,
  },
});
