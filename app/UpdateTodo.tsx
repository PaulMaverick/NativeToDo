import { View, Text, StyleSheet } from 'react-native';

export default function UpdateTodoScreen() {
    return (
        <View style={styles.container}>
            <Text>UpdateTodo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    }
})