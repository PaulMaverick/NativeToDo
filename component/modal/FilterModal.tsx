import { Modal, View, Text, Pressable, TextInput, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import  { CheckBox } from 'rn-inkpad'
import { useState } from 'react';
import { setPadding } from '@/utils/utils';


type Props = {
    showFilter: boolean;
    toggleFilter: () => void;
}

export default function FilterModal({showFilter, toggleFilter}: Props) {
    const [filters, setFilters] = useState({
        byDate: false,
        byAlphabetical: false,
        byNumber: false,
        tags: []
    })

    const filter = () => {

    }

    return (
        <Modal 
            visible={showFilter}
            animationType="slide"
            onRequestClose={toggleFilter}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Filter</Text>
                        <Pressable onPress={toggleFilter}>
                            <FontAwesome name="close" size={15} color="white"/>
                        </Pressable>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox 
                            title="By Date"
                            textColor='white'
                            onChange={filter}
                        />
                        <CheckBox 
                            title="By Alphabetical Order"
                            textColor='white'
                            onChange={filter}
                        />
                        <CheckBox 
                            title="By Number of Todos"
                            textColor='white'
                            onChange={filter}
                        />
                        
                    </View>
                    <View style={styles.filterContainer}>
                        <View style={styles.filterHeader}>
                            <Text style={styles.text}>Add Tags to filter</Text>
                            <Pressable>
                                <FontAwesome name="plus" size={20} color="white" />
                            </Pressable>
                        </View>
                        <FlatList 
                            showsVerticalScrollIndicator={true}
                            data={filters.tags}
                            contentContainerStyle={styles.listContainer}
                            renderItem={(item) => (
                                <View></View>
                            )}
                        >

                        </FlatList>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable style={[styles.applyBtn, setPadding(10, 25)]}>
                            <Text style={styles.btnText}>Apply Filter</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    formContainer: {
        width: '90%',
        backgroundColor: '#292929',
        borderColor: '#4f4d4d',
        borderWidth: 2,
        borderRadius: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#4f4d4d',
        borderBottomWidth: 2,
        padding: 10,
    },
    text: {
        color: 'white',
    },

    checkboxContainer: {
        padding: 15,
        gap: 15,
    },


    filterContainer: {
        padding: 15,
    },

    filterHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    listContainer: {
        backgroundColor: "#1a1919",
        height: 150,
        overflow: 'hidden',
        gap: 7,
        paddingBottom: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },

    applyBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
    },

    btnText: {
        fontSize: 15,
    }
})