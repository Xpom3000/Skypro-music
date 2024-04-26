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
        className={classNames(styles.filterButton, styles.btnText, {
          [styles.active]: isOpened,
        })}

        // className={classNames(styles.filterButton, styles.btnText)}
      >
        {title}
      </div>
      {isOpened && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            {list.map((item) => (
              <li className={styles.menuItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
