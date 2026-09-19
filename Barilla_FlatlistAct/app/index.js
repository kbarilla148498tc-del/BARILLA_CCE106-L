import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StudentCard } from '../components/StudentCard';
import students from '../data/students';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Case-insensitive, real-time filter by student name
  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) => s.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search by name"
          placeholderTextColor="#9ca3af"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          clearButtonMode="while-editing"
        />

        <Text style={styles.count}>
          Showing {filteredStudents.length} of {students.length} students
        </Text>

        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StudentCard
              image={item.image}
              name={item.name}
              course={item.course}
              onPress={() => router.push(`/students/${item.id}`)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyTitle}>No students found.</Text>
              <Text style={styles.emptyHint}>
                Nothing matches "{query}". Try a different name or clear the search.
              </Text>
            </View>
          }
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 640,
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    marginHorizontal: 16,
    marginTop: 16,
  },
  count: {
    fontSize: 13,
    color: '#6b7280',
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 6,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  empty: {
    alignItems: 'center',
    marginTop: 48,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  emptyHint: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 6,
    textAlign: 'center',
  },
});
