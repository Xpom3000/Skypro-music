"use client";

import classNames from "classnames";
import styles from "./Player.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { durationFormat } from "@/utils";
import Volume from "../Volume/Volume";
import PlayerControls from "../PlayerControls/PlayerControls";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsPlaying, setNextTrack } from "@/store/features/plailistSlice";

export default function Player() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const duration = audioRef.current?.duration || 0;
  const dispatch = useAppDispatch();

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    const handdleEnded = () => {
      dispatch(setNextTrack());
    };
    audio?.addEventListener("ended", handdleEnded);
    return () => audio?.removeEventListener("ended", handdleEnded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, audioRef.current]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    audioRef.current?.addEventListener("ended", () => {
      setCurrentTime(0);
    });
  }, [volume, duration]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      } else {
        audioRef.current.play();
        dispatch(setIsPlaying(true));
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
      {currentTrack && (
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
                      <span className={styles.trackPlayAuthorLink}>
                        {currentTrack.name}
                      </span>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <span className={styles.trackPlayAlbumLink}>
                        {currentTrack.author}
                      </span>
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
