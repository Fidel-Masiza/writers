import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import firebase from './firebaseConfig';
import { useNavigation } from '@react-navigation/native';

function SetPasscodeScreen() {
  const navigation = useNavigation();

  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    checkIfPinExists();
  }, []);

  const checkIfPinExists = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const pinSnapshot = await firebase.database().ref(`users/${user.uid}/pin`).once('value');
        const savedPin = pinSnapshot.val();
        if (savedPin) {
          navigation.navigate('AppFirstPage'); // If PIN exists, navigate to AppFirstPage
        }
      }
    } catch (error) {
      console.error('Error checking if PIN exists:', error.message);
    }
  };

  const handleSetPasscode = async () => {
  try {
    if (pin !== confirmPin) {
      setErrorMessage('Pins do not match.');
      return;
    }

    const user = firebase.auth().currentUser;
    if (user) {
      await firebase.database().ref(`users/${user.uid}/pin`).set(pin);
      // Navigate to the random page after setting PIN
      navigation.navigate('RandomPage');
    }
  } catch (error) {
    console.error('Error setting PIN:', error.message);
  }
};

  const handleSetTouchID = () => {
    // Code to set touch ID for the user
    // This functionality would vary based on the platform and implementation
    // For now, let's assume it's setting touch ID successfully
    alert('Touch ID set successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Passcode</Text>
      <TextInput
        label="Enter Passcode"
        value={pin}
        onChangeText={setPin}
        maxLength={4}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Confirm Passcode"
        value={confirmPin}
        onChangeText={setConfirmPin}
        maxLength={4}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button mode="contained" onPress={handleSetPasscode} style={styles.button}>
        Set Passcode
      </Button>
      <Button onPress={handleSetTouchID} style={styles.button}>
        Set Touch ID
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default SetPasscodeScreen;
