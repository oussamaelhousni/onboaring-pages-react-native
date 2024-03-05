import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import data from "./data/data.js";

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const RenderItem = ({ item, index }) => {
    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Image
          source={item.image}
          style={[{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }]}
        />
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => (
          <RenderItem index={index} item={item} />
        )}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8e9b0",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },
});
