import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import TicketPage from "./pages/TicketPage";
import CinemaPage from "./pages/CinemaPage";
import EventPage from "./pages/EventPage";
import PostListPage from "./pages/PostListPage";
import MeetListPage from "./pages/MeetListPage";
import MainPage from "./pages/MainPage";
import PersonSeat from "./pages/PersonSeat";
import MoviedetailPage from "./pages/MoviedetailPage";
import CurrentMoviePage from "./pages/CurrentMoviePage";
import PostPage from "./pages/PostPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/admin/AdminPage";
import MeetWritePage from "./pages/MeetWritePage";
import MeetPage from "./pages/MeetPage";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage/:id" element={<MyPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/currentmovie" element={<CurrentMoviePage />} />
      <Route path="/ticket" element={<TicketPage />}>
        <Route path="/ticket/PersonSeat" element={<PersonSeat />} />
      </Route>
      <Route path="/detail/:id" element={<MoviedetailPage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
      <Route path="/meet" element={<MeetListPage />} />
      <Route path="/meet/detail/:meetNum" element={<MeetPage />} />
      <Route path="/meet/write" element={<MeetWritePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
