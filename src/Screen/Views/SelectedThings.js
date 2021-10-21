import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataContaxt } from '../../../context-provider';
import Colors from '../../StyleSheets/Colors';
import parentStyleSheet from '../../StyleSheets/ParentStyleSheet';

const SelectedThings = ({ route }) => {
  const { toDoItemsData } = useContext(DataContaxt);
  const [chosenText, setChosenText] = useState("");


  const onPressHandler = (id) => {
    setChosenText(toDoItemsData.find(todoItems => todoItems.id == id).title);
  }

  const renderItem = (item) => {
    return <TouchableOpacity onPress={() => onPressHandler(item.id)}>
      <Text style={item.selected == true ? parentStyleSheet.selectedText : parentStyleSheet.notSelectedText}>{item.title}</Text>
    </TouchableOpacity>
  };

  return (
    <View style={parentStyleSheet.container}>
      <ImageBackground
        source={require('../../Images/Artboard.jpg')}
        resizeMode="stretch"
        style={[parentStyleSheet.image, { flexDirection: 'row', justifyContent: 'center' }]}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          data={route.params.selectedToDoItems}
          renderItem={({ item }) => renderItem(item)}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id}
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
          <View style={{ height: 160, alignItems: 'center', backgroundColor: Colors.dimgray, padding: 10, borderRadius: 5 }}>
            <Text style={{
              color: 'white',
              fontSize: 14,
            }}>
              Chosen Thing:
            </Text>
            <Text style={{
              color: 'white',
              fontSize: 14,
              padding: 20,
              fontWeight: 'bold'
            }}>
              {chosenText == "" ? "Select one" : chosenText}
            </Text>
          </View>

        </View>
      </ImageBackground >
    </View >
  );
};

export default SelectedThings;
