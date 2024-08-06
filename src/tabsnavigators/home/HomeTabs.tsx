  // HomeTabs.tsx
import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Menus, Profile, Setting } from './../../screens';
import DashboardStackScreen from '../../stacks/DashboardStack';
import {DashboardIcon, ProfileIcon, MenuIcon, SettingIcon} from './../../assets/icons/index';
import { TextStyle, ViewStyle } from 'react-native';

 


const Tab = createBottomTabNavigator();

// Define a type for the route names to ensure type safety
type RouteNames = 'Dashboard' | 'Profile' | 'Menu' | 'Setting';

// Reusable styles with proper type
const tabBarLabelStyle: TextStyle = {
  fontSize: 12,
  fontWeight: 'bold',
};

const baseTabBarStyle: ViewStyle = {
  backgroundColor: '#f8f8f8',
  paddingBottom: 5,
  height: 60,
};

// Define a function to select the correct icon based on the route name and focus state
const getTabBarIcon = (
  routeName: RouteNames,
  focused: boolean,
  color: string,
  size: number
) => {
  const adjustedSize = focused ? size + 4 : size; // Increase size when focused
  const adjustedColor = focused ? '#0056b3' : color; // Change color when focused

  switch (routeName) {
    case 'Dashboard':
      return <DashboardIcon width={adjustedSize} height={adjustedSize} fill={adjustedColor} />;
    case 'Profile':
      return <ProfileIcon width={adjustedSize} height={adjustedSize} fill={adjustedColor} />;
    case 'Menu':
      return <MenuIcon width={adjustedSize} height={adjustedSize} fill={adjustedColor} />;
      case 'Setting':
      return <SettingIcon width={adjustedSize} height={adjustedSize} fill={adjustedColor} />;
    default:
      return null;
  }
};

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const isFocused = (routeName: string) => routeName === route.name;
        
        return {
          tabBarIcon: ({ focused, color, size }) => 
            getTabBarIcon(route.name as RouteNames, focused, color, size),
          tabBarLabelStyle,
          tabBarStyle: {
            ...baseTabBarStyle,
            borderTopWidth: 4,
            borderTopColor: isFocused(route.name) ? '#007bff' : 'transparent', // Border only on the active tab
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        } as BottomTabNavigationOptions;
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Menu" component={Menus} />

    </Tab.Navigator>
  );
};
export default HomeTabs;