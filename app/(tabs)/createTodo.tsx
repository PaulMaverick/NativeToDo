import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { TodoGroup, Todo } from "@/types/types";
import { setID } from "@/utils/utils";
import TodoListView from "@/component/todos/TodoList";

export default function CreateTodoScreen() {
    const todoItem = {
        id: setID(),
        title: '',
        description: '',
        todos: [],
        reminder: false,
    }

    const [todoGroup, setTodoGroup] = useState<TodoGroup>(todoItem)
    const [todos, setTodos] = useState<Todo[]>([])

    const updateGroupTodo = (name: string, value: string) => {
       setTodoGroup(prev => ({
        ...prev,
        [name]: value,
       }))
    }

    const createGroupTodo = () => {
       
    }

    const createTodo = () => {
        const newTodo = {
            id: setID(),
            todo: '',
            isDone: false,
        }

        const newData = [...todos];

        newData.push(newTodo);

        setTodos(newData);
    }

    const updateTodo = () => {

    }

    const deleteTodo = () => {

    }

    return (
        <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>Title:</Text>
                    <TextInput 
                        placeholder="Title" 
                        style={styles.inputText}
                        placeholderTextColor="white"
                        value={todoGroup.title}
                        onChange={(e) =>  updateGroupTodo("title", e.nativeEvent.text)}/>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>Description:</Text>
                    <TextInput 
                        placeholder="description" 
                        style={styles.inputText}
                        placeholderTextColor="white"
                        multiline
                        value={todoGroup.description}
                        onChange={(e) =>  updateGroupTodo("description", e.nativeEvent.text)}
                    />
                </View>

                <TodoListView data={todos} createTodo={createTodo} />

                <View >
                    <Pressable onPress={() => createTodo()}>
                        <Text >Create Todo</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        padding: 15,
    },
    fieldContainer: {
        gap: 10,
        marginBottom: 15,
    },
    fieldText: {
        color: 'white',
        fontSize: 15,
    },
    inputText: {
        borderRadius: 10,
        backgroundColor: '#4f4d4d',
        alignItems: 'center',
        padding: 15,     
    }
})