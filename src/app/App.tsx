import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { PostDetailPage } from "@/pages/PostDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page/:page" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
