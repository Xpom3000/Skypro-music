import { PlaylistStateType, trackType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffle: false,
  isPlaying: false,
  filterOption: {
    author: [],
    genre: [],
    order: "По умолчанию",
    searchValue: "",
  },
  filteredTracks: [],
  initialTracks: [],
  playlistNumber: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setInitialTracks: (
      state,
      action: PayloadAction<{ initialTracks: trackType[] }>
    ) => {
      state.initialTracks = action.payload.initialTracks;
      state.filteredTracks = action.payload.initialTracks;
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
        order?: string;
        searchValue?: string;
      }>
    ) => {
      state.filterOption = {
        author: action.payload.author || state.filterOption.author,
        genre: action.payload.genre || state.filterOption.genre,
        order: action.payload.order || state.filterOption.order,
        searchValue:
          typeof action.payload.searchValue === "string"
            ? action.payload.searchValue
            : state.filterOption.searchValue,
      };
      const filteredArr = state.initialTracks.filter((track) => {
        const hasAuthors = state.filterOption.author.length !== 0;
        const isAuthors = hasAuthors
          ? state.filterOption.author.includes(track.author)
          : true;
        const hasGenres = state.filterOption.genre.length !== 0;
        const isGenres = hasGenres
          ? state.filterOption.genre.includes(track.genre)
          : true;
        const hasSearchValue =
          track.author
            .toLowerCase()
            .includes(state.filterOption.searchValue.toLowerCase()) ||
          track.name
            .toLowerCase()
            .includes(state.filterOption.searchValue.toLowerCase());
        return isAuthors && isGenres && hasSearchValue;
      });
      switch (state.filterOption.order) {
        case "Сначалa новые":
          filteredArr.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначалa старые":
          filteredArr.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;
        default:
          filteredArr;
          break;
      }
      state.filteredTracks = filteredArr;
    },
    setPlaylistNumber: (state, action) => {
      state.playlistNumber = action.payload;
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
  setPlaylistNumber,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
