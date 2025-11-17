import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ContentContainer } from '../../components/content-container';
import { ErrorMessage } from '../../components/exo4/error-message';
import { LetterCount } from '../../components/exo4/letter-count';
import { SentenceCount } from '../../components/exo4/sentence-count';
import { TextProvider } from '../../components/exo4/text-context';
import { TextInputField } from '../../components/exo4/text-input-field';
import { WordCount } from '../../components/exo4/word-count';

export default function Exo4Screen() {
  return (
    <TextProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Mini-projet · Compteur de mots</Text>
        <Text style={styles.subtitle}>
          Tapez du texte et observez les statistiques se mettre à jour automatiquement.
        </Text>

        <ContentContainer>
          <Text style={styles.sectionTitle}>Saisie de texte</Text>
          <ErrorMessage />
          <TextInputField />
        </ContentContainer>

        <ContentContainer>
          <Text style={styles.sectionTitle}>Statistiques</Text>
          
          <View style={styles.statsGrid}>
            <LetterCount />
            <WordCount />
            <SentenceCount />
          </View>
        </ContentContainer>
      </ScrollView>
    </TextProvider>
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
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
});
