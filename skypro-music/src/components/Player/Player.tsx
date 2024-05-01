"use client";

import classNames from "classnames";
import styles from "./Player.module.css";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { trackType } from "@/type";
import ProgressBar from "../ProgressBar/ProgressBar";
import { durationFormat } from "@/utils";
import Volume from "../Volume/Volume";
import PlayerControls from "../PlayerControls/PlayerControls";
import { useAppSelector } from "@/store/hooks";

type PlayerType = {
  track: trackType;
};

export default function Player() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const duration = audioRef.current?.duration || 0;

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setIsPlaying(true);
    }
    audioRef.current?.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });
  }, [volume, duration]);

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

  const toggleLoop = () => {
    if (audioRef.current) {
      if (isLooping) {
        audioRef.current.loop = false;
      } else {
        audioRef.current.loop = true;
      }
    }
    setIsLooping((prev) => !prev);
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", () =>
      setCurrentTime(audioRef.current!.currentTime)
    );
  });
  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTime(Number(event.target.value));
      audioRef.current.currentTime = Number(event.target.value);
    }
  };
  return (
    <>
      { currentTrack && (
        <div className={styles.bar}>
          <div className={styles.barContent}>
            <audio
              ref={audioRef}
              src={currentTrack.track_file}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            ></audio>
            <div className={styles.trackTimeBlock}>
              <div>{durationFormat(currentTime)}</div>
              <div> / </div>
              <div>{durationFormat(duration)}</div>
            </div>
            <ProgressBar
              max={duration}
              value={currentTime}
              step={0.1}
              onChange={handleSeek}
            />
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <PlayerControls
                  togglePlay={togglePlay}
                  isPlaying={isPlaying}
                  toggleLoop={toggleLoop}
                  isLooping={isLooping}
                />
                <div
                  className={classNames(
                    styles.playerTrackPlay,
                    styles.trackPlay
                  )}
                >
                  <div className={styles.trackPlayContain}>
                    <div className={styles.trackPlayImage}>
                      <svg className={styles.trackPlaySvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className={styles.trackPlayAuthor}>
                      <Link
                        className={styles.trackPlayAuthorLink}
                        href="http://"
                      >
                        {currentTrack.name}
                      </Link>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <Link
                        className={styles.trackPlayAlbumLink}
                        href="http://"
                      >
                        {currentTrack.author}
                      </Link>
                    </div>
                  </div>
                  <div className={styles.trackPlayLikeDis}>
                    <div
                      className={classNames(
                        styles.trackPlayLike,
                        styles.btnIcon
                      )}
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
              <Volume
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolume}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
