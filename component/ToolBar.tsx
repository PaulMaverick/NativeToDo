import {View, Text, StyleSheet} from 'react-native';

export default function ToolBarView() {
    return (
        <View style={styles.toolBarContainer}>
            <Text style={styles.toolBarText}>Toolbar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    toolBarContainer: {

    },
    toolBarText: {
        color: 'white'
    }
})