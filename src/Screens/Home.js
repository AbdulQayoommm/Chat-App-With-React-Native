// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import Tabnavigaion from './../Config/Navigation/TabNavigation'
// import firebase from './../Config/Firebase'
// export default class Home extends React.Component {

//     static navigationOptions = ({ navigation }) => {
//         console.log("=======>navigation", navigation.state.params.img)
//         return {
//             title: navigation.getParam('name'),
//             headerStyle: { height: 90 },
//             headerLeft:
//                 <Image
//                     style={{ width: 60, height: 60, borderWidth: 2, borderColor: 'grey', margin: 5, borderRadius: 100 }}
//                     source={{ uri: navigation.state.params.img }}
//                 />,
//             headerStyle: { height: 90 },
//         };
//     };

//     componentDidMount() {
//         this.props.navigation.setParams({ name: this.props.navigation.state.params.userData[0].displayName, img: this.props.navigation.state.params.userData[0].photoURL })
//     }
//     render() {

//         return (
//             <Tabnavigaion />


//         )
//     }
// }