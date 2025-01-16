import { setPadding } from "@/utils/utils";
import { FontAwesome } from "@expo/vector-icons";
import { View, Pressable, TextInput, StyleSheet } from "react-native";

type Props = {
    openModal: () => void;
}

export default function HeaderInputText({openModal}: Props) {
    return (
        <View style={[styles.inputContainer, setPadding(0, 10)]}>
            <View style={{ flex: 1}}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="What's on your mind?"
                    placeholderTextColor="white"
                />
            </View>
            <Pressable style={styles.iconContainer} onPress={openModal}>
                <FontAwesome name="plus" color="white" size={15}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 15,
        backgroundColor: '#4f4d4d',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        height: 40,
    },
    iconContainer: {  
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})