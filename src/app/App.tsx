import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { PostDetailPage } from "../pages/PostDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
