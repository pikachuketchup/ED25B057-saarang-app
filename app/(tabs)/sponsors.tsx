import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function Sponsors() {

  const sponsors = [
    require('../../assets/images/s1.png'),
    require('../../assets/images/s2.png'),
    require('../../assets/images/s3.png'),
    require('../../assets/images/s4.png'),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {sponsors.map((logo, index) => (
          <Image key={index} source={logo} style={styles.logo} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  logo: {
    width: '45%',
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 10,
  },
});