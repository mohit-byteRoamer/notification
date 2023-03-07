import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './untils/rootNavigation';
import FirstPage from './screen/firstPage';
import SecondPage from './screen/secondPage';
import ThirdPage from './screen/thirdPage';
import FourthPage from './screen/fourthPage';
import FifthPage from './screen/fifthPage';
import SixthPage from './screen/sixthPage';

const Stack = createStackNavigator();
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
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="FourthPage" component={FourthPage} />
        <Stack.Screen name="FifthPage" component={FifthPage} />
        <Stack.Screen name="SixthPage" component={SixthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
