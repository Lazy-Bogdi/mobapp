import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ContentContainer } from '../../components/content-container';
import { Greetings } from '../../components/greetings';
import { ListItems } from '../../components/list-items';
import { ProfileCard } from '../../components/profile-card';

const PRENOMS = ['Léo', 'Camille', 'Noah', 'Inès'];

export default function Exo2Screen() {
  const [index, setIndex] = useState(0);
  const currentName = PRENOMS[index];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exercice 2 · Props</Text>
      <Text style={styles.subtitle}>Manipulation de props, valeurs par défaut et validation.</Text>

      <ContentContainer>
        <Text style={styles.sectionTitle}>Greetings avec prop</Text>
        <Greetings name="Lemme" />
        <Text style={styles.sectionTitle}>Greetings sans prop</Text>
        <Greetings />
      </ContentContainer>

      <ContentContainer>
        <Text style={styles.sectionTitle}>Parent → Enfant dynamique</Text>
        <Greetings name={currentName} />
        <Button
          title="Changer de prénom"
          onPress={() => setIndex((prev) => (prev + 1) % PRENOMS.length)}
        />
      </ContentContainer>

      <ContentContainer>
        <Text style={styles.sectionTitle}>Composant Profile</Text>
        <ProfileCard
          name="Sophie Martin"
          bio="Product designer adepte des apps minimalistes."
          avatar={require('../../assets/images/react-logo.png')}
        />
      </ContentContainer>

      <ContentContainer>
        <Text style={styles.sectionTitle}>ListItems validé</Text>
        <ListItems
          items={[
            'Chaque entrée est rendue avec une puce',
            'La prop items est vérifiée avec Array.isArray',
            'Un message est affiché si la liste est vide ou invalide',
          ]}
        />
      </ContentContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 24,
    backgroundColor: '#f6f8fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#62677a',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

