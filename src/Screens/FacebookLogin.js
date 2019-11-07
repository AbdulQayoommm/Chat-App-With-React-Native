import React from 'react';
import firebase from './../Config/Firebase';
import * as Facebook from 'expo-facebook';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
export default class FacebookLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            data: false,
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        // let that = this.state
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // this.props.navigation.navigate('Home', { data: this.state.data })    
                console.log("_________________________________>", user.uid)
                this.props.navigation.navigate("Home", { userData: user.providerData, id: user.uid })

                //   that.setState({ data:user });
            }
            else {
                // alert("first login in")
            }
            // if(this.state.data === false){
            //     alert("")
            // }
            // else{
            //     this.props.navigation.navigate('Home',{data:this.state.data})
        })
    }
    async loginWithFacebook() {
        try {
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync('438672676775158');
            if (type === 'success' && token) {
                var credential = await firebase.auth.FacebookAuthProvider.credential(token);
                await firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then((result) => {
                        // this.setState({ data: result })
                        console.log("987979879888888888", result.user.uid)
                        firebase.firestore().collection('user_data').doc(result.user.displayName).set({ name: result.user.displayName, img: result.user.photoURL, id: result.user.uid })
                        // firebase.storage
                    })

                    .catch((err) => {
                        console.log('Error==>', err)
                    })

            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            console.log(`Facebook Login Error: ${message}`);
        }
    }
    render() {
        console.log("=====================>", this.state.data)
        return (

            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('./../img/messenger.png')}
                />
                <View style={{ marginTop: '10%' }}>
                    <Icon.Button
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={() => this.loginWithFacebook()}
                    >
                        Login with Facebook
                </Icon.Button>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
