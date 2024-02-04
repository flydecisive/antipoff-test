import styles from "./grey-button.module.scss";
import { StyledText } from "../../typography/typography";

interface IGreyButtonProps {
  onClick: () => void;
  text: string;
}

function GreyButton({ onClick, text }: IGreyButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles["button-grey"]}`}
      onClick={onClick}
    >
      <StyledText color="#000">{text}</StyledText>
    </button>
  );
}

export default GreyButton;
