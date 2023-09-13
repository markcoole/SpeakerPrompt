import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Post 1', content: 'Content for post 1' },
  { id: '2', title: 'Post 2', content: 'Content for post 2' },
  // ... more posts
];

export default function ResourcesScreen() {
  return (
    <View>
      <Text>Resources</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}
