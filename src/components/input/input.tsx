import styles from "./input.module.scss";
import { StyledText, StyledSmallText } from "../typography/typography";
import { useState, useEffect, useRef } from "react";
import { ChangeEvent } from "react";

interface IInputProps {
  label: string;
  type: string;
  placeholder: string;
  onChange?: (params: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

function Input({ label, type, placeholder, onChange, isError }: IInputProps) {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const ref = useRef(null);

  const handleButton = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const defErrorMessage = (value: string) => {
    switch (value) {
      case "Имя": {
        setErrorMessage("Введите корректное имя");
        break;
      }
      case "Пароль": {
        setErrorMessage(
          "Пароль должен быть не менее 8 символов и содержать хотябы 1 цифру и 1 заглавную букву"
        );
        break;
      }
      case "Электронная почта": {
        setErrorMessage("Введите корректную электронную почту");
        break;
      }
      case "Повторите пароль": {
        setErrorMessage("Введенные пароли не совпадают");
        break;
      }
      default: {
        setErrorMessage("");
        break;
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      if (isPasswordShow) {
        setInputType("text");
      } else {
        setInputType("password");
      }
    }
  }, [isPasswordShow]);

  useEffect(() => {
    if (isError) {
      defErrorMessage(label);
    }
  }, [isError]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <StyledText color="#000">{label}</StyledText>
      </label>
      <div
        className={`${styles.input__wrapper} ${
          isError ? styles.input__wrapper_error : ""
        }`}
      >
        <input
          className={styles.input}
          type={inputType}
          placeholder={placeholder}
          ref={type === "password" ? ref : null}
          onChange={onChange}
        />
        {type === "password" ? (
          <button className={styles.button} onClick={handleButton}>
            <img
              src={
                isPasswordShow
                  ? "/eye-password-show.svg"
                  : "/eye-password-hide.svg"
              }
              alt="eye"
              className={styles.button__image}
            />
          </button>
        ) : (
          ""
        )}
      </div>
      {errorMessage && isError ? (
        <StyledSmallText color="red">{errorMessage}</StyledSmallText>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
