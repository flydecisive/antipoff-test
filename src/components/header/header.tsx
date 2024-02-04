import styles from "./header.module.scss";
import MainHeaderContent from "./header-content/main-content";
import UserHeaderContent from "./header-content/user-content";

interface IHeaderProps {
  location: string;
}

function Header({ location }: IHeaderProps) {
  return (
    <header className={`${styles.header} center`}>
      {location === "main" ? <MainHeaderContent /> : <UserHeaderContent />}
    </header>
  );
}

export default Header;
