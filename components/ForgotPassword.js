import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import firebase from './firebaseConfig'; // Import Firebase configuration

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailExists, setEmailExists] = useState(true); // Initially assume email exists
  const [resetLinkSent, setResetLinkSent] = useState(false); // State to track if reset link is sent

  // Function to check if email exists
  const checkEmailExists = async () => {
    try {
      const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
      setEmailExists(methods.length > 0); // If methods.length > 0, email exists
    } catch (error) {
      console.error('Error checking email existence:', error.message);
      // Handle error
    }
  };

  const handleSendResetLink = async () => {
    if (emailExists) {
      // Send the reset link
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        setResetLinkSent(true); // Set reset link sent to true
      } catch (error) {
        console.error('Error sending reset link:', error.message);
        // Handle the error accordingly
      }
    } else {
      console.log("Email doesn't exist. Please enter a valid email.");
    }
  };

  // Function to navigate back to sign-in screen
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      {resetLinkSent ? ( // Show message if reset link is sent
        <View>
          <Text style={styles.message}>Reset link has been sent to your email.</Text>
          <Button mode="contained" onPress={handleGoBack} style={styles.button}>
            Go Back
          </Button>
        </View>
      ) : (
        <View>
          <Text style={styles.instruction}>
            Please enter your email address below. We will send you a link to reset your password.
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            onBlur={checkEmailExists} // Check email existence when input field loses focus
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={handleSendResetLink} style={styles.button}>
            Send Reset Link
          </Button>
        </View>
      )}
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
  instruction: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  message: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
