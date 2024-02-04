import styles from "./header-content.module.scss";
import { StyledBigTitle, StyledSmallTitle } from "../../typography/typography";
import TransparentButton from "../../buttons/transparent-button/transparent-button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/app";

function MainHeaderContent() {
  const navigate = useNavigate();
  const textContent = `Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
  ложатся на их плечи, и умеющие находить выход из любых, даже самых
  сложных ситуаций.`;
  const { isMobile } = useAppContext();

  const handleExitButton = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <StyledBigTitle color="#fff" is_mobile={isMobile.toString()}>
          Наша команда
        </StyledBigTitle>
        <StyledSmallTitle
          color="#f8f8f8"
          align="center"
          is_mobile={isMobile.toString()}
        >
          {textContent}
        </StyledSmallTitle>
      </div>
      <div className={styles.main__button}>
        {isMobile ? (
          <img
            src="/public/exit.svg"
            alt="exit"
            className={styles.main__image}
            onClick={handleExitButton}
          />
        ) : (
          <TransparentButton text="Выход" onClick={handleExitButton} />
        )}
      </div>
    </div>
  );
}

export default MainHeaderContent;
