import Image from "next/image";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <main className={styles.main}>
      <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image
            alt="Cкайпро-музыка.логотип"
            className={styles.logoImage}
            width={113}
            height={17}
            src="/img/logo.png"
          />
        </div>
        <div className={styles.navBurger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
