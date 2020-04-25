import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';


const Stack = createStackNavigator();

export default function homeNavigator() {

  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {backgroundColor: '#eee',},
        headerTintColor: '#444',
      }}
      >
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={({ navigation }) => ({ 
              headerTitle: () => <Header navigation={navigation} title='GameZone' />,
              headerTitleAlign: 'center',
            })}
        />
        <Stack.Screen 
            name='ReviewDetails' 
            component={ReviewDetails} 
            options={{ 
              title: 'Review Details'
            }}
        />
      </Stack.Navigator>
  );
}

