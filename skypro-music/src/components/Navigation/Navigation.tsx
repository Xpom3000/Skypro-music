// Counter.tsx Клиентский компонент
"use client";

import Image from "next/image";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <main className={styles.main}>
      <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Link href="/">
          <Image
            alt="Cкайпро-музыка.логотип"
            className={styles.logoImage}
            width={113}
            height={17}
            src="/img/logo.png"
          /></Link>
        </div>
        <div onClick={() => setIsOpened((prev) => !prev)} className={styles.navBurger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        {isOpened && (
          <div className={styles.navMenu}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  Главное
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  Мой плейлист
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/signin" className={styles.menuLink}>
                  Выйти
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </main>
  );
}
