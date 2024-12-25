import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';

// Define the isSuccessResponse function
const isSuccessResponse = (response: any): boolean => {
  return response && response.data;
};

// Define the isErrorWithCode function
const isErrorWithCode = (error: any): boolean => {
  return error && error.code;
};

export const signIn = async () => {
  const [state, setState] = useState({ userInfo: null });

  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    console.log(response);
    if (isSuccessResponse(response)) {
      setState({ userInfo: response.data });
    } else {
      // sign in was cancelled by user
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      const typedError = error as { code: string };
      switch (typedError.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
          // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
  }
};