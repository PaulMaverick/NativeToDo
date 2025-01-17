import { Modal, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Todo } from "@/types/types";

type Props = {
    isVisible: boolean;
    close: () => void;
    setData: Dispatch<SetStateAction<Todo[]>>;
    data: Todo[]
}

export default function CreateTodoModal({isVisible, close, data, setData}: Props) {
    const todoItem = {
        title: '',
        description: '',
    }

    const [todo, setTodo] = useState<Todo>(todoItem)

    const updateTodo = (name: string, value: string) => {
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    }

    const createTodo = () => {
        const newData = [...data];

        newData.push(todo);

        setData(newData);
        setTodo(todoItem)
        close()
    }

    return (
        <Modal 
            visible={isVisible}
            animationType="fade"
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
                            <TextInput 
                                placeholder="Title" 
                                placeholderTextColor="white"
                                value={todo.title}
                                onChange={(e) =>  updateTodo("title", e.nativeEvent.text)}/>
                        </View>
                        <View>
                            <Text style={styles.text}>Description:</Text>
                            <TextInput 
                                placeholder="description" 
                                placeholderTextColor="white"
                                multiline
                                value={todo.description}
                                onChange={(e) =>  updateTodo("description", e.nativeEvent.text)}
                            />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable onPress={() => createTodo()}>
                            <Text style={styles.text}>Create Todo</Text>
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