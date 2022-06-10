import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AuthProvider, useAuth } from './src/hooks/auth';

import { Routes } from './src/routes'; 

export default function App() {
  const { userStorageLoading } = useAuth();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView
      style={{
       height: '100%',
      }}
    >
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
