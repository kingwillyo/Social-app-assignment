import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Background } from '@react-navigation/elements'
import { COLORS, FONTS } from '@/constants/theme'
import BackButton from '@/components/BackButton'

const Phone = () => {
  return (
    <Background style={styles.background}>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Lets get you signed up!</Text>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Background>
  )
}

export default Phone

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.textPrimary,
    textAlign: 'center',
  }
});