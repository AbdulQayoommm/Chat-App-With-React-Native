import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Messages from './../../Screens/messeges';
import Peoples from './../../Screens/peoples';
import Discover from './../../Screens/discover'
import Icon from 'react-native-vector-icons/AntDesign';
import Compass from 'react-native-vector-icons/SimpleLineIcons';

const tabnavigator = createBottomTabNavigator({
  Peoples: {
    screen: Peoples,

    navigationOptions: {
      title: "All Users",
      activeTintColor: 'blue',
      tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={25} color="grey" />
      )
    },

    Messages: {
      screen: Messages,
      navigationOptions: {
        title: "All Chats",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="message1" size={25} color="grey" />

        )
      },
    },
    tabBarOptions: {
      activeTintColor: '#ffffff',
    },
  },

  Messages: {
    screen: Messages,
    navigationOptions: {
      title: "message",
      activeTintColor: 'blue',
      tabBarIcon: ({ tintColor }) => (
        <Compass name="message1" size={25} color="grey" />
      )
    },

  },


  Discover: {
    screen: Discover,
    navigationOptions: {
      title: "discover",
      activeTintColor: 'blue',
      tabBarIcon: ({ tintColor }) => (
        <Compass name="compass" size={25} color="grey" />
      )
    },

  },


})

const Navigator = createAppContainer(tabnavigator)
export default Navigator;
