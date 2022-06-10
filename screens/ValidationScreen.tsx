import { StyleSheet, View, Text } from "react-native"
import { ButtonComponent } from "../components/ButtonComponent"
import { Success } from "../components/SuccessComponent"

export const ValidationScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Success/>
            <Text  style={styles.validationText}>Votre comte a été crée avec succès</Text>
            <ButtonComponent textButton="Se Connecter" toto={() => navigation.navigate("Login")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    validationText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 50,
        color: "#376e37",
        paddingLeft: 30,
        paddingRight: 30,
    }
})