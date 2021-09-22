import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, Button, ActivityIndicator, RefreshControl } from 'react-native';
import { height, width } from '../const/const';

export default function Home({ navigation }) {

    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(async () => {
        getPost()
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getPost()

    }, [])


    function getPost() {
        axios.get("https://iota-reach-u.herokuapp.com/api/v1/posts").then((res) => {
            console.log(res.data.data)
            setLoading(false)
            setRefreshing(false)
            setPostData(res.data.data)
        }).catch((err) => {
            setLoading(false)
            setRefreshing(false)
            console.log(err)
        })
    }

    const post = [{ "id": 1, "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text", "username": "Olive Yew Jung", "date": "25.05.2021", "image": 'https://placeimg.com/140/140/any', "likes": '6' },
    { "id": 2, "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text", "username": "Olive Yew Jung", "date": "25.05.2021", "image": 'https://placeimg.com/140/140/any', "likes": '6' }]

    return (
        loading ? <ActivityIndicator size="large" color="#376248" /> :
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={postData}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                marginBottom: 2, marginLeft: 20,
                                color: '#555454',
                                fontFamily: 'Montserrat-Regular',
                                fontSize: 17,
                                fontWeight: "bold"
                            }}>{item.user.name}</Text>
                            <Text style={{
                                marginLeft: 20,
                                marginBottom: 7,
                                fontFamily: 'Montserrat-Regular', fontWeight: "800", fontSize: 10,
                                color: "#5CA878"
                            }}>{item.createdAt}</Text>
                            <Text style={{
                                marginBottom: 7,
                                fontFamily: 'Montserrat-Regular', fontWeight: "900", fontSize: 11.5,
                                color: "#979797", marginLeft: 20
                            }}>{item.caption}</Text>
                            <Image source={{ uri: `https://source.unsplash.com/random/300x200?sig=${Math.random()}` }}
                                style={{
                                    borderRadius: 10,
                                    alignSelf: 'center',
                                    width: height / 2,
                                    marginBottom: 9,
                                    height: height / 3
                                }} />
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <Image source={require('../assets/like.png')}
                                    style={{
                                        marginLeft: 20,
                                        alignSelf: 'flex-start',
                                        resizeMode: 'contain',
                                        marginBottom: 15,
                                        height: height / 45
                                    }} />
                                <Text style={{
                                    fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#DE3030',
                                    marginLeft: 3, fontSize: 11.5, marginBottom: 10
                                }}>{item.likes} Likes</Text>
                                <Image source={require('../assets/reply.png')}
                                    style={{
                                        marginLeft: 20,
                                        alignSelf: 'flex-start',
                                        resizeMode: 'contain',
                                        marginBottom: 15,
                                        height: height / 45
                                    }} />
                                <Text style={{
                                    fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#979797',
                                    marginLeft: 3, fontSize: 11.5, marginBottom: 10
                                }}>Reply</Text>
                            </View>
                            <View style={{
                                marginBottom: 15,
                                width: width / 1.2,
                                alignSelf: 'center',
                                borderBottomColor: '#979797',
                                borderBottomWidth: 1
                            }}></View>
                        </View>
                    )
                    }
                    keyExtractor={item => item._id} />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        width: 145,
                        height: 47,
                        alignItems: 'center',
                        justifyContent: 'center',
                        right: 30,
                        bottom: 30,
                        borderRadius: 56 / 2,
                        backgroundColor: "#376248"
                    }} onPress={() => { navigation.navigate('AddFeed') }}
                ><Text style={{
                    color: '#F5F5F5', fontFamily: "Montserrat-Regular"
                }}>Write a Post</Text></TouchableOpacity>
            </View >


    )
}