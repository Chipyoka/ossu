import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { useRef } from 'react';

export default function Home() {
  const soundRef = useRef<Audio.Sound | null>(null);

  const handlePress = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/reaction.wav')
    );

    soundRef.current = sound;
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Ossu</Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>React</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});