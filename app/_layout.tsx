import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/reducers/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#292929',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="UpdateTodo" options={{title: 'Update Todo'}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}
