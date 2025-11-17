import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { ContentContainer } from '../../components/content-container';

export default function Exo3Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exercice 3 · Gestion d&apos;état</Text>
      <Text style={styles.subtitle}>useState, formulaires et interactions dynamiques.</Text>

      <ToggleButtonExample />
      <FormExample />
      <ClickCounterExample />
      <ContactFormExample />
      <CounterWithResetExample />
    </ScrollView>
  );
}

// 1. Bouton toggle ON/OFF
function ToggleButtonExample() {
  const [isOn, setIsOn] = useState(false);

  return (
    <ContentContainer>
      <Text style={styles.sectionTitle}>1. Bouton Toggle</Text>
      <Text>État actuel: {isOn ? 'ON' : 'OFF'}</Text>
      <Button title={isOn ? 'ON' : 'OFF'} onPress={() => setIsOn(!isOn)} />
    </ContentContainer>
  );
}

// 2. Formulaire avec champ nom + bouton qui affiche le nom
function FormExample() {
  const [name, setName] = useState('');
  const [displayedName, setDisplayedName] = useState('');

  return (
    <ContentContainer>
      <Text style={styles.sectionTitle}>2. Formulaire avec affichage</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Afficher le nom"
        onPress={() => setDisplayedName(name)}
      />
      {displayedName ? (
        <Text style={styles.result}>Nom affiché: {displayedName}</Text>
      ) : null}
    </ContentContainer>
  );
}

// 3. Bouton qui affiche combien de fois il a été cliqué
function ClickCounterExample() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <ContentContainer>
      <Text style={styles.sectionTitle}>3. Compteur de clics</Text>
      <Text>Le bouton a été cliqué {clickCount} fois</Text>
      <Button
        title="Cliquer ici"
        onPress={() => setClickCount(clickCount + 1)}
      />
    </ContentContainer>
  );
}

// 4. Composant avec deux champs (nom/email) avec états séparés
function ContactFormExample() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ContentContainer>
      <Text style={styles.sectionTitle}>4. Formulaire avec états séparés</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.result}>
        Nom: {nom || '(vide)'} | Email: {email || '(vide)'}
      </Text>
    </ContentContainer>
  );
}

// 5. Compteur avec bouton reset
function CounterWithResetExample() {
  const [count, setCount] = useState(0);

  return (
    <ContentContainer>
      <Text style={styles.sectionTitle}>5. Compteur avec Reset</Text>
      <Text style={styles.counterValue}>Valeur: {count}</Text>
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="+1" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Reset" onPress={() => setCount(0)} color="#d32f2f" />
        </View>
      </View>
    </ContentContainer>
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
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    fontWeight: '500',
  },
  counterValue: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonWrapper: {
    flex: 1,
  },
});

