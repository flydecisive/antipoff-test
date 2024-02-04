import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { StyledSmallTitle } from "../../components/typography/typography";
import Input from "../../components/input/input";
import PrimeButton from "../../components/buttons/prime-button/prime-button";
import GreyButton from "../../components/buttons/grey-button/grey-button";

function Login() {
  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/register");
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <StyledSmallTitle color="#000">Войти</StyledSmallTitle>
          <Input
            type="text"
            label="Электронная почта"
            placeholder="Введите email"
          />
          <Input type="password" label="Пароль" placeholder="Введите пароль" />
        </div>
        <div className={styles.buttons}>
          <PrimeButton isDisabled={false} text="Войти" />
          <GreyButton
            onClick={handleRegisterButton}
            text="Зарегистрироваться"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
