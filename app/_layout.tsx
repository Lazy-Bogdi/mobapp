import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="exo1/index" options={{ title: 'Exercice 1' }} />
      <Stack.Screen name="exo2/index" options={{ title: 'Exercice 2' }} />
      <Stack.Screen name="profile" options={{ title: 'Profil utilisateur' }} />
    </Stack>
  );
}
