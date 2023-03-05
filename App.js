import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import requestUserPermission from './untils/notificationService';
const App = props => {
  const {onPress, title} = props;
  React.useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{backgroundColor: '#2196F3', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          PushNotification
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
