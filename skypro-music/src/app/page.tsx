import CenterBlock from "@/components/CenterBlock/CenterBlock";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import { useState } from "react";

export default function Home() {
  const [track, setTrack] = useState();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <CenterBlock />
          <Sidebar />
        </main>
        <div className={styles.bar}>
          <div className={styles.barContent}>
            <div className={styles.barPlayerProgress} />
            <div className={styles.barPlayerBlock}>
              {track && <Player track={track } />}
              <Volume />
            </div>
          </div>
        </div>
        <footer className={ styles.footer} />
      </div>
    </div>
  );
}
