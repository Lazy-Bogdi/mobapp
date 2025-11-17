import { StyleSheet, Text, View } from 'react-native';

import { useText } from './text-context';

export function ErrorMessage() {
  const { text } = useText();
  const isOverLimit = text.length > 140;

  if (!isOverLimit) {
    return null;
  }

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        ⚠️ Limite dépassée ! Vous avez tapé {text.length} caractères (limite: 140)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#ffebee',
    borderLeftWidth: 4,
    borderLeftColor: '#d32f2f',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  errorText: {
    color: '#d32f2f',
    fontWeight: '600',
    fontSize: 14,
  },
});

