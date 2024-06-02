import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Player from "@/components/Player/Player";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
