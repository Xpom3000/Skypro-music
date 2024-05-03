import styles from "./PlayerControls.module.css";
import classNames from "classnames";
import { setNextTrack, setPreviousTrack, setIsShuffle, setIsPlaying } from "@/store/features/plailistSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";


type PlayerControlsType = {
  togglePlay: () => void;
  isPlaying: boolean;
  isLooping: boolean;
  toggleLoop: () => void;
};

export default function PlayerControls({
  togglePlay,
  isPlaying,
  isLooping,
  toggleLoop,
}: PlayerControlsType) {
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
  const dispatch = useAppDispatch();

  const HandlePreviousTrack = () => {
    dispatch(setPreviousTrack());
    dispatch(setIsPlaying(true));
  };

  const HandleNextTrack = () => {
    dispatch(setNextTrack());
    dispatch(setIsPlaying(true));
  };

  const HandleShuffle = () => {
    if (isShuffle) {
      dispatch(setIsShuffle(false));
    } else {
      dispatch(setIsShuffle(true));
    }
  };



  return (
    <div className={styles.playerControls}>
      <div onClick={HandlePreviousTrack} className={classNames(styles.playerBtnPrev, styles.btnIcon)}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div
        onClick={togglePlay}
        className={classNames(styles.playerBtnPlay, styles.btnIcon)}
      >
        <svg className={styles.playerBtnPlaySvg}>
          <use
            xlinkHref={`img/icon/sprite.svg#${
              isPlaying ? "icon-pause" : "icon-play"
            }`}
          />
        </svg>
      </div>
      <div onClick={HandleNextTrack} className={classNames(styles.playerBtnNext, styles.btnIcon)}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
        <svg className={styles.playerBtnRepeatSvg}>
          <use
            xlinkHref={`img/icon/sprite.svg#${
              isLooping ? "icon-repeat"  : "icon-repeat-toggled"
            }`}
          />
        </svg>
      </div>
      <div onClick={HandleShuffle} className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref={`img/icon/sprite.svg#${
              isShuffle ? "icon-shuffle-toggled" : "icon-shuffle"
            }`} />
        </svg>
      </div>
    </div>
  );
}
