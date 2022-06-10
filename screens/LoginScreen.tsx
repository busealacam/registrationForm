import { useState } from "react"
import { View, StyleSheet, Image, Pressable } from "react-native"
import { Text } from "react-native-paper"
import { ButtonComponent } from "../components/ButtonComponent"
import { InputTextComponent } from "../components/InputTextComponent"
import { Logo } from "../components/LogoComponent"


export const LoginScreen = ({navigation}: any) => {
    const [passwordValid, setPasswordValid] = useState(Boolean);

    return (
        <View style={styles.homeContainer}>
            <Logo/>
            <View style={styles.inputText}>
                <InputTextComponent
                    labelname="Email"  
                    typeInput="email"

                />
                <InputTextComponent 
                    labelname="Mot de passe"
                    iconName="eye"
                    typeInput="password" 
 
                />
            </View>
            <ButtonComponent textButton="Se Connecter" toto={() => navigation.navigate("Home")}/>
        </View>
        
    )
} 

const styles = StyleSheet.create ({
    homeContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    inputText: {
        marginLeft: 10,
        marginRight: 10,
    }
})

