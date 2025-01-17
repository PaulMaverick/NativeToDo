import { Todo } from "@/types/types";
import { Platform, FlatList, StyleSheet } from "react-native";
import TodoCardView from "./ToDoCard";


type Props ={
    data: Todo[]
}

export default function TodoListView({data}: Props) {
    return (
        <FlatList
            showsVerticalScrollIndicator={Platform.OS === 'web'}
            data={data}
            contentContainerStyle={styles.container}
            renderItem={({item, index}) => (
                <TodoCardView todo={item} key={index} />
            )}
        />
    )
}   

const styles = StyleSheet.create({
    container: {

    }
})