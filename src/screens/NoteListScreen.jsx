import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../themes/colors";
import { Ionicons } from "@expo/vector-icons";

const NoteListScreen = () => {
  const navigation = useNavigation();
  const noteExample =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const noteRender = () => {
    return (
      <View style={styles.card}>
        <Text style={styles.description}>{noteExample}</Text>
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() =>
            Alert.alert(
              "Delete note?",
              "Deleting this note will permanently remove it from your account.",
              [
                { style: "cancel", text: "Cancel", onPress: () => {} },
                { text: "OK", onPress: () => {} },
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

  return <View style={styles.container}>{noteRender()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
