import { COLORS, FONTS } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PrimaryButtonProps } from "@/types/types";


const GRADIENT_COLORS = ["#E2428F", "#BE66EB"];

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={[...GRADIENT_COLORS] as [string, string]}
        start={{ x: 0, y: 0.5 }} // Horizontal gradient
        end={{ x: 1, y: 0.5 }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    height: 56,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: FONTS.bold,
    fontWeight: 700,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});
