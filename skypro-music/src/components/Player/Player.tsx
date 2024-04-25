"use client";

import classNames from "classnames";
import styles from "./Player.module.css";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
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

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
    
  };
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio ref={audioRef} src={track.track_file}></audio>
        <ProgressBar  max={duration} value={currentTime} step={} onChange />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={classNames(styles.playerBtnPrev, styles.btn)}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div className={classNames(styles.playerBtnPlay, styles.btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
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
                    Ты та...
                  </Link>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <Link className={styles.trackPlayAlbumLink} href="http://">
                    Баста
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
