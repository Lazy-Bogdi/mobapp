import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../../components/app-header';
import { ContentContainer } from '../../components/content-container';
import { InfoCard } from '../../components/info-card';

const CARDS = [
  {
    title: 'Composant Header',
    description: 'Affiche un titre principal et un sous-titre pour cadrer une section.',
  },
  {
    title: 'Carte réutilisable',
    description: 'Passe un titre et une description via les props pour changer le contenu.',
  },
  {
    title: 'Container stylé',
    description: 'Ajoute fond coloré, marge et padding aux éléments enfants.',
  },
];

export default function Exo1Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppHeader title="Exercice 1" subtitle="Composants de base" />

      <ContentContainer>
        <Text style={styles.sectionTitle}>Container partagé</Text>
        <Text>
          Ce composant ajoute automatiquement un fond, des marges et un espacement entre les textes.
        </Text>
        <Text>Pratique pour envelopper plusieurs paragraphes sans répéter le style.</Text>
      </ContentContainer>

      <View style={styles.cardsWrapper}>
        {CARDS.map((card) => (
          <InfoCard key={card.title} title={card.title} description={card.description} />
        ))}
      </View>

      <ContentContainer backgroundColor="#e7fbef">
        <Text style={styles.sectionTitle}>Voir la carte profil</Text>
        <Text>Une vue dédiée montre une image, du texte et un bouton &quot;Suivre&quot;.</Text>
        <Link href="/profile" style={styles.link}>
          Ouvrir l&apos;écran profil
        </Link>
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
  cardsWrapper: {
    gap: 16,
  },
  link: {
    fontWeight: '600',
    color: '#0a7ea4',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

