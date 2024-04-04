import styles from "./Track.module.css";
// import classNames from 'classnames';

export default function Track() {
  return (
    <div className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className="track__title-image">
            <svg className="track__title-svg">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Guilt <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Nero
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Welcome Reality
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">4:44</span>
        </div>
      </div>
    </div>
  );
}
