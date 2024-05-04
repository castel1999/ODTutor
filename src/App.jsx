import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ReelPage from "./pages/ReelPage";
import TrophyPage from "./pages/TrophyPage";
import ShowHeader from "./components/header/ShowHeader";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ShowHeader>
        <Header />
      </ShowHeader>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reels" element={<ReelPage />} />
        <Route path="/trophies" element={<TrophyPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
