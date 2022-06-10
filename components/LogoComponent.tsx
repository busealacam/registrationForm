import { Image, StyleSheet,View } from "react-native"

export const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
        </View>
        
    )
    
}

const styles = StyleSheet.create ({
    logoContainer: {
        backgroundColor: "#554c7b",
        width: "100%",
        alignItems: "center",
        flex: 1,
    },
    logo: {
        width: "100%",
        height: "100%",
    },
})