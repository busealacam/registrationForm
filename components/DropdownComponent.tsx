import SelectDropdown from "react-native-select-dropdown";
import { IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";


export const DropdownComponent = () => {
    const sex = ["Monsieur", "Madame"]

    return (
        <SelectDropdown
        data={sex}
        defaultButtonText="Civilité"
        renderDropdownIcon={isOpened => {
            return <IconButton icon={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={30} />;
          }}
        buttonStyle={styles.inputSearchstyle}
        buttonTextStyle={styles.buttonText}
        onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
        dropdownIconPosition={'right'}
    />
    )
}

const styles = StyleSheet.create ({
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
})