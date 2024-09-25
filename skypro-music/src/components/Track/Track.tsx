"use client";

import { durationFormat } from "@/utils";
import styles from "./Track.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { trackType } from "@/type";
import { setCurrentTrack, setIsPlaying } from "@/store/features/plailistSlice";
import classNames from "classnames";

type TrackType = {
  track: trackType;
  tracksData: trackType[];
};

export default function Track({ track, tracksData }: TrackType) {
   const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const { name, author, album, duration_in_seconds, id } = track;
  const isCurrentTrack = currentTrack ? currentTrack.id === id : false;
  const dispatch = useAppDispatch();

  const handleTrackClick = () => {
    if (isPlaying) {
      dispatch(setIsPlaying(false));
    } else {
      dispatch(setCurrentTrack({ track, tracksData}));
      dispatch(setIsPlaying(true));
    }
    
  };

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
          <svg
              className={classNames(styles.trackTitleSvg, {
                [styles.trackIconIsplaying]: isPlaying && isCurrentTrack,
              })}
            >
              <use
                xlinkHref={`/img/icon/sprite.svg#${
                  isCurrentTrack ? "icon-isplaying" : "icon-note"
                }`}
              />
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>
            {durationFormat(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
