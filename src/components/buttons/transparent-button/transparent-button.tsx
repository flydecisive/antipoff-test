import styles from "./transparent-button.module.scss";
import { StyledText } from "../../typography/typography";

interface ITransparentButtonProps {
  text: string;
  onClick: () => void;
}

function TransparentButton({ text, onClick }: ITransparentButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <StyledText color="#f8f8f8">{text}</StyledText>
    </button>
  );
}

export default TransparentButton;
