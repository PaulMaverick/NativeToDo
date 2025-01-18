import { Text, View, TouchableWithoutFeedback, StyleSheet, LayoutChangeEvent } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useState } from "react";
import { TodoGroup } from "@/types/types";

type Props = {
    todo: TodoGroup
}

export default function TodoGroupCardView({todo}: Props) {
    const {title, description} = todo;
    const [expanded, setExpanded] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0)

    const onItemPress = () => {
        setExpanded(!expanded)
    }

    const onLayout = (event: LayoutChangeEvent) => {
        const layoutHeight = event.nativeEvent.layout.height;

        if(layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight)
        }
    }

    const descStyle = useAnimatedStyle(() => {
        const animatedHeight = expanded ? withTiming(height) : withTiming(0);
        return {
            height: animatedHeight,
            backgroundColor: 'red',
        }
    })


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onItemPress}>
                <View>
                    <Text style={styles.cardHeader}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={[descStyle, {overflow: 'hidden'}]}>
                <View onLayout={onLayout} style={{position: 'absolute'}}>
                    <Text style={styles.cardDesc}>{description}</Text>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    cardHeader: {
        color: 'white'
    },
    cardDesc: {
        color: 'white'
    },
    
})