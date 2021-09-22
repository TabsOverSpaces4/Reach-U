import { Dimensions, ToastAndroid, PixelRatio } from 'react-native';

export const showNotification = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

export const customSize = (size) => {
    const newSize = size * (Dimensions.get("window").width / 320)
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}



export const width = Dimensions.get("screen").width
export const height = Dimensions.get("screen").height


export const COLORS = {

    WHITE: "#ffffff",
    GREY: "#455a64",
    BLACK: "#414141",
    ORANGE: "#F45C2C",
    CART_ORANGE: "#F45C2C",
    CART_GREEN: "#54CA6F"





}
export const FONT = {

    txtfontSize: 14,
    btnfontSize: 16
}

export const BASE_URL = "https://iota-reach-u.herokuapp.com/"