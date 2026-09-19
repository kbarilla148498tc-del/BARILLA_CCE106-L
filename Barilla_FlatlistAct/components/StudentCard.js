import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export function StudentCard({ image, name, course, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{course}</Text>
        </View>
      </View>

      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 12,
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.65,
    backgroundColor: '#f0fdfa',
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#f1f5f9',
  },
  info: {
    flex: 1,
    marginLeft: 14,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  badge: {
    backgroundColor: '#ccfbf1',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f766e',
  },
  chevron: {
    fontSize: 28,
    color: '#9ca3af',
    marginLeft: 8,
    marginRight: 4,
  },
});
