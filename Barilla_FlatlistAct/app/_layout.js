import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0f766e' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Student Directory' }} />
      <Stack.Screen
        name="students/[id]"
        options={{ title: 'Student Details', headerBackTitle: 'Students' }}
      />
    </Stack>
  );
}
