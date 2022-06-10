import { Image, StyleSheet,View } from "react-native"

export const Success = () => {
    return (
        <View style={styles.logoContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../assets/success.png")}/>
        </View>
        
    )
    
}

const styles = StyleSheet.create ({
    logoContainer: {
        backgroundColor: "#554c7b",
        width: "100%",
        alignItems: "center",
        flex: 1,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 30
    },
    logo: {
        width: "100%",
        height: "100%",
    },
})