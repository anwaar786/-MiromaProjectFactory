import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { DataContaxt } from '../../../../context-provider';
import ParentStyleSheet from '../../../StyleSheets/ParentStyleSheet';

const ToDoListFooter = ({ handleNextPress }) => {
  const { setToDoItemsData, toDoItemsData } = useContext(DataContaxt);
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 5,
        flex: 1,
      }}>
      <TouchableOpacity onPress={() => handleNextPress()} style={ParentStyleSheet.NextButton}>
        <Text
          style={{
            fontWeight: '600',
            color: 'black',
            fontSize: 18,
            paddingHorizontal: 40,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoListFooter;
