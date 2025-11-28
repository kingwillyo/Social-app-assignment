import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '@/constants/theme'
import { SkipButtonProps } from "@/types/types";

export const SkipButton: React.FC<SkipButtonProps> = ({
    onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SkipButton

const styles = StyleSheet.create({
    container: {
        height: 56,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom: 20,
    },
    textContainer: {
        alignSelf: 'flex-end',
        width: 32,
        height: 32,
    },
    text: {
        color: COLORS.textSecondary,
        fontFamily: FONTS.regular,
        fontWeight: 600,
        fontSize: 16,
    },
});