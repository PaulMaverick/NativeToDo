import {  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import FilterModal from './modal/FilterModal';
import { Link } from 'expo-router';

export default function ToolBarView() {
    const [showFilter, setShowFilter] = useState<boolean>(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }


    return (
        <View style={styles.toolBarContainer}>
            <View>
                {/*updates */}
                <Pressable >
                    
                </Pressable>
                <Link href='/UpdateTodo'>
                    <MaterialCommunityIcons name="update" size={20} color="white" />
                </Link>
            </View>
            <View>
                <Pressable onPress={toggleFilter}>
                    <AntDesign name="filter" size={20} color="white" />
                </Pressable>
            </View>

           <FilterModal showFilter={showFilter} toggleFilter={toggleFilter}/>
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