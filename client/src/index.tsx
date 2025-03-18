import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage/HomePage";
import TodoPage from "./Components/TodoPage/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionPage from "./Components/SelectionPage/SelectionPage";
import CalendarPage from "./Components/CalendarPage/CalendarPage";
import NotFound from "./Components/NotFoundPage";
import QuizPage from "./Components/QuizPage/QuizPage";
import DrumKitPage from "./Components/DrumKitPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sunnys-quests" element={<TodoPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/drumkit" element={<DrumKitPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
