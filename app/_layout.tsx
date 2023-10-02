import { Stack } from 'expo-router';

const RootStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootStackLayout;
