import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider as PaperProvider } from 'react-native-paper';
import SignUpScreen from './components/SignUpScreen';
import SignInScreen from './components/SignInScreen';
import ForgotPasswordScreen from './components/ForgotPassword';
import welcome from './components/welcome';
import SetPasscodeScreen from './components/SetPasscodeScreen';
import RandomPage from './components/RandomPage';

const Stack = createStackNavigator();

function App() {
  return (
    <ActionSheetProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
           <Stack.Screen name="Welcome" component={welcome} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="SetPasscodeScreen" component={SetPasscodeScreen} />
            <Stack.Screen name="RandomPage" component={RandomPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ActionSheetProvider>
  );
}

export default App;
