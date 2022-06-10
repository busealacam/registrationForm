import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const DateInput = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      hideDatePicker();
      console.log(date);
    };
    return (
        <View>
            <Pressable
            style={[styles.inputSearchstyle, 
            styles.datepicker]} 
            onPress={showDatePicker}
            >
                <Text style={[styles.buttonText, styles.datepickerText]}>Date de naissance</Text>
            </Pressable>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                
            />
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
    inputSearchstyle: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        height: 55,
        borderColor: "#717171",
        backgroundColor: "#f6f6f6" 
    },
    buttonText: {
        color: "#717171",
        textAlign: "left"
    },
    datepickerText: {
        fontSize: 16,
        paddingLeft: 14,
    },
    datepicker: {
        justifyContent: "center"
    } 
})