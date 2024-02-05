import styles from "./prime-button.module.scss";
import { StyledText } from "../../typography/typography";

interface IPrimeButtonProps {
  isDisabled: boolean;
  text: string;
  onClick?: () => void;
}

function PrimeButton({ isDisabled, text, onClick }: IPrimeButtonProps) {
  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      <StyledText color="#fff">{text}</StyledText>
    </button>
  );
}

export default PrimeButton;
