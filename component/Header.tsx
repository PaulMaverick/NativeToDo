import { View, Text, StyleSheet, TextInput } from 'react-native';
import { type ComponentProps } from 'react';
import { setPadding } from '@/utils/utils';
import HeaderInputText from './HeaderInputField';

type Props = {
    currentTheme: {
        txtColor: string
    };

}

export default function HeaderView({ currentTheme}: Props) {
    return (
        <View style={[styles.headerContainer, setPadding(10, 15)]}>
           <HeaderInputText />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomColor: '#4f4d4d',
        borderBottomWidth: 2,
    }
})