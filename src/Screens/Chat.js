import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Image, View, Text, KeyboardAvoidingView } from 'react-native'
import firebase from '../Config/Firebase'
export default class Example extends React.Component {
  state = {
    messages: [],
  }
  static navigationOptions = ({ navigation }) => {
    console.log("navigation================>", navigation.state.params.img)
    return {
      title: navigation.getParam('name'),
      headerStyle: { height: 70 },
      headerTitle: (
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ height: 50, width: 50, borderRadius: 100 }} source={{ uri: navigation.state.params.img }} />
          <Text style={{ marginTop: 15, fontSize: 20, marginLeft: 20 }}>{navigation.state.params.name}</Text>
        </View>
      ),
    };
  };

  componentDidMount = async () => {
    let allmessage = []

    let sendTouid = this.props.navigation.state.params.data.id
    let currentUser = this.props.navigation.state.params.currentUserId

    console.log("uid sendTouid ==>", sendTouid)
    console.log("uid currentUser ==>", currentUser)

    this.props.navigation.setParams({ name: this.props.navigation.state.params.data.name, img: this.props.navigation.state.params.data.img })

    await firebase.firestore().collection(currentUser).where("currentUser", "==", sendTouid).get().then(
      value => {
        value.forEach(doc => {
          let getchat = doc.data()
          getchat.chat[0]._id = 1
          getchat.chat[0].user._id = 2
          getchat.chat[0].createdAt = getchat.chat[0].createdAt.toDate()
          allmessage.push(getchat.chat[0])
          console.log("send me all message", getchat.chat[0])
        })
      })

    await firebase.firestore().collection(sendTouid).where("currentUser", "==", currentUser).get().then(
      value => {
        value.forEach(doc => {
          let getchat = doc.data()
          // getchat.chat[0]._id=1
          // getchat.chat[0].user._id=2
          getchat.chat[0].createdAt = getchat.chat[0].createdAt.toDate()
          allmessage.push(getchat.chat[0])
        })
      })
    await console.log("All messgae", allmessage)
    await allmessage.sort(function (a, b) { return b.createdAt - a.createdAt });
    await this.setState({ messages: allmessage })
  }
  onSend(messages = []) {
    let sendTouid = this.props.navigation.state.params.data.id
    let currentUserId = this.props.navigation.state.params.currentUserId

    let chats = GiftedChat.append(this.state.messages, messages)
    firebase.firestore().collection(sendTouid).add({
      username: this.props.navigation.state.params.data.name,
      currentUser: currentUserId,
      sendTouid: sendTouid,
      chat: chats,
    })
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  render() {
    let userId = this.props.navigation.state.params.currentUserId
    let currentUserId = this.props.navigation.state.params.currentUserId
    console.log("/////////////////////////", userId)
    // console.log("||||||||||||||||||||||||||",currentUserId)

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={90}
        enabled
      >
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </KeyboardAvoidingView>
    )
  }
}