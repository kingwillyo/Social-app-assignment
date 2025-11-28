import BackButton from "@/components/BackButton";
import { CircleButton } from "@/components/CircleButton";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { useUser } from "@/contexts/UserContext";
import { Background } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useEffect } from "react";
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

const Username = () => {
  const { userData, updateData } = useUser();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingUsername, setEditingUsername] = React.useState("");

  // Generate username from first and last name
  const generateUsername = (first: string, last: string) => {
    const combined = `${first}${last}`.toLowerCase().replace(/\s+/g, "");
    return combined ? `@${combined}` : "";
  };

  // Initialize username from name if not set
  useEffect(() => {
    if (!userData.username && userData.firstName && userData.lastName) {
      const generated = generateUsername(userData.firstName, userData.lastName);
      updateData("username", generated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.firstName, userData.lastName]);

  // Set editing username when entering edit mode
  const handleEditClick = () => {
    setEditingUsername(
      userData.username ||
        generateUsername(userData.firstName, userData.lastName)
    );
    setIsEditing(true);
  };

  // Save username and exit edit mode
  const handleSave = () => {
    updateData("username", editingUsername);
    setIsEditing(false);
  };

  const displayUsername =
    userData.username ||
    generateUsername(userData.firstName, userData.lastName);

  return (
    <Background style={styles.background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <BackButton />
          <View style={styles.container}>
            <Text style={styles.title}>Your username</Text>
            {isEditing ? (
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.usernameInput}
                  placeholder="Username"
                  placeholderTextColor={COLORS.textSecondary}
                  value={editingUsername}
                  onChangeText={setEditingUsername}
                  selectionColor={COLORS.primary}
                  autoFocus
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity onPress={handleSave}>
                  <Text style={styles.saveLink}>Save</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Text style={styles.usernameDisplay}>{displayUsername}</Text>
                <TouchableOpacity onPress={handleEditClick}>
                  <Text style={styles.changeLink}>Change your username</Text>
                </TouchableOpacity>
              </>
            )}
            <View style={{ flex: 1 }} />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.fabWrap} pointerEvents="box-none">
          <CircleButton onPress={() => router.push("/(Auth)/Welcome")} />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Username;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: "center",
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
  usernameDisplay: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SPACING.m,
  },
  changeLink: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.primary,
    textAlign: "center",
  },
  inputWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: SPACING.m,
  },
  usernameInput: {
    width: "100%",
    backgroundColor: COLORS.inputCard,
    borderColor: COLORS.surfaceLight,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    color: COLORS.textPrimary,
    fontSize: 24,
    fontFamily: FONTS.bold,
    textAlign: "center",
    marginBottom: SPACING.m,
  },
  saveLink: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.primary,
    textAlign: "center",
  },
  fabWrap: {
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 100,
  },
});
