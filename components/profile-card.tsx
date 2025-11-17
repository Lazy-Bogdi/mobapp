import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type ProfileCardProps = {
  avatar: ImageSourcePropType;
  name: string;
  bio?: string;
  onFollow?: () => void;
};

export function ProfileCard({ avatar, name, bio, onFollow }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      {bio ? <Text style={styles.bio}>{bio}</Text> : null}
      <Button title="Suivre" onPress={onFollow ?? (() => {})} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: 12,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  bio: {
    color: '#666',
    textAlign: 'center',
  },
});

