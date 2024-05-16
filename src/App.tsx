import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { LogInPage } from "./pages/LogInPage";
import { Settings } from "./pages/Settings";
import { RoutesPage } from "./pages/Routes";

function App() {
  return (
    <Router>
      <div className={"main"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/routes" element={<RoutesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
