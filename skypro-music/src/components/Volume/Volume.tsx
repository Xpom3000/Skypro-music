import classNames from "classnames";
import styles from "./Volume.module.css";
import { ChangeEvent, useRef, useState } from "react";


export type VolumeType = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Volume( {
  min,
  max,
  step,
  value,
  onChange,
}: VolumeType) {
  const [volume, setVolume] = useState<number>(0.5);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(event.target.value);
      setVolume(audioRef.current.volume);
    }
  };
  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={classNames(styles.volumeImage, styles.btn)}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles.btn)}>
        <input
            className={classNames(styles.volumeProgressLine, styles.btn)}
            type="range"
            name="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
