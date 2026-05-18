import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* 🔴 LOGO (Image + Text) */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SAARANG</Text>
      </View>

      {/* 🔘 NAVIGATION CARDS */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push('/artists')}
      >
        <Text style={styles.cardText}>Artists</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push('/workshops')}
      >
        <Text style={styles.cardText}>Workshops</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.push('/sponsors')}
      >
        <Text style={styles.cardText}>Sponsors</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logoImage: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 5,
  },

  logoText: {
    color: '#E53935',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 4,
    textShadowColor: '#E53935',
    textShadowRadius: 8,
  },

  card: {
    width: '90%',
    padding: 25,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#E53935',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#111',
  },

  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});