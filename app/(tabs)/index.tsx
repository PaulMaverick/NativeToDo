//react-navive - react
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";

//components
import CreateTodoModal from "@/component/CreateTodoModal";
import FooterView from "@/component/Footer";
import HeaderView from "@/component/Header";
import ToolBarView from "@/component/ToolBar";

//themes - defaults
import { gblDefaults } from "@/constants/globas";
import { Todo } from "@/types/types";
import TodoListView from "@/component/TodoLIst";
const currentTheme = gblDefaults.darkTheme;


export default function Index() {

  const [data, setData] = useState<Todo[]>([])
  const {height, width} = useWindowDimensions();

  return (
        <View
			style={
			[
				styles.container, 
				{
				backgroundColor: currentTheme.bgColor,
				height: height,
				width: width,
				}
			]}
			>
			<HeaderView currentTheme={currentTheme}/>
			<View>
				<View>
					<ToolBarView />
				</View>
				<View>
					<TodoListView data={data}/>
				</View>
			</View>
        <FooterView currentTheme={currentTheme}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      margin: 0,
      padding: 0,
  }
})