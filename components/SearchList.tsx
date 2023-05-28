import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

// https://github.dev/kevintomas1995/logRocket_searchBar
// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text>{details}</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }: any) => {
  const renderItem = ({ item }: any) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (
      item.details
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }

    return <Item name={item.name} details={item.details} />;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
          return true;
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
