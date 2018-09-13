import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return(<View style={styles.container}>
      <Text>Changes you make will automatically reload.</Text>
    </View>
    );
  }
}

export default createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen},
  Setting: {screen: SettingScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
