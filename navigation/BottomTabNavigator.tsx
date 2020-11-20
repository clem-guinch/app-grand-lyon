import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Linking, Image, FlatList, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabTreeScreen from '../screens/TabTreeScreen';
import {BottomTabParamList, TabOneParamList, TabTwoParamList, TabTreeParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Accueil"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="Accueil"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Image source={require('../assets/images/home.png')} style={{ height: 25, width: 25 }} />,
                }}
            />
            <BottomTab.Screen
                name="Restaurants"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Image source={require('../assets/images/restaurant.png')} style={{ height: 25, width: 25 }} />,
                }}
            />
            <BottomTab.Screen
                name="Recherche"
                component={TabTreeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Image source={require('../assets/images/magnifying-glass.png')} style={{ height: 25, width: 25 }} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'GrandLyon'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'GrandLyon'}}
            />
        </TabTwoStack.Navigator>
    );
}

const TabTreeStack = createStackNavigator<TabTreeParamList>();

function TabTreeNavigator() {
    return (
        <TabTreeStack.Navigator>
            <TabTreeStack.Screen
                name="TabTreeScreen"
                component={TabTreeScreen}
                options={{headerTitle: 'GrandLyon'}}
            />
        </TabTreeStack.Navigator>
    );
}