import { View, Text, StyleSheet } from 'react-native';

type Props = {
    currentTheme: {
        txtColor: string
    };
}

export default function FooterView({currentTheme}: Props) {
    return (
        <View style={styles.footerContainer}>
            <Text style={{color: currentTheme.txtColor}}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        bottom: 60,
    }
})