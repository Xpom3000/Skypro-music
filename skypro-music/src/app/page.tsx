"use client";

// import CenterBlock from "@/components/CenterBlock/CenterBlock";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import Search from "@/components/Search/Search";
import Filters from "@/components/Filters/Filters";
import Playlist from "@/components/Playlist/Playlist";
import { ChangeEvent, useState } from "react";
import { trackType } from "@/type";

export default function Home() {
  const [track, setTrack] = useState<trackType | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockH2}>Треки</h2>
            <Filters />
            <Playlist setTrack={setTrack} />
          </div>
          <Sidebar />
        </main>
        {/* <div className={styles.bar}>
          <div className={styles.barContent}>
            <div className={styles.barPlayerProgress} />
            <div className={styles.barPlayerBlock}> */}

        {/* </div>
          </div>
        </div> */}
        {track && (
          <footer className={styles.footer}>
            <Player track={track} />
            <Volume
              min={0}
              max={0}
              step={0}
              value={0}
              onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </footer>
        )}
      </div>
    </div>
  );
}
