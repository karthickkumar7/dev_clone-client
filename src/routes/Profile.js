import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HeaderNav from "../components/HeaderNav";
import ProfileHeader from "../components/profile/ProfileHeader";
import UserThreadsList from "../components/profile/UserThreadsList";

const Profile = () => {
  const { isLoggedIn } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="w-screen min-h-[1150px] flex flex-col bg-bgclight">
      <HeaderNav />
      <div className="w-screen min-h-[150px] bg-black"></div>
      <div className="w-full flex flex-col items-center relative">
        <ProfileHeader />
        <UserThreadsList />
      </div>
    </div>
  );
};

export default Profile;
