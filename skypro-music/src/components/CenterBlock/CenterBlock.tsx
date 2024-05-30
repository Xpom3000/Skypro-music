"use client";

import styles from "./CenterBlock.module.css";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";

export default function CenterBlock({
  children
}: Readonly<{                                                                              
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters />
      {children}
    </div>
  );
}
