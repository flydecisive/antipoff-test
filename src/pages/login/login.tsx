import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { StyledSmallTitle } from "../../components/typography/typography";
import Input from "../../components/input/input";
import PrimeButton from "../../components/buttons/prime-button/prime-button";
import GreyButton from "../../components/buttons/grey-button/grey-button";
import { ChangeEvent } from "react";
import { useLoginReqMutation } from "../../services/appApi";
import { useAppContext } from "../../contexts/app";

function Login() {
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const EMAIL_REGEX =
    /^[a-zA-Z0-9]{0,1}([._%+-]?[a-zA-Z0-9]){1,62}@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z0-9]{2,6}$/;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [errorState, setErrorState] = useState({
    email: false,
    password: false,
  });
  const [loginReqTrigger, { data }] = useLoginReqMutation();
  const navigate = useNavigate();
  const { setIsAllowed } = useAppContext();

  const handleRegisterButton = () => {
    navigate("/register");
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = () => {
    loginReqTrigger({ email: email, password: password });
  };

  useEffect(() => {
    if (email.length > 0) {
      setErrorState({
        ...errorState,
        email: !EMAIL_REGEX.test(email),
      });
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      setErrorState({
        ...errorState,
        password: !PASSWORD_REGEX.test(password),
      });
    }
  }, [password]);

  useEffect(() => {
    const isError = Object.values(errorState).every((value) => value === false);

    if (email.length > 0 && password.length > 0 && isError) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [errorState, email, password]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      setIsAllowed(true);
      navigate("/");
    }
  }, [data]);

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <StyledSmallTitle color="#000">Войти</StyledSmallTitle>
          <Input
            type="text"
            label="Электронная почта"
            placeholder="Введите email"
            onChange={handleEmail}
            isError={errorState.email}
          />
          <Input
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            onChange={handlePassword}
            isError={errorState.password}
          />
        </div>
        <div className={styles.buttons}>
          <PrimeButton
            isDisabled={isButtonDisabled}
            text="Войти"
            onClick={handleLoginButton}
          />
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
