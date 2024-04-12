import { FilterItemType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";

export default function FilterItem({handleFilterClick, title, list, isOpened,}: FilterItemType) {
  return (
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(styles.filterButton, styles.btnText)}
      >
        {title}
      </div>
      {isOpened && (
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
