import {Image, StyleSheet, View } from "react-native"
import { ButtonComponent } from "../components/ButtonComponent"
import { Logo } from "../components/LogoComponent"

export const HomeScreen = ({ navigation }: any) => {
  
    return (
        <View style={styles.homeContainer}>
            <View style={{height: 300}}>
                <Logo/>
            </View>
            <View>
                <ButtonComponent textButton="Se connecter" toto={() => navigation.navigate("Login")}/>
                <ButtonComponent textButton="S'inscrire" toto={() => navigation.navigate("Inscription")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    homeContainer: {
        backgroundColor: "white",
        flex: 1,
    },

})