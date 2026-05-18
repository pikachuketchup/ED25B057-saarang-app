import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Artists() {

  const artists = [
    {
      name: "Arijit Singh",
      tagline: "Soulful melodies that hit deep",
      time: "March 10, 7:00 PM",
      image: require('../../assets/images/arijit.jpg'),
    },
    {
      name: "Anirudh Ravichander",
      tagline: "High energy beats & crowd vibes",
      time: "March 11, 8:30 PM",
      image: require('../../assets/images/anirudh.jpg'),
    },
    {
      name: "Prateek Kuhad",
      tagline: "Chill indie nights under the stars",
      time: "March 12, 6:30 PM",
      image: require('../../assets/images/prateek.jpg'),
    },
  ];

  const openGoogle = (name) => {
    const url = `https://www.google.com/search?q=${name}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {artists.map((artist, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={index}
          style={styles.card}
          onPress={() => openGoogle(artist.name)}
        >
          <Image source={artist.image} style={styles.image} />

          <View style={styles.textContainer}>
            <Text style={styles.name}>{artist.name}</Text>
            <Text style={styles.tagline}>{artist.tagline}</Text>
            <Text style={styles.time}>{artist.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',   
    alignItems: 'center',      
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E53935',
    alignItems: 'center',
    width: '90%',
    shadowColor: '#E53935',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  textContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  tagline: {
    color: '#ccc',
    marginTop: 5,
  },

  time: {
    color: '#E53935',
    marginTop: 5,
  },
});