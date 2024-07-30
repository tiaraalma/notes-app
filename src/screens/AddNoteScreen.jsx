import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import colors from "../themes/colors";
import { addNote, fetchNotes } from "../redux/noteSlice";

const AddNoteScreen = () => {
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addNote(content));
    dispatch(fetchNotes());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        value={content}
        onChangeText={setContent}
        placeholder="Enter note content here..."
      />
      <TouchableOpacity style={styles.button} onPress={addHandler}>
        <Text style={styles.buttonTitle}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    height: 300,
    fontWeight: "400",
    textAlignVertical: "top",
    textAlign: "left",
    color: colors.textColors.grey,
    marginBottom: 24,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: colors.textColors.whiteGrey,
    borderRadius: 14,
  },
  button: {
    backgroundColor: colors.primary.blue,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default AddNoteScreen;
