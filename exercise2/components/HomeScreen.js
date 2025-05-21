import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MessageCategory from './MessageCategory';

export default function HomeScreen({ onCategorySelect }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>MESSAGES DIRECTORY</Text>

      <View style={styles.row}>
        <MessageCategory title="You" color="#FF5733" onPress={() => onCategorySelect("You")} />
        <MessageCategory title="Home" color="#85C1E9" onPress={() => onCategorySelect("Home")} />
      </View>
      <View style={styles.row}>
        <MessageCategory title="Love" color="#2874A6" onPress={() => onCategorySelect("Love")} />
        <MessageCategory title="Family" color="#6C3483" onPress={() => onCategorySelect("Family")} />
      </View>
      <View style={styles.row}>
        <MessageCategory title="Friends" color="#F1948A" onPress={() => onCategorySelect("Friends")} />
        <MessageCategory title="School" color="#48C9B0" onPress={() => onCategorySelect("School")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 120,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',   
    marginLeft: 20,            // spacing from left edge
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
