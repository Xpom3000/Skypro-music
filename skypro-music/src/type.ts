import { ChangeEvent } from "react";

type userType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type FilterItemType = {
  title: string;
  value: "author" | "genre" | "order";
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  optionList: string[] | string;  
};

export type trackType = {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: userType[];
 
};

export type PlaylistStateType = {
  currentTrack: null | trackType;
  playlist: trackType[];
  shuffledPlaylist: trackType[];
  isShuffle: boolean;
  isPlaying: boolean;
  filterOption: {
    author: string[];
    genre: string[];
    order: string;
    searchValue: string;
  };
  filteredTracks: trackType[];
  initialTracks: trackType[];
};

export type ErrorType = {
  error: Error;
  reset: () => void;
};


export type VolumeType = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ProgressBarType = {
  max: number | undefined;
  value: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
