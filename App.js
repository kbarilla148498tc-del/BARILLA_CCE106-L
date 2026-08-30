import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
       
        {/* Dashboard Title */}
        <Text style={styles.header}>My Custom Dashboard</Text>
       
        {/* Rendering multiple cards using props */}
        {/* Creative Challenge 1: Custom Color Palette applied via bgColor */}
        <StatCard
          title="Total Users"
          value="1,240"
          bgColor="#4f46e5"
          emoji="👥"
        />
       
        <StatCard
          title="Revenue"
          value="$12,450"
          bgColor="#059669"
          emoji="💰"
        />
       
        <StatCard
          title="Pending Issues"
          value="3"
          bgColor="#d97706"
          emoji="⚠️"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark theme professional background
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
});