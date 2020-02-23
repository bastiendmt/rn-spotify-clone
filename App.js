import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import PlaylistDetail from "./components/PlaylistDetail";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PlaylistDetail" component={PlaylistDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
