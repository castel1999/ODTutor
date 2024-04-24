import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ReelPage from "./pages/ReelPage";
import TrophyPage from "./pages/TrophyPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reels" element={<ReelPage />} />
        <Route path="/trophies" element={<TrophyPage />} />


        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
