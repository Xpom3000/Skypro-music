import { FilterItemType, trackType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/plailistSlice";

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData,
}: FilterItemType) {
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOption.author
  );
  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(
        tracksData?.map((track: trackType) => track[value]) || []
      );
      return Array.from(array);
    }
    return order;
  };
  const togglerFilter = (item: string) => {
    dispatch(
      setFilters({
        author: authorsList.includes(item)
          ? authorsList.filter((el) => el !== item) 
          : [...authorsList, item],
      })
    );
  };
  // getFilterList();
  return (
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(styles.filterButton, styles.btnText, {
          [styles.active]: isOpened,
        })}
      >
        {title}
      </div>
      {isOpened && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            {getFilterList().map((item) => (
              <li
                key={item}
                onClick={() => togglerFilter(item)}
                className={classNames(styles.menuItem, {
                  [styles.activeMenuItem]: isOpened,
                })}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
