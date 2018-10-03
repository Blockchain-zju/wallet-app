import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Colors from '../constants/Colors'

const tabBarOptions = {
  showLabel: false,
  activeTintColor: Colors.tabIconSelected,
  inactiveTintColor: Colors.tabIconDefault,
}

function createNavigationOptions(icon) {
  let iconSet
  if (typeof icon === 'string') {
    iconSet = {
      active: icon,
      inactive: icon
    }
    console.log(iconSet)
  } else {
    iconSet = icon
  }
  return {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          focused ? iconSet.active : iconSet.inactive
        }
      />
    ),
    tabBarOptions
  }
}


const HomeStack = createStackNavigator({
  Home: HomeScreen,
})
HomeStack.navigationOptions = createNavigationOptions('md-information-circle')

const LinksStack = createStackNavigator({
  Links: LinksScreen,
})
LinksStack.navigationOptions = createNavigationOptions('md-link')

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})
SettingsStack.navigationOptions = createNavigationOptions('md-options')


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
})
