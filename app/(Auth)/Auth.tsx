// screens/Auth.tsx
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  AppInput,
  CircleButton,
  PrimaryButton,
  ScreenContainer,
} from "../../components/shared";
import { COLORS, FONTS, SPACING } from "../../constants/theme";
import { useUser } from "../../contexts/UserContext";

type AuthStackParamList = {
  Welcome: undefined;
  Phone: undefined;
  OTP: undefined;
  Name: undefined;
};
type PhoneScreenProps = StackScreenProps<AuthStackParamList, "Phone">;

// Welcome Screen
export const WelcomeScreen: React.FC<
  StackScreenProps<AuthStackParamList, "Welcome">
> = ({ navigation }) => (
  <ScreenContainer>
    <View style={styles.centerContainer}>
      <Text style={styles.header}>Welcome to the {'\n'}community 👋</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/images/welcomeimg.png')} />
      </View>
    </View>
    <PrimaryButton
      title="Sign up"
      onPress={() => navigation.navigate("Phone")}
    />
    <Text style={styles.linkText}>Log in</Text>
  </ScreenContainer>
);

// Phone Input
export const PhoneScreen: React.FC<PhoneScreenProps> = ({ navigation }) => {
  const { userData, updateData } = useUser();
  const isValid = userData.phoneNumber.length >= 10; // Simple validation

  return (
    <ScreenContainer>
      <Text style={styles.title}>Let&apos;s get you signed up!</Text>
      <AppInput
        label="Phone Number"
        placeholder="+44 000 000 000"
        value={userData.phoneNumber}
        onChangeText={(t) => updateData("phoneNumber", t)}
        keyboardType="phone-pad"
        autoFocus
      />
      <Text style={styles.disclaimer}>
        By entering your number you agree to our Terms.
      </Text>
      <CircleButton
        onPress={() => navigation.navigate("OTP")}
        disabled={!isValid}
      />
    </ScreenContainer>
  );
};

// OTP
export const OTPScreen: React.FC<
  StackScreenProps<AuthStackParamList, "OTP">
> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Enter the code we just texted you</Text>
      <View style={styles.otpMockContainer}>
        {[...Array(6)].map((_, i) => (
          <View key={i} style={styles.otpDot} />
        ))}
      </View>
      <Text style={styles.linkText}>Didn&apos;t get it? Tap to resend.</Text>
      <CircleButton onPress={() => navigation.navigate("Name")} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  centerContainer: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 40,
    alignContent: 'center',
    justifyContent: 'center',
    width: 300,
    height: 282,
    resizeMode: 'stretch',
  },
  header: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    fontWeight: 700,
    color: COLORS.textPrimary,
    marginTop: SPACING.l,
    marginBottom: 40,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    marginTop: 40,
    marginBottom: 20,
  },
  linkText: {
    color: COLORS.textPrimary,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: 16,
    fontWeight: 700,
    marginTop: SPACING.s,
    marginBottom: SPACING.l,
  },
  disclaimer: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 10,
    fontFamily: FONTS.regular,
  },
  illustrationPlaceholder: {
    height: 200,
    width: "100%",
    backgroundColor: COLORS.surfaceLight,
    marginVertical: 40,
    borderRadius: 16,
  },
  otpMockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    paddingHorizontal: 40,
  },
  otpDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.textSecondary,
  },
});
