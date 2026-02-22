import { Audio } from 'expo-av';

let sound: Audio.Sound | null = null;

export const playReactionSound = async () => {
  try {
    if (sound) {
      await sound.unloadAsync();
      sound = null;
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/reaction.mp3')
    );

    sound = newSound;
    await sound.playAsync();
  } catch (error) {
    console.log('Sound error:', error);
  }
};