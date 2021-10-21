import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { DataContaxt } from '../../../../context-provider';
import Colors from '../../../StyleSheets/Colors';
import parentStyleSheet from '../../../StyleSheets/ParentStyleSheet';

const ToDoListHeader = ({ togglePopup }) => {
  const { setToDoItemsData, toDoItemsData } = useContext(DataContaxt);
  return (
    <View style={parentStyleSheet.header}>
      <View style={parentStyleSheet.headerTextView}>
        <Text style={parentStyleSheet.headerText1}>THINGS</Text>
        <Text style={parentStyleSheet.headerText2}>The App</Text>
      </View>
      <TouchableOpacity onPress={() => togglePopup()}>
        <View style={parentStyleSheet.headerImageView}>
          <FontAwesomeIcon name={'plus'} size={30} color={Colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoListHeader;
