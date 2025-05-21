import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, Button, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView
} from 'react-native';

const initialMessages = {
  You: ['Be yourself!', 'Be confident.'],
  Home: ['Dinner ready?', 'Turn off the lights.'],
  Love: ['I love you', 'My fav gift is watch.'],
  Family: ['Don’t forget Dad’s birthday', 'Family game night?'],
  Friends: ['Movie this weekend?', 'Let’s catch up!'],
  School: ['Assignment due Friday', 'Study for math test'],
};

export default function MessageListScreen({ category, onBack }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    setMessages(initialMessages[category] || []);
  }, [category]);

  const addOrUpdateMessage = () => {
    if (newMessage.trim() === '') return;

    if (editingIndex !== null) {
      const updated = [...messages];
      updated[editingIndex] = newMessage;
      setMessages(updated);
      setEditingIndex(null);
    } else {
      setMessages([...messages, newMessage]);
    }

    setNewMessage('');
  };

  const deleteMessage = (index) => {
    const updated = [...messages];
    updated.splice(index, 1);
    setMessages(updated);
    if (editingIndex === index) {
      setNewMessage('');
      setEditingIndex(null);
    }
  };

  const startEdit = (index) => {
    setNewMessage(messages[index]);
    setEditingIndex(index);
  };

  const cancelEdit = () => {
    setNewMessage('');
    setEditingIndex(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{category} Messages</Text>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.messageRow}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => startEdit(index)}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteMessage(index)}>
              <Text style={styles.delete}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={newMessage}
        onChangeText={setNewMessage}
      />

      <View style={styles.buttonRow}>
        <Button
          title={editingIndex !== null ? 'Update' : 'Add'}
          onPress={addOrUpdateMessage}
        />
        {editingIndex !== null && (
          <Button title="Cancel" color="gray" onPress={cancelEdit} />
        )}
      </View>

      <View style={styles.backButton}>
        <Button title="Back" onPress={onBack} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  item: {
    fontSize: 16,
  },
  delete: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    alignItems: 'center',
  },
});
