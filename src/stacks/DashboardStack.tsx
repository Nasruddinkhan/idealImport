import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, ChangePassword } from './../screens'; // Ensure you have SettingsScreen

const DashboardStack = createNativeStackNavigator();

const DashboardStackScreen: React.FC = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Home" component={Dashboard} />
      <DashboardStack.Screen name="ChangePasswordScreen" component={ChangePassword} />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
