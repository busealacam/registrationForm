import { View, StyleSheet, Image } from "react-native"
import { ButtonComponent } from "../components/ButtonComponent"
import { InputTextComponent } from "../components/InputTextComponent"
import { Logo } from "../components/LogoComponent"

export const InscriptionScreen = ({navigation}: any) => {
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
                <InputTextComponent 
                    labelname="Confirmation du mot de passe"
                    iconName="eye" 
                    typeInput="password"  
                />
            </View>
            <ButtonComponent textButton="Suivant" toto={() => navigation.navigate("Inscription Next")}/>
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