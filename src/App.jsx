import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import ShowHeader from "./components/header/ShowHeader";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import Chat from "./components/chat/Chat";
import TutorListPage from "./pages/TutorListPage";
import AboutPage from "./pages/AboutPage";
import UserAccount from "./components/userAccountLayout/UserAccount";
import ProfilePage from "./pages/userAccount/ProfilePage";
import WalletPage from "./pages/userAccount/WalletPage";
import FavotitePage from "./pages/FavotitePage";
import UpgradeAccoutPage from "./pages/userAccount/UpgradeAccoutPage";

function App() {
  return (
    <BrowserRouter>
      <ShowHeader>
        <Header />
        <Chat/>
      </ShowHeader>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/tutor-list" element={<TutorListPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />

        <Route path="/favorite" element={<FavotitePage />} />


        <Route path="/account" element={<UserAccount />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="upgrade" element={<UpgradeAccoutPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
