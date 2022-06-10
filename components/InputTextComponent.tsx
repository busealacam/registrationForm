import { useState } from "react"
import { View } from "react-native"
import { TextInput } from "react-native-paper"
// import validator from 'validator';

type IInput = {
    labelname : string,
    iconName? : string,
    typeInput : "email" | "password"| "text",
}

export const InputTextComponent = ({ labelname, iconName, typeInput}: IInput) => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [errorInput, setErrorInput] = useState(true);

    return (
        <View>
            <TextInput
                label={labelname}
                mode="outlined"
                secureTextEntry={typeInput === "password" && passwordVisible}
                keyboardType={typeInput === "email" ? "email-address" : "default"}
                right={<TextInput.Icon name={typeInput != "password" ? {iconName} : (passwordVisible ? "eye" : "eye-off")} onPress={() => setPasswordVisible(!passwordVisible)}/>}
                error={errorInput}
            />
        </View>
    )
}
