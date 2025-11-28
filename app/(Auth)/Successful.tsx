import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Background } from '@react-navigation/elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, FONTS } from '@/constants/theme'

const Successful = () => {
  return (
    <Background style={styles.background}>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Ionicons name='checkmark-circle' size={150} color={'green'}/>
                <Text style={styles.text}>Onboarding Successful</Text>
            </View>
        </SafeAreaView>
    </Background>
  )
}

export default Successful

const styles = StyleSheet.create({
    background: {
        backgroundColor: COLORS.background,
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.textPrimary,
        fontFamily: FONTS.bold,
        fontWeight: 600,
        fontSize: 24,
    },
});