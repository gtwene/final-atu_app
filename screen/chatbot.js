import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity,  KeyboardAvoidingView, } from 'react-native';
import Constants from 'expo-constants';
import Msg from '../Chats/msg';
import data from '../Chats/data';
import styles from '../Chats/styles';


let chats = [];
export default function Chat() {
  const [msg, setMsg] = useState('');
  const [chatList, setChatList] = useState([]);

 const getAnswer = q => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].question.includes(q.toLowerCase())) {
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
      }
    }

  chats = [ 
      ...chats,
      {msg: "Didn't recognise tour question", incomingMsg: true},
    ];
    setChatList([...chats].reverse());
    return;
  };


const onSendMsg = () => {
    chats = [...chats, {msg: msg, sentMsg: true}];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg('');
  };

  return (
    <View> 
      <FlatList
        style={{height: '87%', bottom: '3%'}}
        data={chatList}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => ( 
          <Msg
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}
          />
        )}
      /> 

       <View style={styles.typeMsgContainer}>
        <TextInput
          style={styles.typeMsgBox}
          value={msg}
          placeholder="Type Here ..."
          onChangeText={val => setMsg(val)}
        />
        <TouchableOpacity
          style={[styles.sendBtn, {backgroundColor: msg ? 'orange' : 'grey'}]}
          disabled={msg ? false : true}
          onPress={() => onSendMsg()}>
          <Text style={styles.sendTxt}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
 }
