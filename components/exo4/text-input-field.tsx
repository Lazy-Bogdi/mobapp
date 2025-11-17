import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useText } from './text-context';

export function TextInputField() {
  const { text, setText } = useText();
  const isOverLimit = text.length > 140;
  const remainingChars = 140 - text.length;

  return (
    <View>
      <TextInput
        style={[styles.textInput, isOverLimit && styles.textInputError]}
        placeholder="Tapez votre texte ici..."
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
      />
      {!isOverLimit && text.length > 0 && (
        <Text style={styles.charCounter}>
          {remainingChars} caractère{remainingChars !== 1 ? 's' : ''} restant{remainingChars !== 1 ? 's' : ''}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    backgroundColor: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
  textInputError: {
    borderColor: '#d32f2f',
    backgroundColor: '#ffebee',
  },
  charCounter: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});

