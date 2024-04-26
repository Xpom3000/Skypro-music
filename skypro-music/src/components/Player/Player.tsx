"use client";

import classNames from "classnames";
import styles from "./Player.module.css";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { trackType } from "@/type";
import ProgressBar from "../ProgressBar/ProgressBar";

type PlayerType = {
  track: trackType;
};

export default function Player({ track }: PlayerType) {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const duration = audioRef.current?.duration;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", () => setCurrentTime(audioRef.current!.currentTime))
  })
  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      setCurrentTime(Number(event.target.value))
      audioRef.current.currentTime = Number(event.target.value);
    }
  };
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio ref={audioRef} src={track.track_file}></audio>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.1}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={classNames(styles.playerBtnPrev, styles.btn)}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  <use xlinkHref={`img/icon/sprite.svg#${isPlaying ? "icon-pause": "icon-play"}`} />
                </svg>
              </div>
              <div className={classNames(styles.playerBtnNext, styles.btn)}>
                <svg className={styles.playerBtnNextSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div
                className={classNames(styles.playerBtnRepeat, styles.btnIcon)}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div
                className={classNames(styles.playerBtnShuffle, styles.btnIcon)}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>
            <div
              className={classNames(styles.playerTrackPlay, styles.trackPlay)}
            >
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <Link className={styles.trackPlayAuthorLink} href="http://">
                    {track.name}
                  </Link>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <Link className={styles.trackPlayAlbumLink} href="http://">
                    {track.author}
                  </Link>
                </div>
              </div>
              <div className={styles.trackPlayLikeDis}>
                <div
                  className={classNames(styles.trackPlayLike, styles.btnIcon)}
                >
                  <svg className={styles.trackPlayLikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.trackPlayDislike,
                    styles.btnIcon
                  )}
                >
                  <svg className={styles.trackPlayDislikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
