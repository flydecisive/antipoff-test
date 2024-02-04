import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetAllUsersQuery } from "../../services/appApi";
import { setAllUsers } from "../../store/actions/creators/users";
import { useSelector } from "react-redux";
import styles from "./main.module.scss";
import Header from "../../components/header/header";
import User from "../../components/user/user";

function Main() {
  const [fetchAllUsers, { data }] = useLazyGetAllUsersQuery();
  const dispatch = useDispatch();
  const allUsers = useSelector((store: any) => store?.users.allUsers);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (data) dispatch(setAllUsers(data.data));
  }, [data]);

  useEffect(() => {
    console.log(allUsers);
  }, [allUsers]);

  return (
    <div className={styles.main}>
      <Header location="main" />
      <div className={`${styles.content} center`}>
        {allUsers.map((el: any) => {
          return <User data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
