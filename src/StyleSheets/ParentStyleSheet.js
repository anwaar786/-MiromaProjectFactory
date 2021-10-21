import React from 'react'
import { StyleSheet } from 'react-native'
import colors from './Colors';

const ParentStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,

  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  headerTextView: {
    flexDirection: 'column',
  },
  headerText1: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerText2: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerImageView: {
    top: '30%',
    backgroundColor: colors.dimgray,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'relative',
  },
  thingsItemStyle: {
    top: 10,
  },
  selectedText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 44,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: colors.dimgray,
    marginVertical: 6,
  },
  notSelectedText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 44,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: colors.gray,
    marginVertical: 6,
  },
  NextButton: {
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  BottomStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});

export default ParentStyleSheet;