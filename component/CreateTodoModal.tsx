import { Modal, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    isVisible: boolean;
    close: () => void
}

type Todo = {
    title: string;
    description: string;
}

export default function CreateTodoModal({isVisible, close}: Props) {
    const [todo, setTodo] = useState<Todo>({
        title: '',
        description: '',
    })

    const updateTodo = () => {

    }

    const createTodo = () => {

    }
    
    return (
        <Modal 
            visible={isVisible}
            animationType="slide"
            onRequestClose={close}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Create To Do</Text>
                        <Pressable onPress={close}>
                            <FontAwesome name="close" size={15} color="white"/>
                        </Pressable>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.text}>Title:</Text>
                            <TextInput placeholder="Title" placeholderTextColor="white"/>
                        </View>
                        <View>
                            <Text style={styles.text}>Description:</Text>
                            <TextInput 
                                placeholder="description" 
                                placeholderTextColor="white"
                                multiline
                            />
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={() => createTodo()}>
                            <Text>Create Todo</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    formContainer: {
        width: '90%',
        backgroundColor: '#292929',
        borderColor: '#4f4d4d',
        borderWidth: 2,
        borderRadius: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#4f4d4d',
        borderBottomWidth: 2,
        padding: 10
    },
    text: {
        color: 'white'
    }
})