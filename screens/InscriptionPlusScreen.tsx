import { StyleSheet, View } from "react-native"
import { ButtonComponent } from "../components/ButtonComponent"
import { DateInput } from "../components/DateInputComponet";
import { DropdownComponent } from "../components/DropdownComponent";
import { InputTextComponent } from "../components/InputTextComponent"
import { Logo } from "../components/LogoComponent";


export const InscriptionPlusScreen = ({navigation}: any) => {
    
    return (
        <View style={styles.inputContainer}>
            <Logo/>
            <View style={styles.inputText}>
                <DropdownComponent/>
                <InputTextComponent 
                    labelname="Prénom"
                    iconName= ""  
                />
                <InputTextComponent 
                    labelname="Nom"
                    iconName=""  
                />
                <DateInput/>
            </View>
            <ButtonComponent textButton="Terminé" toto={() => navigation.navigate("Validation")}/>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    inputContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    inputText: {
        marginLeft: 10,
        marginRight: 10,
    },
})