import * as React from 'react';
import { View, Text, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Carpool from './src/screens/Carpool';
import Giveaway from './src/screens/Giveaway';
import AddFeed from './src/screens/AddFeed';
import Driver from './src/screens/Driver'




const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name='AddFeed' component={AddFeed} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}
function CarpoolStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Carpool' component={Carpool} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Driver' component={Driver} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            let tint;
            if (route.name === 'HomeStack') {
              icon = require("./src/assets/home.png")
              tint = focused ? "#5CA878" : "grey"
            } else if (route.name === 'CarpoolStack') {
              icon = require("./src/assets/carpool.png")
              tint = focused ? "#5CA878" : "grey"
            } else if (route.name === 'Giveaway') {
              icon = require("./src/assets/giveaway.png")
              tint = focused ? "#5CA878" : "grey"
            }
            return <Image source={icon} style={{ tintColor: tint }} />
          },
          tabBarActiveTintColor: '#5CA878',
          tabBarInactiveTintColor: 'gray',
        })}

      >
        <Tab.Screen name="HomeStack" component={HomeStack}
          options={{
            title: "Feed", headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./src/assets/coin.png')} />
                <Text style={{ color: '#F1C93B', marginRight: 10 }}>150</Text>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => alert('This is a button!')}
                >
                  <Image source={{ uri: 'https://placeimg.com/140/140/any' }} style={{
                    width: 45, marginTop: 10,
                    height: 45, borderRadius: 45 / 2,
                    resizeMode: "contain", marginBottom: 10
                  }} />
                </TouchableOpacity>
              </View>)
          }} />

        <Tab.Screen name="CarpoolStack" component={CarpoolStack}
          options={{
            title: "Carpool", headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./src/assets/coin.png')} />
                <Text style={{ color: '#F1C93B', marginRight: 10 }}>150</Text>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => alert('This is a button!')}
                >
                  <Image source={{ uri: 'https://placeimg.com/140/140/any' }} style={{
                    width: 45, marginTop: 10,
                    height: 45, borderRadius: 45 / 2,
                    resizeMode: "contain", marginBottom: 10
                  }} />
                </TouchableOpacity>
              </View>)
          }} />
        <Tab.Screen name="Giveaway" component={Giveaway}
          options={{
            title: "Giveaway", headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./src/assets/coin.png')} />
                <Text style={{ color: '#F1C93B', marginRight: 10 }}>150</Text>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => alert('This is a button!')}
                >
                  <Image source={{ uri: 'https://placeimg.com/140/140/any' }} style={{
                    width: 45, marginTop: 10,
                    height: 45, borderRadius: 45 / 2,
                    resizeMode: "contain", marginBottom: 10
                  }} />
                </TouchableOpacity>
              </View>)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}