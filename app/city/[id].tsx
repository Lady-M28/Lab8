import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CITIES from '../../data/cities';

export default function CityDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const city = CITIES.find((c) => c.id === id);

  if (!city) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>City not found 😞</Text>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{city.name}</Text>
      <Text style={styles.country}>{city.country}</Text>
      <Text style={styles.description}>{city.description}</Text>

      <Text style={styles.sectionTitle}>Attractions</Text>
      <FlatList
        data={city.attractions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.attractionItem}>
            <Text>• {item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  cityName: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  country: { fontSize: 18, color: '#555', marginBottom: 12 },
  description: { fontSize: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  attractionItem: { paddingVertical: 4 },
  notFound: { fontSize: 18, color: 'red', marginBottom: 12 },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backText: { color: '#fff', fontWeight: 'bold' },
});
