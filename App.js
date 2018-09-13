import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Icons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return(
      <SafeAreaView style={{flex:1}}>
        <AppNavTop/>
      </SafeAreaView>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return(<View style={styles.container}>
      <Text>SETTING</Text>
    </View>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return(<View style={styles.container}>
      <Text>CONTACT</Text>
    </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return(<View style={styles.container}>
      <Text>PROFILE</Text>
    </View>
    );
  }
}

const AppNavTop = createMaterialTopTabNavigator({
  Home: {screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icons name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Contact: {screen: ContactScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icons name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Profile: {screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icons name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Setting: {screen: SettingScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icons name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
},{
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
