import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Workshops() {

  const workshops = [
    {
      title: "AI & Machine Learning",
      speaker: "Dr. Sharma",
      date: "March 10, 10:00 AM",
    },
    {
      title: "Web Development Bootcamp",
      speaker: "Ananya Gupta",
      date: "March 11, 2:00 PM",
    },
    {
      title: "UI/UX Design Masterclass",
      speaker: "Rahul Mehta",
      date: "March 12, 11:00 AM",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {workshops.map((workshop, index) => (
        <View key={index} style={styles.card}>
          
          <Text style={styles.title}>{workshop.title}</Text>
          <Text style={styles.speaker}>Speaker: {workshop.speaker}</Text>
          <Text style={styles.date}>{workshop.date}</Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

        </View>
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
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E53935',
    width:'90%',
    shadowColor: '#E53935',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  speaker: {
    color: '#ccc',
    marginTop: 8,
  },

  date: {
    color: '#E53935',
    marginTop: 5,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#E53935',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});