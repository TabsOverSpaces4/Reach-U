import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, TextInput } from 'react-native';
import { height, showNotification, width } from '../const/const';


export default function Giveaway({ navigation }) {



    const [giveaway, setgiveaway] = useState()

    useEffect(async () => {
        getgiveaway()
    }, [])

    function getgiveaway() {
        axios.get('https://iota-reach-u.herokuapp.com/api/v1/giveAways',
            {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYwZjA4ZjYwYjc5NTk5NDkxOWE3NSIsImlhdCI6MTYzMTk4MTMyNiwiZXhwIjoxNjM0NTczMzI2fQ.W8AFWLedoAxaRdIn8rIsptk0D0vSWPsNNcacFr0bZtM" }
            }).then((res) => {
                setgiveaway(res.data.data)
                console.log(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const car = [{ "id": "1" }, { "id": "2" }, { "id": "4" }, { "id": "3" }]
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: '#ffffff' }}>
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('Driver') }}
                style={{
                    flexDirection: 'row', justifyContent: 'flex-end'
                }}>
                <Image source={require('../assets/driver.png')}
                    style={{
                        marginLeft: 20,
                        alignSelf: "flex-end",
                        resizeMode: 'contain',
                        marginBottom: 15,
                        height: height / 45
                    }} />
                <Text style={{
                    fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#5CA878',
                    marginLeft: 3, fontSize: 11.5, marginBottom: 10
                }}>Switch to driver</Text>
            </TouchableOpacity> */}


            {/* <Text style={{ marginTop: 10, fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#828282' }}>Suggested Rides</Text> */}

            <FlatList data={giveaway} style={{ marginTop: 10 }}
                renderItem={({ item }) => (
                    <View style={{
                        marginBottom: 10, borderRadius: 5, backgroundColor: 'white',
                        height: 140, width: width - 35, elevation: 8,
                        alignSelf: 'center'
                    }}>
                        <View style={{ flex: 1.5, padding: 15 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Image
                                    source={{ uri: "https://placeimg.com/140/140/any" }}
                                    style={{
                                        height: 80, width: 60, resizeMode: "cover",
                                        borderRadius: 1
                                    }}
                                />
                                <View style={{ marginLeft: 0 }}>
                                    <Text style={{
                                        color: '#555454',
                                        fontFamily: "Montserrat-Regular", fontWeight: 'bold',
                                        fontSize: 15
                                    }}>
                                        {item.user.name}
                                    </Text >
                                    {/* <Text style={{
                                        color: '#828282',
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 12
                                    }}>
                                        {item.dateAndTime.substring(0, item.dateAndTime.indexOf('T'))}{"  "}
                                        {item.dateAndTime.substring(item.dateAndTime.indexOf('T') + 1, item.dateAndTime.indexOf('Z') - 7)}
                                    </Text> */}
                                    <Text style={{
                                        color: '#828282',
                                        fontFamily: "Montserrat-Regular", fontWeight: 'bold',
                                        fontSize: 12
                                    }}>
                                        Car {item.title}
                                    </Text>
                                    <Text style={{
                                        color: "#828282",
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 12
                                    }}>
                                        Location
                                    </Text>

                                </View>

                            </View>



                        </View>
                        {/* <View style={{
                            marginTop: 10,
                            width: width / 1.2,
                            alignSelf: 'center',
                            borderBottomColor: '#979797',
                            borderBottomWidth: 1
                        }}></View> */}
                        <View style={{
                            borderRadius: 5,
                            height: 50, alignItems: 'center',
                            backgroundColor: "#ffffff", flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    showNotification("Request sent successfully")
                                }}
                                style={{ width: 100, justifyContent: 'center', height: 35, backgroundColor: "#ffffff" }}>
                                <Text style={{ fontFamily: "Montserrat-Regular", alignSelf: "center", color: 'green' }}>Grab it</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    showNotification("Request sent successfully")
                                }}
                                style={{ width: 100, justifyContent: 'center', height: 35, backgroundColor: "#ffffff" }}>
                                <Text style={{ fontFamily: "Montserrat-Regular", alignSelf: "center", color: 'green' }}>View</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}
                keyExtractor={item => item._id}
            />
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
            }}>Create Giveaway</Text></TouchableOpacity>
        </View >
    )
}