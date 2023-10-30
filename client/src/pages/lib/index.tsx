import React from "react";
import { Routes, Route } from "react-router-dom";

import CrewCommunityPage from "pages/CrewCommunityPage";
import CrewCreatePage from "pages/CrewCreatePage";
import CrewDetailPage from "pages/CrewDetailPage";
import CrewListPage from "pages/CrewListPage";
import CrewMemberApprovalPage from "pages/CrewMemberApprovalPage";
import CrewMemberListPage from "pages/CrewMemberListPage";
import CrewpingCreatePage from "pages/CrewpingCreatePage";
import CrewpingDetailPage from "pages/CrewpingDetailPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import KakaoCallback from "pages/KakaoCallback";
import MyBadgePage from "pages/MyBadgePage";
import MyCrewPage from "pages/MyCrewPage";
import MyPloggingPage from "pages/MyPloggingPage";
import MyPloggingDetailPage from "pages/MyPloggingDetailPage";
import MyRankPage from "pages/MyRankPage";
import NotificationPage from "pages/NotificationPage";
import PageNotFound404 from "pages/PageNotFound404";
import PloggingCompletePage from "pages/PloggingCompletePage";
import PloggingPage from "pages/PloggingPage";
import ProfileEditPage from "pages/ProfileEditPage";
import ProfilePage from "pages/ProfilePage";
import RankingPage from "pages/RankingPage";
import VolunteerRegisterPage from "pages/VolunteerRegisterPage";
import FeedCreatePage from "pages/FeedCreatePage";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/plonit/auth/kakao" element={<KakaoCallback />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/profile/edit" element={<ProfileEditPage />}></Route>
      <Route path="/profile/crew" element={<MyCrewPage />}></Route>
      <Route path="/profile/plogging" element={<MyPloggingPage />}></Route>
      <Route path="/profile/rank" element={<MyRankPage />}></Route>
      <Route path="/profile/badge" element={<MyBadgePage />}></Route>
      <Route path="/plogging" element={<PloggingPage />}></Route>
      <Route
        path="/plogging/complete"
        element={<PloggingCompletePage />}
      ></Route>
      <Route
        path="/plogging/volunteer"
        element={<VolunteerRegisterPage />}
      ></Route>
      <Route path="/ranking" element={<RankingPage />}></Route>
      <Route path="/notification" element={<NotificationPage />}></Route>
      <Route path="/crew/list" element={<CrewListPage />}></Route>
      <Route path="/crew/create" element={<CrewCreatePage />}></Route>
      {/* 아래 페이지는 수정할 수도 있음 */}
      <Route
        path="/profile/plogging/detail"
        element={<MyPloggingDetailPage />}
      ></Route>
      <Route path="/crew/member" element={<CrewMemberListPage />}></Route>
      <Route path="/crew/community" element={<CrewCommunityPage />}></Route>
      <Route path="/crew/community/detail" element={<CrewDetailPage />}></Route>
      <Route
        path="/crew/community/approval"
        element={<CrewMemberApprovalPage />}
      ></Route>
      <Route
        path="/crew/crewping/create"
        element={<CrewpingCreatePage />}
      ></Route>
      <Route
        path="/crew/crewping/detail"
        element={<CrewpingDetailPage />}
      ></Route>
      <Route path="/feed/create" element={<FeedCreatePage />}></Route>
      <Route path="/*" element={<PageNotFound404 />}></Route>
    </Routes>
  );
};

export default RouteComponent;
