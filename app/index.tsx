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
const currentTheme = gblDefaults.darkTheme;


export default function Index() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [data, setData] = useState<Todo[]>([])
  const {height, width} = useWindowDimensions();

  const openModal = () => {
    setIsVisible(true);
  }

  const closeModal = () => {
    setIsVisible(false)
  }


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
      <HeaderView currentTheme={currentTheme} openModal={openModal}/>
      <View>
        <View>
          <ToolBarView />
          <CreateTodoModal isVisible={isVisible} close={closeModal} setData={setData} data={data}/>
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