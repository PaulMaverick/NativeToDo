import { setPadding } from "@/utils/utils";
import { FontAwesome } from "@expo/vector-icons";
import { View, Pressable, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function HeaderInputText() {
    return (
        <View style={[styles.inputContainer, setPadding(0, 10)]}>
            <View style={{ flex: 1}}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="What's on your mind?"
                    placeholderTextColor="white"
                />
            </View>
            <Link href='/createTodo' style={styles.iconContainer} >
                <FontAwesome name="plus" color="white" size={15}/>
            </Link>
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