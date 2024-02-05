import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetAllUsersQuery } from "../../services/appApi";
import { setAllUsers } from "../../store/actions/creators/users";
import { useSelector } from "react-redux";
import styles from "./main.module.scss";
import Header from "../../components/header/header";
import User from "../../components/user/user";
import { StyledSmallTitle } from "../../components/typography/typography";
import Spinner from "../../components/spinner/spinner";

function Main() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number[]>([]);
  const [fetchAllUsers, { data, isLoading, isError }] =
    useLazyGetAllUsersQuery();
  const dispatch = useDispatch();
  const allUsers = useSelector((store: any) => store?.users.allUsers);

  const handlePagination = (e: any) => {
    const selectPageNum = Number(e.target.textContent);
    setPageNum(selectPageNum);
    fetchAllUsers(selectPageNum);
  };

  useEffect(() => {
    fetchAllUsers(pageNum);
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setAllUsers(data.data));

      const pages = [];
      for (let i = 1; i <= data.total_pages; i++) {
        pages.push(i);
      }
      setPagesCount(pages);
    }
  }, [data]);

  return (
    <div className={styles.main}>
      <Header location="main" />
      <div
        className={`${styles.content} ${
          isLoading || isError ? styles.content_flex : ""
        } center`}
      >
        {!isError && !isLoading ? (
          <>
            {allUsers.map((el: any) => {
              return <User data={el} key={el.id} />;
            })}
          </>
        ) : (
          ""
        )}
        {isLoading ? <Spinner /> : ""}
        {isError ? (
          <StyledSmallTitle color="#000">
            Не удалось загрузить пользователей
          </StyledSmallTitle>
        ) : (
          ""
        )}
      </div>
      {!isLoading && !isError ? (
        <div className={styles.pagination}>
          {pagesCount.map((el, index) => (
            <p
              className={`${styles.pagination__item} ${
                pageNum === index + 1 ? styles.pagination__item_active : ""
              }`}
              key={index}
              onClick={handlePagination}
            >
              {el}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
