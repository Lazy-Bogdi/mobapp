import { StyleSheet, Text, View } from 'react-native';

type ListItemsProps = {
  items: string[];
};

export function ListItems({ items }: ListItemsProps) {
  if (!Array.isArray(items)) {
    console.warn('ListItems: la prop "items" doit être un tableau.');
    return <Text style={styles.error}>⚠️ La prop items doit être un tableau.</Text>;
  }

  if (items.length === 0) {
    return <Text style={styles.empty}>Aucun élément à afficher.</Text>;
  }

  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={`${item}-${index}`} style={styles.row}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.label}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bullet: {
    fontSize: 18,
  },
  label: {
    fontSize: 16,
  },
  error: {
    color: '#c62828',
    fontWeight: '600',
  },
  empty: {
    color: '#7a7f8b',
    fontStyle: 'italic',
  },
});

