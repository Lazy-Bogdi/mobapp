import { StyleSheet, Text } from 'react-native';

type GreetingsProps = {
  name?: string;
};

export function Greetings({ name = 'un·e développeur·se anonyme' }: GreetingsProps) {
  return (
    <Text style={styles.text}>
      Ce composant a été codé avec passion par <Text style={styles.highlight}>{name}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  highlight: {
    fontWeight: '700',
  },
});

