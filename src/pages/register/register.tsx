import styles from "./register.module.scss";
import { StyledSmallTitle } from "../../components/typography/typography";
import Input from "../../components/input/input";
import PrimeButton from "../../components/buttons/prime-button/prime-button";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { useRegisterReqMutation } from "../../services/appApi";
import { useAppContext } from "../../contexts/app";
import { useNavigate } from "react-router-dom";

function Register() {
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const EMAIL_REGEX =
    /^[a-zA-Z0-9]{0,1}([._%+-]?[a-zA-Z0-9]){1,62}@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z0-9]{2,6}$/;
  const NAME_REGEX = /^[a-zA-Zа-яА-Я ,.'-@]+$/i;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [registerReqTrigger, { data }] = useRegisterReqMutation();
  const { setIsAllowed } = useAppContext();
  const navigate = useNavigate();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterButton = () => {
    registerReqTrigger({ email: email, password: password });
  };

  useEffect(() => {
    if (email.length > 0) {
      setErrorState({
        ...errorState,
        email: !EMAIL_REGEX.test(email),
      });
    } else {
      setErrorState({
        ...errorState,
        email: false,
      });
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      setErrorState({
        ...errorState,
        password: !PASSWORD_REGEX.test(password),
      });
    } else if (password.length === 0 && confirmPassword.length === 0) {
      setErrorState({
        ...errorState,
        password: false,
      });
    }

    if (
      password !== confirmPassword &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      setErrorState({ ...errorState, confirmPassword: true });
    } else if (password === confirmPassword) {
      setErrorState({ ...errorState, confirmPassword: false });
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    const isError = Object.values(errorState).every((value) => value === false);

    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      isError
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [errorState, name, email, password, confirmPassword]);

  useEffect(() => {
    if (name.length > 0) {
      setErrorState({ ...errorState, name: !NAME_REGEX.test(name) });
    } else {
      setErrorState({ ...errorState, name: false });
    }
  }, [name]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      setIsAllowed(true);
      navigate("/");
    }
  }, [data]);

  return (
    <div className={styles.register}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <StyledSmallTitle color="#000">Регистрация</StyledSmallTitle>
          <Input
            type="text"
            label="Имя"
            placeholder="Введите имя"
            onChange={handleName}
            isError={errorState.name}
          />
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
          <Input
            type="password"
            label="Повторите пароль"
            placeholder="Введите пароль"
            onChange={handleConfirmPassword}
            isError={errorState.confirmPassword}
          />
        </div>
        <PrimeButton
          isDisabled={isButtonDisabled}
          text="Зарегистрироваться"
          onClick={handleRegisterButton}
        />
      </div>
    </div>
  );
}

export default Register;
