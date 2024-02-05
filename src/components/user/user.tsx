import styles from "./user.module.scss";
import { StyledSmallTitle } from "../typography/typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IUserInterface {
  data: { id: number; first_name: string; last_name: string; avatar: string };
}

function User({ data }: IUserInterface) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleUserClick = (e: any) => {
    if (e.target.tagName !== "path" && e.target.tagName !== "svg") {
      navigate(`/user/${data.id}`);
    }
  };

  return (
    <div className={styles.wrapper} onClick={handleUserClick}>
      <img src={data.avatar} alt="" className={styles.avatar} />
      <StyledSmallTitle color="#000">{`${data.first_name} ${data.last_name}`}</StyledSmallTitle>
      <div className={styles.like__wrapper}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.like} ${isLiked ? styles.like_active : ""}`}
          onClick={handleLike}
        >
          <path
            d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
            fill="current"
            stroke="current"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default User;
