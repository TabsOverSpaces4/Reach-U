import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { required } from 'yargs';
import { customSize, height, showNotification, width } from '../const/const'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';



export default function Driver({ navigation }) {

    const [topicSelected, setTopicSelected] = useState()
    const [startPoint, setstartPoint] = useState()
    const [destination, setDestination] = useState()
    const [carModel, setCarModel] = useState()
    const [details, setDetails] = useState()
    const [share, setShare] = useState()

    const [image, setImage] = useState(null)






    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff' }}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps={"handled"}
        >

            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <Image source={{ uri: 'https://placeimg.com/140/140/any' }}
                    style={{
                        alignSelf: 'center',
                        width: 50, marginTop: 20, marginLeft: 15,
                        height: 50, borderRadius: 50 / 2
                    }} />
                <Text style={{
                    alignSelf: 'center',
                    paddingLeft: 18, paddingTop: 15,
                    fontFamily: "Montserrat-Regular",
                    fontSize: 18,
                    fontWeight: "bold",
                    letterSpacing: 0,
                    textAlign: "left",
                    color: "#555454"
                }}>Olive Yew Jung</Text>
            </View>
            <TextInput style={{
                height: 50,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
                paddingTop: 10,
                borderStyle: "solid", fontFamily: "Montserrat-Regular",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }} value={startPoint}
                multiline={true}
                placeholder={'Enter start point'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setstartPoint(res)
                }}
            />
            <TextInput style={{
                height: 50,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
                paddingTop: 10, fontFamily: "Montserrat-Regular",
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }} value={destination}
                multiline={true}
                placeholder={'Enter destination'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setDestination(res)
                }}
            />

            <TextInput style={{
                height: 50,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
                paddingTop: 10,
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center', fontFamily: "Montserrat-Regular",
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }} value={carModel}
                multiline={true}
                placeholder={'Enter Car Name'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setCarModel(res)
                }}
            />
            <TextInput style={{
                height: 50,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
                paddingTop: 10, fontFamily: "Montserrat-Regular",
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }} value={details}
                multiline={true}
                placeholder={'Enter Details (date and Time)'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setDetails(res)
                }}
            />
            <TextInput style={{
                height: 50,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
                paddingTop: 10, fontFamily: "Montserrat-Regular",
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }} value={share}
                multiline={true}
                placeholder={'Enter share price'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setShare(res)
                }}
            />
            <Pressable
                style={{
                    alignSelf: "center", width: width - 74, height: 54,
                    alignItems: "center", backgroundColor: '#376248',
                    flexDirection: "row",
                    borderRadius: 10, marginTop: "10%",
                    marginBottom: "25%",
                    justifyContent: "center"

                }}
                onPress={() => {

                    showNotification("Created Successfully")
                    navigation.pop()
                    console.log("clicked")
                }}
            >
                <Text style={{
                    alignSelf: "center",
                    fontFamily: "Montserrat-Regular",
                    fontSize: customSize(14),
                    color: "#ffffff"
                }}>
                    Create Journey
                </Text>
            </Pressable>

        </ScrollView >
    );
}