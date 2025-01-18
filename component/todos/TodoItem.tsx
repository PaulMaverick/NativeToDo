import { View, StyleSheet, FlatList, Text } from "react-native";
import { Todo } from "@/types/types";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    data: Todo
}

export default function TodoItemView({data}: Props) {

    return (
    <View style={styles.container}>
        <Text style={styles.todoText}>{data.todo}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    todoText: {

    }
})