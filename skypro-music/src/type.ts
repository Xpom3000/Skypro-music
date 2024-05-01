type userType = {
  id: number,
  username: string,
  first_name: string,
  last_name: string,
  email: string
}

export type FilterItemType = {
  title: string;
  list: string[];
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;  
};

export type trackType = {
  id: number,
  name: string,
  author: string,
  release_date:string,
  genre: string,
  duration_in_seconds: number,
  album: string,
  logo: string | null,
  track_file: string,
  stared_user: userType[]
  onClick: (newFilter: string) => void;
};

export type ErrorType = {
  error: string, //узнать правда ли этот тип или другой
  reset: any  , //узнать правда ли этот тип или другой
}