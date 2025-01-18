import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";

import { Todo } from "@/types/types";
import TodoItemView from "./TodoItem";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    data: Todo[]
    createTodo: () => void;
}

export default function TodoListView({data, createTodo}: Props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>To Dos:</Text>
            </View>
            <View style={styles.todosContainer}>
                {data.length === 0 ? (
                    <Pressable onPress={createTodo} style={styles.emptyCard}>
                        <FontAwesome name="plus" color="white" size={15}/>
                        <Text style={styles.emptyCardText}>Create A new Todo</Text>
                    </Pressable>
                ) : (
                    <FlatList
                    showsVerticalScrollIndicator={true}
                    data={data}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({item}) => (
                        <TodoItemView data={item}/>
                    )}
                />
                )}
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
        padding: 10
    },
    emptyCard: {
        height: 45,
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

    }

})