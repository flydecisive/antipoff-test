import styles from "./input.module.scss";
import { StyledText } from "../typography/typography";
import { useState, useEffect, useRef } from "react";

interface IInputProps {
  label: string;
  type: string;
  placeholder: string;
}

function Input({ label, type, placeholder }: IInputProps) {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type);
  const ref = useRef(null);

  const handleButton = () => {
    setIsPasswordShow(!isPasswordShow);
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

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <StyledText color="#000">{label}</StyledText>
      </label>
      <div className={styles.input__wrapper}>
        <input
          className={styles.input}
          type={inputType}
          placeholder={placeholder}
          ref={type === "password" ? ref : null}
        />
        {type === "password" ? (
          <button className={styles.button} onClick={handleButton}>
            <img
              src={
                isPasswordShow
                  ? "/public/eye-password-show.svg"
                  : "/public/eye-password-hide.svg"
              }
              alt="eye"
              className={styles.button__image}
            />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Input;
