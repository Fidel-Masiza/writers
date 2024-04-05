import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Welcome = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/lock.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/unlock.png')} style={styles.logo} />
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.boldText}>Welcome to LockPro</Text>
          <Text style={styles.regularText}>Your trusted partner in security</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleButtonPress}
          >
            Get Started
          </Button>
        </View>

        <TouchableOpacity style={styles.contactButton} onPress={() => console.log("What do we do? pressed")}>
          <Text style={styles.contactText}>What do we do?</Text>
        </TouchableOpacity>

        <View style={styles.folderContainer}>
          <Image source={require('../assets/Folders.png')} style={styles.folder} />
          <Image source={require('../assets/galleryLock.png')} style={styles.galleryLock} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  welcomeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  boldText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    backgroundColor: '#008080',
  },
  contactButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  contactText: {
    fontSize: 20,
    color: 'orange',
    textDecorationLine: 'underline',
  },
  folderContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  folder: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  galleryLock: {
    width: 43,
    height: 50,
  },
});

export default Welcome;
