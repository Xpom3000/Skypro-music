import { FilterItemType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";

export default function FilterItem({
  handleFilterClick,
  title,
  list,
  isOpened,
}: FilterItemType) {
  return (
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(styles.filterButton, styles.btnText, {[styles.active]: isOpened})}>
        {title}
      </div>
      {isOpened && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            {list.map((item) => (
              <li onClick={() => handleFilterClick(item)} className={classNames(styles.menuItem, {[styles.activeMenuItem]: isOpened})} key={item} >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
