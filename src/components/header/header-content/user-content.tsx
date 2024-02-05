import styles from "./header-content.module.scss";
import { StyledBigTitle, StyledSmallTitle } from "../../typography/typography";
import TransparentButton from "../../buttons/transparent-button/transparent-button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppContext } from "../../../contexts/app";

interface IUserHeaderContentProps {
  isError: boolean | undefined;
  isLoading: boolean | undefined;
}

function UserHeaderContent({ isError, isLoading }: IUserHeaderContentProps) {
  const user = useSelector((store: any) => store?.users.singleUser);
  const navigate = useNavigate();
  const { isMobile, setIsAllowed } = useAppContext();

  const handleBackButton = () => {
    navigate("/");
  };

  const handleExitButton = () => {
    localStorage.clear();
    navigate("/login");
    setIsAllowed(false);
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
                <img src="/back.svg" alt="back" />
              </button>
              <button
                className={styles.user__button}
                onClick={handleExitButton}
              >
                <img src="/exit.svg" alt="back" />
              </button>
            </div>
            <div className={styles.user__wrapper}>
              {isError ? (
                <StyledSmallTitle color="#fff">
                  Пользователь не найден
                </StyledSmallTitle>
              ) : (
                ""
              )}
              {!isError && !isLoading ? (
                <>
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
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.user__content}>
            <TransparentButton text="Назад" onClick={handleBackButton} />
            <div className={styles.user__wrapper}>
              {isError ? (
                <StyledSmallTitle color="#fff">
                  Пользователь не найден
                </StyledSmallTitle>
              ) : (
                ""
              )}
              {!isError && !isLoading ? (
                <>
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className={styles.user__avatar}
                  />
                  <div className={styles.user__info}>
                    <StyledBigTitle color="#fff">{`${user?.first_name} ${user?.last_name}`}</StyledBigTitle>
                    <p className={styles.user__status}>Партнер</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <TransparentButton text="Выход" onClick={handleExitButton} />
        </>
      )}
    </div>
  );
}

export default UserHeaderContent;
