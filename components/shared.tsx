// components/Shared.tsx
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { COLORS, FONTS, SPACING } from "../constants/theme";

// Prop Types
interface ScreenContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

interface CircleButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

interface AppInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "phone-pad";
  autoFocus?: boolean;
}

const GRADIENT_COLORS = ["#E2428F", "#BE66EB"];

// Components

// Screen Wrapper
export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
}) => (
  <SafeAreaView style={[styles.container, style]}>
    <StatusBar barStyle="light-content" />
    <View style={styles.contentWrapper}>{children}</View>
  </SafeAreaView>
);

// Primary Action Button (Gradient)
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.primaryBtnWrapper, disabled && styles.disabledBtn]}
  >
    <LinearGradient
      colors={[...GRADIENT_COLORS] as [string, string]}
      start={{ x: 0, y: 0.5 }} // Horizontal gradient
      end={{ x: 1, y: 0.5 }}
      style={styles.gradientBackground}
    >
      <Text style={styles.primaryBtnText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

// Circle Arrow Button (Gradient)
export const CircleButton: React.FC<CircleButtonProps> = ({
  onPress,
  disabled = false,
}) => (
  <TouchableOpacity
    style={[styles.circleBtn, disabled && styles.disabledBtn]}
    onPress={onPress}
    disabled={disabled}
  >
    <LinearGradient
      colors={[...GRADIENT_COLORS] as [string, string]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.circleGradientBackground}
    >
      <Text style={styles.arrowText}>→</Text>
    </LinearGradient>
  </TouchableOpacity>
);

// Standard Input Field (no change, but uses Manrope)
export const AppInput: React.FC<AppInputProps> = (props) => (
  <View style={styles.inputContainer}>
    {props.label && <Text style={styles.label}>{props.label}</Text>}
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={COLORS.textSecondary}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      autoFocus={props.autoFocus}
      selectionColor={COLORS.primary}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  contentWrapper: { flex: 1, paddingHorizontal: SPACING.m },

  primaryBtnWrapper: {
    borderRadius: 100,
    marginBottom: SPACING.l,
    overflow: "hidden",
  },
  gradientBackground: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },

  disabledBtn: {
    opacity: 0.5,
  },

  circleBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "flex-end",
    marginTop: SPACING.m,
    overflow: "hidden",
  },
  circleGradientBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "white",
    fontSize: 24,
    fontFamily: FONTS.bold,
  },

  inputContainer: { marginBottom: SPACING.l },
  label: {
    color: COLORS.textSecondary,
    marginBottom: SPACING.s,
    fontFamily: FONTS.regular,
  },
  input: {
    backgroundColor: COLORS.surfaceLight,
    padding: SPACING.m,
    borderRadius: 12,
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
});
