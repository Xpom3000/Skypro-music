import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Player from "@/components/Player/Player";
import CenterBlock from "@/components/CenterBlock/CenterBlock";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <CenterBlock/>
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
