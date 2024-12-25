import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { StatusBar } from 'expo-status-bar';
import {signIn} from '../../components/signin';
GoogleSignin.configure({
  webClientId: '484792886179-gc8c3ff38d18abr7klb8b4jt64s17ikq.apps.',
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  iosClientId: '484792886179-3dvbh38p0f87707citb40krn3rcvla97.apps.'
});

const index = () => {
  return (
    <View>
     <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
     />
     <StatusBar style="auto" />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})