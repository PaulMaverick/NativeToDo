import { View, StyleSheet, FlatList, Text, Pressable, ScrollView } from "react-native";

import { Todo } from "@/types/types";
import TodoItemView from "./TodoItem";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
    data: Todo[]
    createTodo: () => void;
    updateTodo: (id: number, name: string, value: string | boolean) => void;
    deleteTodo: (id: number) => void;
}

export default function TodoListView({data, createTodo, updateTodo, deleteTodo}: Props) {
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>To Dos:</Text>
            </View>
            <View style={styles.todosContainer}>
                <FlatList
                    showsVerticalScrollIndicator={true}
                    data={data}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({item}) => (
                        <TodoItemView data={item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    )}

                    ListFooterComponent={ 
                    <Pressable onPress={createTodo} style={styles.emptyCard}>
                        <FontAwesome name="plus" color="white" size={15}/>
                        <Text style={styles.emptyCardText}>Create A new Todo</Text>
                    </Pressable>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        width: '100%',
        flex: 1,
        backgroundColor: '#1a1919',
        borderWidth: 2,
        borderColor: '#4f4d4d',
        overflow: 'hidden',
    },
    header: {
        padding: 5,
        backgroundColor: '#292929',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomColor: '#4f4d4d',
        borderBottomWidth: 2,
    },
    headerText: {
        color: 'white'
    },
    todosContainer: {
        padding: 10,
        overflow: 'hidden',
    },
    emptyCard: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#292929',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4f4d4d',
    },
    emptyCardText: {
        color: 'white'
    },
    listContainer: {
        overflow: 'hidden',
        gap: 7,
        paddingBottom: 30,
    }

})