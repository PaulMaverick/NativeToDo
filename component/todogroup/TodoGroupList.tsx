import { TodoGroup } from "@/types/types";
import { Platform, FlatList, StyleSheet } from "react-native";
import TodoGroupCardView from "./TodoGroupCard";


type Props ={
    data: TodoGroup[]
}

export default function TodoGroupListView({data}: Props) {
    return (
        <FlatList
            showsVerticalScrollIndicator={Platform.OS === 'web'}
            data={data}
            contentContainerStyle={styles.container}
            renderItem={({item, index}) => (
                <TodoGroupCardView todo={item} key={index} />
            )}
        />
    )
}   

const styles = StyleSheet.create({
    container: {

    }
})