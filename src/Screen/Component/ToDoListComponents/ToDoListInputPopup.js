import React, { useContext } from 'react';
import DialogInput from 'react-native-dialog-input';
import { DataContaxt } from '../../../../context-provider';

const ToDoListInputPopup = ({ isDialogVisible, togglePopup }) => {
  const { setToDoItemsData, toDoItemsData } = useContext(DataContaxt);
  return (
    <DialogInput
      setIsDialogVisible={isDialogVisible}
      title={'To Do Item Title'}
      hintInput={'Enter Item Title'}
      submitInput={inputText => {
        toDoItemsData.push({ title: inputText, id: toDoItemsData.length + 1, selected: false })
        setToDoItemsData(toDoItemsData);
        togglePopup()
      }}
      closeDialog={() => togglePopup()}></DialogInput>
  );
};

export default ToDoListInputPopup;
