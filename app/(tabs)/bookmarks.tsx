import { View, Text, FlatList, StyleSheet } from 'react-native';
import CITIES from '../../data/cities';

export default function BookmarksScreen() {
  const bookmarkedCities = CITIES.slice(0, 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bookmarks</Text>
      <Text style={styles.subtitle}>Bookmarks feature coming soon!</Text>

      <Text style={styles.sectionTitle}>Sample Bookmarked Cities</Text>
      <FlatList
        data={bookmarkedCities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cityName}>{item.name}</Text>
            <Text style={styles.country}>{item.country}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 4, paddingHorizontal: 16 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 16, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cityName: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  country: { fontSize: 14, color: '#888' },
});
