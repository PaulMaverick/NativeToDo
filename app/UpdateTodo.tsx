import { View, Text, StyleSheet, TextInput, FlatList, Pressable } from 'react-native';

export default function UpdateTodoScreen() {
    const data: string[] = []

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Title: </Text>
                    <TextInput  
                        placeholder="Title" 
                        style={styles.inputText}
                        placeholderTextColor="white"
                    />
                </View>
                <View>
                    <Text>Description: </Text>
                    <TextInput 
                        placeholder="Title" 
                        style={styles.inputText}
                        placeholderTextColor="white"
                    />
                </View>
            </View>

            <View>
                <FlatList 
                    showsVerticalScrollIndicator={true}
                    data={data}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({item}) => (
                        <View></View>
                    )}
                />

            </View>

            <View>
                <Pressable>
                    <Text>Update To do</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    }, 

    inputText: {

    },

    listContainer: {

    }
})