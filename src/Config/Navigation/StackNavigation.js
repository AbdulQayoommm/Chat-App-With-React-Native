import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Home from './../../Screens/Home';
import Login from './../../Screens/FacebookLogin'
import Messages from './../../Screens/messeges';
import Peoples from './../../Screens/peoples';
import Discover from './../../Screens/discover'
import Chat from './../../Screens/Chat';
import TabNavigator from './TabNavigation'
import { Tab } from 'native-base';
// import Message from './../../Screens'
const stackNavigation = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: TabNavigator,
        navigationOptions : {
            header : null
        }
       
    },
    
    Chat: {
        screen: Chat
    },
 
   
})

const Navigator = createAppContainer(stackNavigation)
export default Navigator;
