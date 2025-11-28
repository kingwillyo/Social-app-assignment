import { COLORS, FONTS, SPACING } from "@/constants/theme";
import { AppInputProps } from "@/types/types";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

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
