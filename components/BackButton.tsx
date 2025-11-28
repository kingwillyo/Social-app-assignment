import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { router } from 'expo-router'

export const BackButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => router.back()}>
        <Ionicons name='arrow-back-outline' color={COLORS.white} size={20}/>
      </TouchableOpacity>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        height: 56,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom: 20,
    },
    arrowContainer: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    }
});