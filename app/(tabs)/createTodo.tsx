import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Todo } from "@/types/types";

export default function CreateTodoScreen() {
    const todoItem = {
        title: '',
        description: '',
    }

    const [todo, setTodo] = useState<Todo>(todoItem)

    const updateTodo = (name: string, value: string) => {
       
    }

    const createTodo = () => {
       
    }

    return (
        <View style={styles.container}>
            <View >
                <View>
                    <Text >Title:</Text>
                    <TextInput 
                        placeholder="Title" 
                        placeholderTextColor="white"
                        value={todo.title}
                        onChange={(e) =>  updateTodo("title", e.nativeEvent.text)}/>
                </View>
                <View>
                    <Text >Description:</Text>
                    <TextInput 
                        placeholder="description" 
                        placeholderTextColor="white"
                        multiline
                        value={todo.description}
                        onChange={(e) =>  updateTodo("description", e.nativeEvent.text)}
                    />
                </View>

                <View >
                    <Pressable onPress={() => createTodo()}>
                        <Text >Create Todo</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929'
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
        padding: 10,
    },
    text: {
        color: 'white',
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})