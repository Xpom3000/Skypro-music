import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPpersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <Link href="/signin">
          <div className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </Link>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/1">
              <Image
                className={styles.sidebarImg}
                width={100}
                height={100}
                src="/img/playlist01.png"
                alt="Плэйлист дня"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/2">
              <Image
                className={styles.sidebarImg}
                width={100}
                height={100}
                src="/img/playlist02.png"
                alt="100 танцевалхитовьных"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/3">
              <Image
                className={styles.sidebarImg}
                width={100}
                height={100}
                src="/img/playlist03.png"
                alt="Инди заряд"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
