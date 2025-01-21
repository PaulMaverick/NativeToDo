import {  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import {View, Text, StyleSheet} from 'react-native';

export default function ToolBarView() {
    return (
        <View style={styles.toolBarContainer}>
           <View>
            {/*updates */}
             
             <MaterialCommunityIcons name="update" size={20} color="white" />
           </View>
           <View>
                <AntDesign name="filter" size={20} color="white" />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toolBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#4f4d4d',
        borderBottomWidth: 2,
    },
    toolBarText: {
        color: 'white'
    }
})