import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import students from '../../data/students';

export default function StudentDetail() {
  const { id } = useLocalSearchParams();
  const student = students.find((s) => s.id === String(id));

  if (!student) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{ title: 'Not Found' }} />
        <Text style={styles.notFoundText}>
          We couldn't find a student with ID {String(id)}.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <Stack.Screen options={{ title: student.name }} />

      <View style={styles.content}>
        <View style={styles.hero}>
          <Image source={student.image} style={styles.image} />
          <Text style={styles.name}>{student.name}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Course</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{student.course}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.lastRow]}>
            <Text style={styles.label}>Student ID</Text>
            <Text style={styles.value}>{student.id}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  content: {
    width: '100%',
    maxWidth: 640,
    padding: 16,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e5e7eb',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginTop: 16,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 15,
    color: '#6b7280',
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  badge: {
    backgroundColor: '#ccfbf1',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f766e',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  notFoundText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },
});
