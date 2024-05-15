import { PlaylistStateType, trackType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PlaylistStateType = {
  // defaultPlaylist: [],
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffle: false,
  isPlaying: false,
  filterOption: {
    author: [],
    genre: [],
    // yaer: [],
    searchValue: "",
  },
  filteredTracks: [],
  initialTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    // setDefaultPlaylist: (state, action: PayloadAction<trackType[]>) => {
    //   state.defaultPlaylist = action.payload;
    //   state.filtedTracks = action.payload;
    // },
    setInitialTracks: (
      state,
      action: PayloadAction<{ initialTracks: trackType[] }>
    ) => {
      state.initialTracks = action.payload.initialTracks;
      // state.filteredTracks = action.payload.initialTracks;
    },
    setCurrentTrack: (
      state,
      action: PayloadAction<{ track: trackType; tracksData: trackType[] }>
    ) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
      state.shuffledPlaylist = [...action.payload.tracksData].sort(
        () => 0.5 - Math.random()
      );
    },

    setNextTrack: (state) => {
      // прописать dispatch на кнопке следующий трек
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },

    setPreviousTrack: (state) => {
      // прописать dispatch на кнопке предыдущий трек
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },

    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      // прописать  на кнопке перемешивание треков
      state.isShuffle = action.payload;
    },

    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    setFilters: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        // yaer?: string[];
        searchValue?: string;
      }>
    ) => {
      state.filterOption = {
        author: action.payload.author || state.filterOption.author,
        genre: action.payload.genre || state.filterOption.genre,
        searchValue:
          action.payload.searchValue || state.filterOption.searchValue,
      };
      state.filteredTracks = state.initialTracks.filter((track) => {
        const hasAuthors = state.filterOption.author.length !== 0;
        const isAuthors = hasAuthors
          ? state.filterOption.author.includes(track.author)
          : true;
        const hasGenres = state.filterOption.genre.length !== 0;
        const isGenres = hasGenres
          ? state.filterOption.genre.includes(track.genre)
          : true;
        const hasSearchValue = track.name
          .toLowerCase()
          .includes(state.filterOption.searchValue.toLowerCase());
        return isAuthors || (isGenres && hasSearchValue);
      });
    },
  },
});

export const {
  setInitialTracks,
  setCurrentTrack,
  setNextTrack,
  setPreviousTrack,
  setIsShuffle,
  setIsPlaying,
  setFilters,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
