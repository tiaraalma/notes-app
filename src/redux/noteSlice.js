import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import app from "../../firebaseConfig";

const db = getFirestore(app);

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const notes = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return notes;
});

export const addNote = createAsyncThunk(
  "notes/addNote",
  async (content, {}) => {
    await addDoc(collection(db, "notes"), { content });
    return null;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id, { dispatch }) => {
    await deleteDoc(doc(collection(db, "notes"), id));
    dispatch(fetchNotes());
    return null;
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (_, action) => action.payload)
      .addCase(addNote.fulfilled, (state, _) => state);
  },
});

export default noteSlice.reducer;
