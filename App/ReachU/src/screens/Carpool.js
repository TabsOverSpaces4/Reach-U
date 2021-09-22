import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, TextInput } from 'react-native';
import { height, showNotification, width } from '../const/const';


export default function Carpool({ navigation }) {


    const [pickup, setPickup] = useState()
    const [drop, setDrop] = useState()
    const [carpool, setCarpool] = useState()

    useEffect(async () => {
        getCarpool()
    }, [])

    function getCarpool() {
        axios.get('https://iota-reach-u.herokuapp.com/api/v1/carpool',
            {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYwZjA4ZjYwYjc5NTk5NDkxOWE3NSIsImlhdCI6MTYzMTk4MTMyNiwiZXhwIjoxNjM0NTczMzI2fQ.W8AFWLedoAxaRdIn8rIsptk0D0vSWPsNNcacFr0bZtM" }
            }).then((res) => {
                setCarpool(res.data.data)
                console.log(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const car = [{ "id": "1" }, { "id": "2" }, { "id": "4" }, { "id": "3" }]
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: '#ffffff' }}>
            <TouchableOpacity
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
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center', alignSelf: 'center',
                padding: 8, height: height / 13.8,
                backgroundColor: '#FFFFFF', elevation: 15,
                width: width - 40, borderRadius: 25

            }}>
                <Image source={require('../assets/pickup.png')}
                    style={{
                        margin: 9,
                        resizeMode: 'stretch',
                        alignItems: 'center',
                    }} />
                <TextInput

                    placeholder='Enter pickup location'
                    onChangeText={(res) => {
                        setPickup(res)
                    }}
                    value={pickup}
                />
            </View>
            <View style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center', alignSelf: 'center',
                padding: 8, height: height / 13.8,
                backgroundColor: '#FFFFFF', elevation: 15,
                width: width - 40, borderRadius: 25

            }}>
                <Image source={require('../assets/drop.png')}
                    style={{
                        margin: 9,
                        resizeMode: 'stretch',
                        alignItems: 'center',
                    }} />
                <TextInput

                    placeholder='Enter drop location'
                    onChangeText={(res) => {
                        setDrop(res)
                    }}
                    value={drop}
                />
            </View>
            <Text style={{ marginTop: 10, fontFamily: "Montserrat-Regular", fontWeight: 'bold', color: '#828282' }}>Suggested Rides</Text>

            <FlatList data={carpool} style={{ marginTop: 10 }}
                renderItem={({ item }) => (
                    <View style={{
                        marginBottom: 10, borderRadius: 5, backgroundColor: 'white',
                        height: 140, width: width - 35, elevation: 8,
                        alignSelf: 'center'
                    }}>
                        <View style={{ flex: 1.5, padding: 15 }}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
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
                                        {item.driver.name}
                                    </Text >
                                    <Text style={{
                                        color: '#828282',
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 12
                                    }}>
                                        {item.dateAndTime.substring(0, item.dateAndTime.indexOf('T'))}{"  "}
                                        {item.dateAndTime.substring(item.dateAndTime.indexOf('T') + 1, item.dateAndTime.indexOf('Z') - 7)}
                                    </Text>
                                    <Text style={{
                                        color: '#828282',
                                        fontFamily: "Montserrat-Regular", fontWeight: 'bold',
                                        fontSize: 12
                                    }}>
                                        Car {item.carModel}
                                    </Text>
                                    <Text style={{
                                        color: "#828282",
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 12
                                    }}>
                                        From TO
                                    </Text>

                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        showNotification("Request sent successfully")
                                    }}
                                    style={{ width: 100, justifyContent: 'center', height: 35, backgroundColor: "green" }}>
                                    <Text style={{ fontFamily: "Montserrat-Regular", alignSelf: "center", color: '#FFFFFF' }}>Request</Text>
                                </TouchableOpacity>
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
                            <Text>Rs 200</Text>
                            <Text>Pickup</Text>
                            <Text>Stops</Text>
                        </View>
                    </View>)}
                keyExtractor={item => item._id}
            />
        </View >
    )
}