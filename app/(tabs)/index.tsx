import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CITIES from '../../data/cities';

export default function HomeScreen() {
  const router = useRouter();
  const featuredCities = CITIES.slice(0, 3);

  const renderCityCard = ({ item }: { item: typeof CITIES[0] }) => (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`../city/${item.id}`)}
    >
      <Text style={styles.cityName}>{item.name}</Text>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.attractions}>
        Attractions: {item.attractions.length}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Travel Guide!</Text>
      <Text style={styles.subtitle}>
        Discover amazing cities around the world 
      </Text>

      <Text style={styles.sectionTitle}>Featured Cities</Text>
      <FlatList
        data={featuredCities}
        renderItem={renderCityCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 32, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 4, paddingHorizontal: 16 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // for Android shadow
  },
  cityName: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  country: { fontSize: 14, color: '#888', marginBottom: 6 },
  attractions: { fontSize: 12, color: '#555' },
});
