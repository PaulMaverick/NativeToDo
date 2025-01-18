import { Tabs} from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#292929',
                    borderBottomColor: '#4f4d4d',
                    borderBottomWidth: 2,
                },
                headerTintColor: 'white',
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: "#292929",
                }
            }}
        >
            <Tabs.Screen name="index" options={{
                 title: 'To Do',
                 tabBarIcon: ({color, focused}) => (
                    <FontAwesome name="list" color={color} size={20}/>
                 ) 
                }}/>
            <Tabs.Screen name="createTodo" options={{
                 title: 'Create',
                 tabBarIcon: ({color, focused}) => (
                    <FontAwesome name="plus" color={color} size={20}/>
                 ) 
                }}/>
            <Tabs.Screen name="settings" options={{
                 title: 'About',
                 tabBarIcon: ({color, focused}) => (
                    <FontAwesome name="ellipsis-v" color={color} size={20}/>
                 ) 
                 
                }}/>
        </Tabs>
    )
}
