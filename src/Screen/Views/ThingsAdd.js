import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataContaxt } from '../../../context-provider';
import parentStyleSheet from '../../StyleSheets/ParentStyleSheet';
import ToDoListFooter from '../Component/ToDoListComponents/ToDoListFooter';
import ToDoListHeader from '../Component/ToDoListComponents/ToDoListHeader';
import ToDoListInputPopup from '../Component/ToDoListComponents/ToDoListInputPopup';

const ThingsAdd = ({ navigation }) => {
  const { toDoItemsData, setToDoItemsData } = useContext(DataContaxt);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const onPressHandler = (id) => {
    let renderData = [...toDoItemsData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = (data.selected == null) ? true : !data.selected;
        break;
      }
    }
    setToDoItemsData(renderData);
  }

  const renderItem = (item) => {
    return <TouchableOpacity onPress={() => onPressHandler(item.id)}>
      <Text style={item.selected == true ? parentStyleSheet.selectedText : parentStyleSheet.notSelectedText}>{item.title}</Text>
    </TouchableOpacity>
  };
  const togglePopup = () => {
    setIsDialogVisible(!isDialogVisible);
  }
  const handleNextPress = () => {
    var selectedToDoItems = toDoItemsData.filter(todoItems => todoItems.selected == true);
    if (selectedToDoItems.length < 3) {
      Alert.alert("Please select minumum 3 Items to proceed")
    }
    else {
      setSelectedItems(selectedToDoItems);
      navigation.navigate("SelectedThings", { selectedToDoItems: selectedToDoItems });
    }
  }

  return (
    <View style={parentStyleSheet.container}>
      <ImageBackground
        source={require('../../Images/Artboard.jpg')}
        resizeMode="stretch"
        style={parentStyleSheet.image}>
        <ToDoListHeader togglePopup={() => togglePopup()} />
        <View style={{ flex: 3 }}>
          <FlatList
            data={toDoItemsData}
            renderItem={({ item }) => renderItem(item)}
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id}
          />
        </View>
        {isDialogVisible == true && <ToDoListInputPopup togglePopup={() => togglePopup()} isDialogVisible={isDialogVisible} />}
        <ToDoListFooter handleNextPress={() => handleNextPress()} />
      </ImageBackground>
    </View>
  );
};

export default ThingsAdd;
