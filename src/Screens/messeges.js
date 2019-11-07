import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Card, } from 'native-base';
import firebase from './../Config/Firebase'
import Logouticon from 'react-native-vector-icons/MaterialCommunityIcons'
import ModalDropdown from 'react-native-modal-dropdown';
class Messages extends React.Component {
    state = {
        array: []
    }
    componentDidMount() {
        firebase.firestore().collection('user_data').get().then(
            value => {
                value.forEach(doc => {
                    let getuser = doc.data()
                    this.setState({ users: this.state.array.push(getuser) })
                })
            })
    }
    static navigationOptions = {
        headerStyle: { height: 90 },
        title: "Messages",
        headerLeft: <Image
            style={{ width: 70, height: 70, borderWidth: 2, borderColor: 'grey', margin: 5, borderRadius: 100 }}
            source={require('./../img/messenger.png')}
        />
    };
    logout() {
        alert();
        firebase.auth().signOut().then(func = () => {
            this.props.navigation.navigate("Login")
            alert("logout successfully")
        }).catch(function (error) {
        });
    }
    render() {
        let totalUser = this.state.array
        console.log(".,,,,,,,,,,,,,,,,,,,,,,,,,,,", this.props.navigation.state.params.uid)
        return (
            <ScrollView>
                <Card style={{ margin: 0, marginTop: 30, padding: 10, flexDirection: 'row' }}>
                    <Image style={{ height: 50, width: 50, borderRadius: 100 }} source={{ uri: this.props.navigation.state.params.userData[0].photoURL }} />
                    <Text style={{ marginTop: 15, fontSize: 20, marginLeft: 20 }}>{this.props.navigation.state.params.userData[0].displayName}</Text>
                    <Right>
                        <ModalDropdown onSelect={() => this.logout()} options={[' Logout ']} dropdownStyle={{ width: 100, height: 40, marginTop: -10, padding: 5, alignItems: 'center', fontSize: 15 }}>
                            <Logouticon name={"dots-vertical"} size={30} />
                        </ModalDropdown>
                    </Right>
                </Card>
                <View>
                    {totalUser.map((val, i) =>
                        <TouchableOpacity>
                            <View>
                                <List onPress={() => this.props.navigation.navigate('Chat')}>

                                    <ListItem avatar onPress={() => this.props.navigation.navigate('Chat', { data: val, currentUserId: this.props.navigation.state.params.id })}>
                                        <Left>
                                            <Thumbnail source={{ uri: val.img }} />
                                        </Left>
                                        <Body>
                                            <Text>{val.name}</Text>
                                            <Text note style={{ marginTop: 10 }}>typing....</Text>
                                        </Body>
                                        <Right>
                                            <Text note>11:33 am</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>

        )
    }
}
export default Messages;