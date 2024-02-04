import styles from "./prime-button.module.scss";
import { StyledText } from "../../typography/typography";

interface IPrimeButtonProps {
  isDisabled: boolean;
  text: string;
}

function PrimeButton({ isDisabled, text }: IPrimeButtonProps) {
  return (
    <button className={styles.button} disabled={isDisabled}>
      <StyledText color="#fff">{text}</StyledText>
    </button>
  );
}

export default PrimeButton;
