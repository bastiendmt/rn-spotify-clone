import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./containers/Home";
import PlaylistDetail from "./components/PlaylistDetail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PlaylistDetail" component={PlaylistDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
