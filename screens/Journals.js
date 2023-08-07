import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Journals = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  // Function to handle creating a new journal entry
  const handleCreateEntry = () => {
    const newEntry = {
      id: Date.now(),
      title: `Journal Entry ${journalEntries.length + 1}`,
      content: "This is a new journal entry.",
    };

    setJournalEntries([...journalEntries, newEntry]);
  };

  // Function to render each journal entry item
  const renderJournalEntry = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.entryTitle}>{item.title}</Text>
      <Text style={styles.entryContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleCreateEntry}>
        <Text style={styles.addButtonText}>Create New Journal Entry</Text>
      </TouchableOpacity>

      <FlatList
        data={journalEntries}
        renderItem={renderJournalEntry}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    backgroundColor: "#A0A4DB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    flexGrow: 1,
  },
  entryContainer: {
    backgroundColor: "#c4DAE9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  entryContent: {
    fontSize: 14,
    color: "#4A515A",
  },
});

export default Journals;
