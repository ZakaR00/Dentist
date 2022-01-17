import React from "react";
// import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-native-styled-toast";
import Root from "./src/stacks/Root";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2A86FF",
    accent: "#f1c40f",
  },
};

const toastTheme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#E2E8F0',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FC0021',
    info: "#2A86FF",
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <ThemeProvider theme={toastTheme}>
          <ToastProvider>
            <Root />
          </ToastProvider>
        </ThemeProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

