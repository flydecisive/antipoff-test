import { useState } from "react";
import AppRoutes from "./routes/routes";

function App() {
  const [isAllowed, setIsAllowed] = useState<boolean>(false);

  return (
    <div className="app">
      <AppRoutes isAllowed={isAllowed} />
    </div>
  );
}

export default App;
