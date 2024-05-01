import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Player from "@/components/Player/Player";
import Search from "@/components/Search/Search";
import Filters from "@/components/Filters/Filters";
import Playlist from "@/components/Playlist/Playlist";

export default function Home() {
    return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockH2}>Треки</h2>
            <Filters />
            <Playlist />
          </div>
          <Sidebar />
        </main>
        <Player  />
        <footer className={styles.footer}/>
      </div>
    </div>
  );
}
