import styles from "./header-content.module.scss";
import { StyledBigTitle } from "../../typography/typography";
import TransparentButton from "../../buttons/transparent-button/transparent-button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppContext } from "../../../contexts/app";

function UserHeaderContent() {
  const user = useSelector((store: any) => store?.users.singleUser);
  const navigate = useNavigate();
  const { isMobile } = useAppContext();

  const handleBackButton = () => {
    navigate("/");
  };

  const handleExitButton = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={styles.user}>
      {isMobile ? (
        <>
          <div className={styles.user__content}>
            <div className={styles.user__buttons}>
              <button
                className={`${styles.user__button} ${styles.user__button_back}`}
                onClick={handleBackButton}
              >
                <img src="/public/back.svg" alt="back" />
              </button>
              <button
                className={styles.user__button}
                onClick={handleExitButton}
              >
                <img src="/public/exit.svg" alt="back" />
              </button>
            </div>
            <div className={styles.user__wrapper}>
              <div className={styles.user__info}>
                <StyledBigTitle
                  color="#fff"
                  is_mobile={isMobile.toString()}
                >{`${user?.first_name} ${user?.last_name}`}</StyledBigTitle>
                <p className={styles.user__status}>Партнер</p>
              </div>
              <img
                src={user.avatar}
                alt="avatar"
                className={styles.user__avatar}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.user__content}>
            <TransparentButton text="Назад" onClick={handleBackButton} />
            <div className={styles.user__wrapper}>
              <img
                src={user.avatar}
                alt="avatar"
                className={styles.user__avatar}
              />
              <div className={styles.user__info}>
                <StyledBigTitle color="#fff">{`${user?.first_name} ${user?.last_name}`}</StyledBigTitle>
                <p className={styles.user__status}>Партнер</p>
              </div>
            </div>
          </div>
          <TransparentButton text="Выход" onClick={handleExitButton} />
        </>
      )}
    </div>
  );
}

export default UserHeaderContent;
