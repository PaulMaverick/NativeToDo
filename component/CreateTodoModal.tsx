import { Modal, Text, StyleSheet } from "react-native";

type Props = {
    isVisible: boolean;
    close: () => void
}

export default function CreateTodoModal({isVisible, close}: Props) {
    return (
        <Modal 
            style={styles.modalContainer}
            visible={isVisible}
            animationType="slide"
            onRequestClose={close}
        >
            <Text>This is a modal</Text>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1
    }
})