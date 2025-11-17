import { Link, type Href } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const EXO1_ROUTE = '/exo1' as unknown as Href;
const EXO2_ROUTE = '/exo2' as unknown as Href;
const EXO3_ROUTE = '/exo3' as unknown as Href;
const EXO4_ROUTE = '/exo4' as unknown as Href;
const PROFILE_ROUTE = '/profile' as unknown as Href;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionne un exercice</Text>
      <Text style={styles.subtitle}>
        Chaque lien t&apos;emmène vers un écran dédié avec l&apos;énoncé implémenté.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Exercice 1</Text>
        <Text style={styles.cardDescription}>
          Composant Header, carte réutilisable, container stylé et écran profil.
        </Text>
        <Link href={EXO1_ROUTE} style={styles.link}>
          Voir l&apos;exo 1
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Exercice 2</Text>
        <Text style={styles.cardDescription}>
          Props, composants dynamiques, gestion d&apos;état et validation d&apos;entrées.
        </Text>
        <Link href={EXO2_ROUTE} style={styles.link}>
          Voir l&apos;exo 2
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Exercice 3</Text>
        <Text style={styles.cardDescription}>
          Gestion d&apos;état avec useState: toggle, formulaires, compteurs et reset.
        </Text>
        <Link href={EXO3_ROUTE} style={styles.link}>
          Voir l&apos;exo 3
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mini-projet · Compteur de mots</Text>
        <Text style={styles.cardDescription}>
          Statistiques en temps réel: lettres, mots, phrases. Limite de 140 caractères.
        </Text>
        <Link href={EXO4_ROUTE} style={styles.link}>
          Voir le mini-projet
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Carte profil (bonus)</Text>
        <Text style={styles.cardDescription}>Accès direct à l&apos;exemple de carte utilisateur.</Text>
        <Link href={PROFILE_ROUTE} style={styles.link}>
          Ouvrir la carte profil
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f6f8fa',
    gap: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#5c6070',
    marginBottom: 8,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#fff',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#606577',
  },
  link: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
});
