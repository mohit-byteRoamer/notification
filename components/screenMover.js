import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ScreenMover = props => {
  return (
    <View style={styles.container}>
      {props.screen == 'firstPage' ? null : (
        <TouchableOpacity onPress={props.firstPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            First Page
          </Text>
        </TouchableOpacity>
      )}
      {props.screen == 'secondPage' ? null : (
        <TouchableOpacity onPress={props.secondPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            Second Page
          </Text>
        </TouchableOpacity>
      )}
      {props.screen == 'thirdPage' ? null : (
        <TouchableOpacity onPress={props.thirdPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            Third Page
          </Text>
        </TouchableOpacity>
      )}
      {props.screen == 'fourthPage' ? null : (
        <TouchableOpacity onPress={props.fourthPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            Fourth Page
          </Text>
        </TouchableOpacity>
      )}
      {props.screen == 'fifthPage' ? null : (
        <TouchableOpacity onPress={props.fifthPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            Fifth Page
          </Text>
        </TouchableOpacity>
      )}
      {props.screen == 'sixthPage' ? null : (
        <TouchableOpacity onPress={props.sixthPageNavigation}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderWidth: 1,
              padding: 10,
              borderRadius: 6,
              margin: 10,
            }}>
            Sixth Page
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ScreenMover;
