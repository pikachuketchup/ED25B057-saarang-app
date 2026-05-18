import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
        },
        tabBarActiveTintColor: '#E53935',
        tabBarInactiveTintColor: '#888',
      }}
    />
  );
}

