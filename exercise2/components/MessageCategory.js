import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function MessageCategory({ title, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.circle, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  center: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
