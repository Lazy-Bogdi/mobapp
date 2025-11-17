import { StyleSheet, Text, View } from 'react-native';

import { ContentContainer } from '../components/content-container';
import { ProfileCard } from '../components/profile-card';

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <ContentContainer>
        <Text style={styles.sectionTitle}>Carte profil</Text>
        <Text>Voici une vue simple qui affiche une image, du texte et un bouton.</Text>
      </ContentContainer>
      <ProfileCard
        name="Alex Martin"
        bio="Développeur mobile passionné par React Native et Expo."
        avatar={require('../assets/images/react-logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    padding: 24,
    gap: 24,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

