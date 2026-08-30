import { StyleSheet, Text, View } from 'react-native';

export default function StatCard(props) {
  return (
    // Combines standard styles with dynamic background color passed via props
    <View style={[styles.card, { backgroundColor: props.bgColor }]}>
      <View style={styles.headerContainer}>
        {/* Creative Challenge 3: Emoji icon next to the title */}
        {props.emoji && <Text style={styles.iconStyle}>{props.emoji}</Text>}
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    width: '100%',
   
    // Creative Challenge 2: Rounded borders and shadows
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
   
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
   
    // Shadow for Android
    elevation: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconStyle: {
    fontSize: 18,
    marginRight: 8,
  },
  title: {
    // Creative Challenge 4: Typography adjustment
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    // Creative Challenge 4: Typography adjustment
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});