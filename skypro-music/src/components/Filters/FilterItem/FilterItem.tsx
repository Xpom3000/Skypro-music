import { FilterItemType, trackType } from "@/type";
import styles from "./FilterItem.module.css";
import classNames from "classnames";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/plailistSlice";
import { useEffect, useState } from "react";

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData,
}: FilterItemType) {
  const [filterNumber, SetFilterNumber] = useState<number>(0);
  const playlist = useAppSelector((state) => state.playlist.initialTracks);
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOption.author
  );
  const genreList = useAppSelector(
    (state) => state.playlist.filterOption.genre
  );
  // const orderList = useAppSelector((state) => state.playlist.filterOption.yaer);

  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const filtrsSet = new Set(
        playlist?.map((track: trackType) => track[value]) || []
      );
      return Array.from(filtrsSet);
    }
    return order;
  };

  const togglerFilter = (item: string) => {
    dispatch(
      setFilters({
        author: authorsList.includes(item)
          ? authorsList.filter((el) => el !== item)
          : [...authorsList, item],
        genre: genreList.includes(item)
          ? genreList.filter((el) => el !== item)
          : [...genreList, item],
      })
    );

    // if (value === "author") {
    //   dispatch(
    //     setFilters({
    //       author: authorsList.includes(item)
    //         ? authorsList.filter((el) => el !== item)
    //         : [...authorsList, item],
    //     })
    //   );
    // }
    // if (value === "genre") {
    //   dispatch(
    //     setFilters({
    //       genre: genreList.includes(item)
    //         ? genreList.filter((el) => el !== item)
    //         : [...genreList, item],
    //     })
    //   );
    // }
    // if (value === "order") {
    //   dispatch(
    //     setFilters({
    //       yaer: orderList.includes(item)
    //         ? orderList.filter((el) => el !== item)
    //         : [...orderList, item],
    //     })
    //   );
    // }
  };
  useEffect(() => {
    SetFilterNumber(authorsList.length || genreList.length);
  }, [authorsList.length, genreList.length]);

  getFilterList();
  return (
    <>
      {isOpened ? (
        <div>
          <div className={styles.titleFilterBox}>
            <div
              onClick={() => handleFilterClick(title)}
              className={classNames(styles.filterButton, styles.btnText, {
                [styles.active]: isOpened,
              })}
            >
              {title}
            </div>
            {filterNumber > 0 ? (
              <div className={styles.filterNumber}>{filterNumber}</div>
            ) : null}
          </div>
          <div className={styles.navMenu}>
            <ul className={styles.menuList}>
              {getFilterList().map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    togglerFilter(item);
                  }}
                  className={classNames(styles.menuItem, {
                    [styles.activeMenuItem]:
                      authorsList.includes(item) || genreList.includes(item),
                  })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles.btnText, {
            [styles.active]: isOpened,
          })}
        >
          {title}
        </div>
      )}
    </>
  );
}
