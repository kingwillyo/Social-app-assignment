import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SPACING } from '@/constants/theme'
import { PrimaryButton } from '@/components/PrimaryButton'
import { router } from 'expo-router'
import { Background } from '@react-navigation/elements'

const Welcome = () => {
  return (
    <Background style={styles.background}>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the {'\n'}community 👋</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/welcomeimg.png')} />
                </View>
                <View style={{flex: 1}}/>
                <View style={styles.footer}>
                <PrimaryButton 
                    title='SignUp'
                    onPress={() => router.push('/(Auth)/Phone')}
                />
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>
                </View>
            </View>
        </SafeAreaView>
    </Background>
  )
}

export default Welcome

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        alignContent: 'center',
    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.textPrimary,
        textAlign: 'center',
        marginVertical: SPACING.xxl,
        lineHeight: 32,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 285,
        height: 282,
    },
    footer: {
        marginHorizontal: SPACING.m,
        gap: SPACING.s,
        marginBottom: SPACING.s,
        marginTop: SPACING.m,
    },
    loginContainer: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: COLORS.textPrimary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 700,
    },
});