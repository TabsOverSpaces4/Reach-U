import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { required } from 'yargs';
import { customSize, height, showNotification, width } from '../const/const'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';



export default function AddFeed({ navigation }) {

    const [topicSelected, setTopicSelected] = useState()
    const [postHeading, setPostHeading] = useState()
    const [postDesc, setPostDesc] = useState()

    const [image, setImage] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)
    // /const ImgUrl = require('../../../Images/back-btn.png');

    // async function addPostApiCall() {
    //     const retdata = await postFeed(postHeading, postDesc, topicSelected)
    //     if (retdata) {
    //         navigation.pop()
    //     }
    //     else {
    //         showNotification("Something Went Wrong")
    //     }
    // }


    function addPostApiCall() {
        // let base = [image.base64]
        // console.log("base", base)
        axios.post('https://iota-reach-u.herokuapp.com/api/v1/posts/', {
            "title": postHeading,
            "caption": postDesc,
            //"images": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        }, {
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYwZjA4ZjYwYjc5NTk5NDkxOWE3NSIsImlhdCI6MTYzMTk4MTMyNiwiZXhwIjoxNjM0NTczMzI2fQ.W8AFWLedoAxaRdIn8rIsptk0D0vSWPsNNcacFr0bZtM" }
        }).then((res) => {
            console.log(res.data)
            navigation.pop()
        }).catch((err) => {
            showNotification("Something Went Wrong")
            console.log(err)
        })
    }

    function handlePickImage() {


        let options = {
            includeBase64: true
        };
        launchImageLibrary(options, (response) => {
            // console.log('Response = ', response.assets.base64);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                );
                alert(response.customButton);
            } else {
                let source = response;
                // console.log(source.assets[0])


                var photo = {
                    base64: source.assets[0].base64,
                    uri: source.assets[0].uri,
                    type: source.assets[0].type,
                    name: source.assets[0].fileName,
                };
                console.log(photo)
                setImage(photo)
                //console.log("photo", photo)

                // var form = new FormData();
                // form.append("image", photo);
                // form.append("group_id", group_id)
                // axios({
                //     url: `${apiBaseUrl}/chat/image`,
                //     method: 'POST',
                //     data: form,
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'multipart/form-data',
                //         'Authorization': `Bearer ${TOKEN}`
                //     }
                // })
                //     .then(function (response) {
                //         console.log("response :", response.data);
                //         setFilePath(source);
                //         onSend([], { image: `https://api.apollox.atifhossain.me/${response.data.imageUrl}` })
                //     })
                //     .catch(function (error) {
                //         console.log("error from image :", error);
                //     })


            }
        });

    }
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff' }}
            style={{ flex: 1 }}
            keyboardShouldPersistTaps={"handled"}
        >
            {/* <View style={{ width: width, height: height / 14, backgroundColor: "#303d4b" }}>
                <View style={{
                    flexDirection: "row", flex: 1, justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "4%",
                    marginRight: "4%",


                }}>
                    <TouchableOpacity style={{
                        width: 38,
                        height: 38,
                        justifyContent: "center",
                        borderRadius: 10,
                        backgroundColor: "#404c59",
                    }}
                        onPress={() => { navigation.pop() }}>
                        <Image source={{ uri: 'https://placeimg.com/140/140/any' }} style={{ height: 38, width: 38 }} />
                    </TouchableOpacity>
                    <Text style={{
                        width: 96,
                        fontFamily: "WorkSans",
                        fontSize: 16,
                        fontWeight: "600",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "center",
                        color: "#ffffff"
                    }}>Make a post</Text>
                    <TouchableOpacity style={{
                        width: 61,
                        height: 38, justifyContent: "center", borderRadius: 10,

                    }}>
                    </TouchableOpacity>

                </View>

            </View > */}
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
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",
            }}
                multiline={true}
                placeholder={'Post heading'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {
                    setPostHeading(res)
                }}
            />
            <TextInput style={{
                height: 150,
                borderRadius: 10,
                width: width * .95,
                marginTop: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 20,
                paddingTop: 20,
                borderStyle: "solid",
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: "#d4d4d4",
                textAlignVertical: "top",

            }}
                multiline={true}
                placeholder={'Desc'}
                placeholderTextColor={'#999999'}
                onChangeText={res => {

                    if (res != "") {
                        setIsDisabled(false)
                    } else {
                        setIsDisabled(true)
                    }
                    setPostDesc(res)
                }}
            />
            {/* <Pressable style={{ flexDirection: "row", marginLeft: 18, marginTop: 20, alignItems: "center" }}
                onPress={() => {
                    handlePickImage()
                }}
            >
                <Entypo
                    name={"image"}
                    size={25}
                />
                <Text style={{ marginLeft: 10 }}>
                    Add Image
                </Text>
            </Pressable> */}
            {image ?
                <View style={{ marginTop: 20 }}>
                    <Image
                        source={{ uri: image.uri }}
                        style={{ borderRadius: 20, width: width - 20, height: width - 20, resizeMode: "contain", alignSelf: "center" }}
                    />
                </View> : null}
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center' }}
                onPress={() => {
                    handlePickImage()
                }}>
                <Image source={require('../assets/camera.png')}
                    style={{
                        marginLeft: 20,
                        alignSelf: 'flex-start',
                        resizeMode: 'contain',
                        marginTop: 20,
                        height: height / 48
                    }} />
                <Text style={{
                    marginTop: 20,
                    paddingLeft: 10,
                    fontFamily: "Montserrat-Regular",
                    fontSize: 16,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    textAlign: "left",
                    color: "#979797"
                }}>Add an Image</Text>

            </TouchableOpacity>
            <Pressable
                style={{
                    alignSelf: "center", width: width - 74, height: 54,
                    alignItems: "center", backgroundColor: isDisabled ? "#cbcaca" : "#09bc8a",
                    flexDirection: "row",
                    borderRadius: 10, marginTop: "25%",
                    marginBottom: "25%",
                    justifyContent: "center"

                }}
                onPress={() => {
                    addPostApiCall()
                }}
            >
                <Text style={{
                    alignSelf: "center",
                    fontFamily: "Inter-Regular",
                    fontSize: customSize(14),
                    color: "#ffffff"
                }}>
                    Make Post
                </Text>
            </Pressable>

        </ScrollView>
    );
}