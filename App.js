import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  requestUserPermission,
  notificationListener,
} from './untils/notificationService';
const App = props => {
  React.useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <TouchableOpacity>
      <View style={{backgroundColor: '#2196F3', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          PushNotification
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
