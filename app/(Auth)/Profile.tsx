import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AppInput,
  CircleButton,
  PrimaryButton,
  ScreenContainer,
} from "../../components/shared";
import { COLORS, FONTS, SPACING } from "../../constants/theme";
import { useUser } from "../../contexts/UserContext";

type ProfileStackParamList = {
  Name: undefined;
  Username: undefined;
  Age: undefined;
  Photo: undefined;
  Topics: undefined;
};
type NameScreenProps = StackScreenProps<ProfileStackParamList, "Name">;

// Name Input
export const NameScreen: React.FC<NameScreenProps> = ({ navigation }) => {
  const { userData, updateData } = useUser();
  const isValid = userData.firstName.length > 0 && userData.lastName.length > 0;

  return (
    <ScreenContainer>
      <Text style={styles.title}>What&apos;s your full name?</Text>
      <View style={{ marginTop: 20 }}>
        <AppInput
          placeholder="First Name"
          value={userData.firstName}
          onChangeText={(t) => updateData("firstName", t)}
        />
        <View style={{ height: SPACING.m }} />
        <AppInput
          placeholder="Last Name"
          value={userData.lastName}
          onChangeText={(t) => updateData("lastName", t)}
        />
      </View>
      <CircleButton
        onPress={() => navigation.navigate("Username")}
        disabled={!isValid}
      />
    </ScreenContainer>
  );
};

// Username
export const UsernameScreen: React.FC<
  StackScreenProps<ProfileStackParamList, "Username">
> = ({ navigation }) => {
  const { userData, updateData } = useUser();
  const isValid = userData.username.length > 3;

  return (
    <ScreenContainer>
      <Text style={styles.title}>Your username</Text>
      <Text style={styles.usernameDisplay}>
        @{userData.username || "jonunflow"}
      </Text>
      <AppInput
        placeholder="Username"
        value={userData.username}
        onChangeText={(t) =>
          updateData("username", t.toLowerCase().replace(/[^a-z0-9]/g, ""))
        } // Clean input
      />
      <CircleButton
        onPress={() => navigation.navigate("Age")}
        disabled={!isValid}
      />
    </ScreenContainer>
  );
};

// Photo
export const PhotoScreen: React.FC<
  StackScreenProps<ProfileStackParamList, "Photo">
> = ({ navigation }) => (
  <ScreenContainer>
    <Text style={styles.title}>Add a profile photo?</Text>
    <View style={styles.centerContainer}>
      <View style={styles.photoPlaceholder}>
        <Text style={{ fontSize: 40 }}>📷</Text>
      </View>
      <Text style={styles.skipText}>Skip for now</Text>
    </View>
    <PrimaryButton title="Next" onPress={() => navigation.navigate("Topics")} />
  </ScreenContainer>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: "white",
    marginTop: 40,
    marginBottom: 20,
  },
  usernameDisplay: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: "white",
    marginVertical: 40,
    textAlign: "center",
  },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  photoPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
    marginTop: SPACING.m,
  },
});
