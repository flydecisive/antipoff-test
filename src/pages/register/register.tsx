import styles from "./register.module.scss";
import { StyledSmallTitle } from "../../components/typography/typography";
import Input from "../../components/input/input";
import PrimeButton from "../../components/buttons/prime-button/prime-button";

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <StyledSmallTitle color="#000">Регистрация</StyledSmallTitle>
          <Input type="text" label="Имя" placeholder="Введите имя" />
          <Input
            type="text"
            label="Электронная почта"
            placeholder="Введите email"
          />
          <Input type="password" label="Пароль" placeholder="Введите пароль" />
          <Input
            type="password"
            label="Повторите пароль"
            placeholder="Введите пароль"
          />
        </div>
        <PrimeButton isDisabled={false} text="Зарегистрироваться" />
      </div>
    </div>
  );
}

export default Register;
