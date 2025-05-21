import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import MessageListScreen from './components/MessageListScreen';

export default function App() {
  const [screen, setScreen] = useState('home'); // 'home' or 'messages'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigateToMessages = (category) => {
    setSelectedCategory(category);
    setScreen('messages');
  };

  const goBack = () => {
    setScreen('home');
    setSelectedCategory(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {screen === 'home' && <HomeScreen onCategorySelect={navigateToMessages} />}
      {screen === 'messages' && (
        <MessageListScreen category={selectedCategory} onBack={goBack} />
      )}
    </View>
  );
}
