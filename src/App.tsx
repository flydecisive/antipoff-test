import { useState, useEffect } from "react";
import AppRoutes from "./routes/routes";
import { AppContext } from "./contexts/app";

import styles from "./App.module.scss";

function App() {
  const [isAllowed, setIsAllowed] = useState<boolean>(
    localStorage.getItem("token") ? true : false
  );
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 375);

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      setIsMobile(innerWidth <= 375);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.app}>
      <AppContext.Provider
        value={{ isMobile, setIsMobile, isAllowed, setIsAllowed }}
      >
        <AppRoutes isAllowed={isAllowed} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
