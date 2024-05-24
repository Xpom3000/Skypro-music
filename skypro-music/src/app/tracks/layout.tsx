/* eslint-disable react/no-children-prop */
import styles from "./layout.module.css";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import Navigation from "@/components/Navigation/Navigation";
import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function TrackLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <CenterBlock  />
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
