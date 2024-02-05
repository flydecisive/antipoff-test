import styles from "./header.module.scss";
import MainHeaderContent from "./header-content/main-content";
import UserHeaderContent from "./header-content/user-content";

interface IHeaderProps {
  location: string;
  isError?: boolean;
  isLoading?: boolean;
}

function Header({ location, isError, isLoading }: IHeaderProps) {
  return (
    <header className={`${styles.header} center`}>
      {location === "main" ? (
        <MainHeaderContent />
      ) : (
        <UserHeaderContent isError={isError} isLoading={isLoading} />
      )}
    </header>
  );
}

export default Header;
