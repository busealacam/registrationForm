import { Pressable, StyleSheet, Text } from "react-native";

interface IButton {
    textButton: string,
    toto: () => void,
}

export const ButtonComponent = ({textButton, toto }: IButton): JSX.Element => {   
   
    return (
        <Pressable
            onPress={toto}
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonTextStyle}>{textButton}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    buttonStyle: {
        backgroundColor: "#554c7b",
        width: "70%",
        height: 50,
        borderRadius: 20,
        margin: 20,
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonTextStyle: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    }
})