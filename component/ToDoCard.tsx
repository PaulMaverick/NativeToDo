import { Text, View } from 'react-native';
import Animated from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useState } from "react";
import { Todo } from "@/types/types";

type Props = {
    todo: Todo
}

export default function TodoCardView({todo}: Props) {
    const {title, description} = todo;
    const [expanded, setExpanded] = useState<boolean>(false);
    const tap = Gesture.Tap()
        .numberOfTaps(1)
        .onStart(() => {    
            setExpanded(!expanded);
        })

    return (
        <GestureDetector gesture={tap}>
            <Animated.View>
                <View>
                    <Text>{title}</Text>
                </View>
                {
                    expanded ? (
                        <Animated.View>
                            <Animated.Text>{description}</Animated.Text>
                        </Animated.View>
                    ) : (
                        <></>
                    )
                }
            </Animated.View>
        </GestureDetector>
    )
}