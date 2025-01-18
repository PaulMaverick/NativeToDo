import { View, StyleSheet, TextInput, Text, Pressable, LayoutChangeEvent} from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import  { CheckBox } from 'rn-inkpad'
import { Todo } from "@/types/types";
import { FontAwesome } from "@expo/vector-icons";
import { setPadding } from '../../utils/utils';
import { useState } from "react";


type Props = {
    data: Todo,
    updateTodo: (id: number, name: string, value: string | boolean) => void;
    deleteTodo: (id: number) => void;
}

export default function TodoItemView({data, updateTodo, deleteTodo}: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false); 
    const [height, setHeight] = useState<number>(0);

    const infoStyle = useAnimatedStyle(() => {
        const animatedHeight = show ? withTiming(height) : withTiming(0);
        return {
            height: animatedHeight,
        }
    })

    const onLayout = (event: LayoutChangeEvent) => {
        const layoutHeight = event.nativeEvent.layout.height;
        if(layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight)
        }
    }

    const onShow = () => {
        setShow(!show)
    }

    return (
    <View style={[styles.container]}>
        <View style={styles.upperContainer}>
            <View style={styles.textContainer}>
                {data.isDone ? <FontAwesome name="check" size={20} color="white"/> 
                : <FontAwesome name="question-circle" size={20} color={'white'}/>}
                {isEditing ? (
                    <TextInput
                        style={styles.todoInput}
                        placeholder="todo...."
                        value={data.todo}
                        placeholderTextColor="gray"
                        onChange={(e) => updateTodo(data.id, "todo", e.nativeEvent.text)}
                    />
                ): (
                    <View style={styles.textInnerContainer}>
                        <Text style={styles.text}>{data.todo ? data.todo : 'todo...'}</Text>
                    </View>

                )}
            </View>
            <View style={[styles.iconContainer, setPadding(0, 10)]}>
                {isEditing ? (
                    <Pressable onPress={() => setIsEditing(!isEditing)}>
                        <FontAwesome name="check" size={20} color="white" />
                    </Pressable>
                ): (
                    <Pressable onPress={() => setIsEditing(!isEditing)}>
                        <FontAwesome name="edit" size={20} color="white" />
                    </Pressable>
                )}
                <Pressable onPress={onShow}>
                    <FontAwesome name="expand" size={20} color="white" />
                </Pressable>
            </View>
        </View>


        
        <Animated.View style={[infoStyle, {overflow: 'hidden'}]}>
            <View onLayout={onLayout} style={[styles.expandContainer, setPadding(20, 15, 0, 15)]}>
                <View style={styles.isDoneContainer}>
                    <CheckBox 
                        checked={data.isDone}
                        title="Mark done."
                        textColor='white'
                        onChange={(value) => updateTodo(data.id, "isDone", value)}
                    />
                </View>
                <Pressable onPress={() => deleteTodo(data.id)} style={styles.deleteContainer}>
                    <FontAwesome name="trash-o" size={20} color="white" />
                    <Text style={styles.deleteText}>Delete To do?</Text>
                </Pressable>
            </View>
        </Animated.View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#292929',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4f4d4d',
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
        flex: 1,
    },
    textInnerContainer: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    todoInput: {
        height: 40,
        flex: 1,
        borderBottomColor: "#4f4d4d",
        borderBottomWidth: 2,
        color: 'white',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    extraInfo: {
        color: 'white'
    },
    expandContainer: {
        gap: 15,
        position: 'absolute'
    },
    isDoneContainer: {
        flexDirection: 'row',
    },
    deleteContainer: {
        flexDirection: 'row',
        gap: 7,
    },
    deleteText: {
        color: 'white',
    }
})