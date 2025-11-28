import { CircleButtonProps } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const GRADIENT_COLORS = ["#E2428F", "#BE66EB"];

export const CircleButton: React.FC<CircleButtonProps> = ({
  onPress,
  disabled = false,
}) => (
        <TouchableOpacity
        style={styles.circleBtn}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.8}
    >
        <LinearGradient
        colors={GRADIENT_COLORS as [string, string]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradientFill}
        >
        <Ionicons
            name="arrow-forward-outline"
            size={28}
            style={styles.arrowText}
        />
        </LinearGradient>
    </TouchableOpacity>
);

const SIZE = 56;

const styles = StyleSheet.create({
  circleBtn: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 24,
  },
  gradientFill: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZE / 2,
  },
  arrowText: {
    color: "#fff",
  },
});
