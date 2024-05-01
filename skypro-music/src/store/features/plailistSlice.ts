import { trackType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  currentTrack: null | trackType,
  playlist: trackType[]
};

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<{track:trackType , tracksData: trackType[]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
    },
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
