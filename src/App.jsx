import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OTPVerifyPage from "./pages/OTPVerifyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import TextAIPage from "./pages/TextAIPage";
import ImageAIPage from "./pages/ImageAIPage";
import AudioAIPage from "./pages/AudioAIPage";
import VideoAIPage from "./pages/VideoAIPage";
import SpyAIPage from "./pages/SpyAIPage";
import CreatorsToolsPage from "./pages/CreatorsToolsPage";
import MarketplacePage from "./pages/MarketplacePage";
import ProjectsPage from "./pages/ProjectsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import SalesListPage from "./pages/SalesListPage";
import SellProductPage from "./pages/SellProductPage";

import "./styles/App.css";
import NotFoundPage from "./pages/NotFoundPage";
import AgeGatePopUp from "./components/AgeGatePopUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AgeGatePopUp/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verify" element={<OTPVerifyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/text-ai" element={<TextAIPage />} />
        <Route path="/image-ai" element={<ImageAIPage />} />
        <Route path="/audio-ai" element={<AudioAIPage />} />
        <Route path="/video-ai" element={<VideoAIPage />} />
        <Route path="/spy-ai" element={<SpyAIPage />} />
        <Route path="/creators-tools" element={<CreatorsToolsPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/sales-list" element={<SalesListPage />} />
        <Route path="/sell-product" element={<SellProductPage />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
