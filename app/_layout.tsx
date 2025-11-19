import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs Layout */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // hide header on tabs
        }}
      />

      {/* Dynamic City Detail */}
      <Stack.Screen
        name="city/[id]"
        options={{
          headerShown: true,       // show header for city details
          title: 'City Details',    // title in the header
          presentation: 'card',     // default animation for stack screen
          headerBackTitle: 'Back',  // text for back button
        }}
      />
    </Stack>
  );
}
