import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { Settings } from "./pages/Settings";
import { RoutesPage } from "./pages/Routes";
import {AuthProvider} from "./shared/providers/Auth/AuthProvider.tsx";

function App() {
  return (
    <Router>
      <div className={"main"}>
        <AuthProvider>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routesMe" element={<RoutesPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
