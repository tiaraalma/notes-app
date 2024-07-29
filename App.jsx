import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import colors from "./src/themes/colors";
import NoteListScreen from "./src/screens/NoteListScreen";
import AddNoteScreen from "./src/screens/AddNoteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{ colors: { backgroundColor: colors.textColors.white } }}
      >
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: colors.textColors.white },
          }}
        >
          <Stack.Screen
            name="NoteList"
            component={NoteListScreen}
            options={({ navigation }) => ({
              headerTitle: "Notes",
              headerRight: () => (
                <Ionicons
                  name="add-circle-sharp"
                  size={24}
                  color={colors.primary.blue}
                  onPress={() => navigation.navigate("AddNote")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddNote"
            component={AddNoteScreen}
            options={({ navigation }) => ({
              headerTitle: "Add Note",
              headerLeft: () => (
                <Ionicons
                  name="arrow-back-circle"
                  size={24}
                  color={colors.primary.blue}
                  onPress={() => navigation.navigate("NoteList")}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
