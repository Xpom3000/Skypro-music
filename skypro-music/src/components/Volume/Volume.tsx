import classNames from "classnames";
import styles from "./Volume.module.css";
import { VolumeType } from "@/type";


export default function Volume({
  min,
  max,
  step,
  value,
  onChange,
}: VolumeType) {
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
