"use client";

import classNames from "classnames";
import styles from "./Player.module.css";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { trackType } from "@/type";

type PlauerType = {
  track: trackType;
};

export default function Player() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  return (
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
        <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
          <svg className={styles.playerBtnRepeatSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          </svg>
        </div>
        <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
          <svg className={styles.playerBtnShuffleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.playerTrackPlay, styles.trackPlay)}>
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
          <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
            <svg className={styles.trackPlayLikeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
            <svg className={styles.trackPlayDislikeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
