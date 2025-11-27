import { View, Text, ImageBackground, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SPACING } from '@/constants/theme'

const Welcome = () => {
  return (
    <ImageBackground style={styles.background}>
        <StatusBar barStyle={'light-content'}/>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the {'\n'}community 👋</Text>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/welcomeimg.png')} />
            </View>
            </View>
        </SafeAreaView>
    </ImageBackground>
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
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 285,
        height: 282,
    },
})