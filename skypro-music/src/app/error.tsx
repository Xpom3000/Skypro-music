"use client";

import styles from "./error.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Error() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.containerSvg}
        src="/img/404.png"
        width={1400}
        height={710}
        alt="Error 404"
      />
      <div className={styles.containerNf}>
        <Link className={styles.containerLink} href="/">
          <p className={styles.containerLinkP}>Вернуться на главную страницу</p>
        </Link>
      </div>
    </div>
  );
}
