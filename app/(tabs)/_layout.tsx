import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const iconSize = 20;

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='my-list'
        options={{
          headerTitle: 'My Favourite Quotes',
          tabBarLabel: 'My Quotes',
          tabBarIcon: () => <FontAwesome name='list-ol' size={iconSize} />,
        }}
      />
      <Tabs.Screen
        name='global-list'
        options={{
          headerTitle: 'Global Leaderboard',
          tabBarLabel: 'Leaderboard',
          tabBarIcon: () => <FontAwesome name='globe' size={iconSize} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
