import { StyleSheet, Text, View } from 'react-native';

import { useText } from './text-context';

export function SentenceCount() {
  const { text } = useText();
  const sentenceCount = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{sentenceCount}</Text>
      <Text style={styles.statLabel}>Phrases</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1976d2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});

