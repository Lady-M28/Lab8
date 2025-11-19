import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CITIES from '../../data/cities';

export default function ExploreScreen() {
  const router = useRouter();

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
      <Text style={styles.title}>Explore Cities</Text>
      <FlatList
        data={CITIES}
        renderItem={renderCityCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 16 },
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
  country: { fontSize: 14, color: '#888', marginBottom: 6 },
  attractions: { fontSize: 12, color: '#555' },
});
