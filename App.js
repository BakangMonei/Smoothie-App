import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginScreen from './LoginScreen';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/smoothie.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.smoothieApp}>Smoothie App</Text>
      </View>
    );
  }

  return <LoginScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 221, 1)',
  },
  image: {
    height: 203,
    width: 194,
    marginTop: 305,
    marginLeft: 90,
  },
  smoothieApp: {
    fontFamily: 'roboto-700',
    color: '#121212',
    marginTop: 81,
    marginLeft: 142,
  },
});

export default App;