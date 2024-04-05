// Import necessary components and modules from React and React Native
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper'; // Importing components from react-native-paper
import firebase from './firebaseConfig';

// Define the functional component called SignUpScreen, which receives 'navigation' as a prop
function SignUpScreen({ navigation }) {
  // State variables for user details, password, and error message
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle user signup
  const handleSignup = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Use Firebase authentication to create a new user
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully signed up, navigate to the next screen
        navigation.navigate('Account Overview');
      })
      .catch((error) => {
        // Handle errors during the signup process
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.infoText}>
        Please confirm that all details are correct because you won't be able to check once you submit.
      </Text>
      {/* Input fields for user details */}
      <TextInput
        label="Full Names"
        placeholder="John Doe"
        value={fullName}
        onChangeText={text => setFullName(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      <TextInput
        label="Phone Number"
        placeholder="123-456-7890"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={text => setPhoneNumber(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      <TextInput
        label="Country"
        placeholder="Your Country"
        value={country}
        onChangeText={text => setCountry(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      <TextInput
        label="Email"
        placeholder="example@email.com"
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#008080' } }}
      />
      {/* Display error message if any */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      {/* Signup button */}
      <Button mode="contained" onPress={handleSignup} style={styles.button} color="#008080">
        Sign Up
      </Button>
    </ScrollView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Set a light background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#008080', // Set a teal color
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333', // Set a dark gray color
  },
  input: {
    width: '100%', // Take full width
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    height: 50,
  },
});

// Export the SignUpScreen component as the default export
export default SignUpScreen;
