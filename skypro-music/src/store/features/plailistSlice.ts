import { trackType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  currentTrack: null | trackType;
  playlist: trackType[];
  shuffledPlaylist: trackType[];
  isShuffle: boolean;
  filterOptions: {
    authors: string[];
    searchValue: string;
  }
  filtersTracks: trackType;
  initialTracks: trackType;
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffle: false,
  filterOptions: {
    authors: [],
    searchValue:""
  }
  
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setInitialTracks:(state, action: PayloadAction<{track:trackType, trackData: trackType[]}>)
    setCurrentTrack: (state, action: PayloadAction<{track:trackType, trackData: trackType[]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.trackData;
      state.shuffledPlaylist = [...action.payload.trackData].sort(() => 0.5 - Math.random());
    },
    setNextTrack: (state) => { // dispach реализовать на кнопке
      const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
      const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack
      }
      const oldTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = oldTrack
      };
    },
    setIsShuffle: (state, action) => {
      state.isShuffle = action.payload
    }

    setFiltersOption: (state, action, PayloadAction<{ autor: string[]; searchValue: string }>) => {
    state.filterOptions = {

  }
    }

  },
  
});

export const { setCurrentTrack,setNextTrack, setIsShuffle } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;