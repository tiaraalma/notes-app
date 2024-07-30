import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { fetchNotes, deleteNote } from "../redux/noteSlice";
import colors from "../themes/colors";

const NoteListScreen = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const noteRender = (item) => {
    return (
      <View style={styles.card}>
        <Text style={styles.description}>{item.content}</Text>
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() =>
            Alert.alert(
              "Delete note?",
              "Deleting this note will permanently remove it from your account.",
              [
                { style: "cancel", text: "Cancel", onPress: () => {} },
                {
                  text: "OK",
                  onPress: () => deleteHandler(item.id),
                },
              ]
            )
          }
        >
          <Ionicons
            name="trash-outline"
            size={18}
            color={colors.secondary.red}
          />
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        contentContainerStyle={styles.containerList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => noteRender(item)}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image
              source={require("../../assets/empty-notes.png")}
              resizeMode="contain"
              style={{ width: 110, height: 110 }}
            />
            <Text style={styles.emptyText}>
              No notes have been made yet, please add some.
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    flexGrow: 1,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderColor: colors.textColors.whiteGrey,
    borderBottomWidth: 10,
  },
  description: {
    color: colors.textColors.grey,
    fontWeight: "400",
    fontSize: 12,
  },
  btnDelete: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "flex-end",
  },
  btnText: {
    color: colors.secondary.red,
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default NoteListScreen;
