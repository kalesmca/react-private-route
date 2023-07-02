import React from "react";
import { Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "./container/postAuth/protectedLayout/protectedLayout";
import ProfileComponent from "./container/postAuth/profile/profileComponent";
import SettingsComponent from "./container/postAuth/settings/settingsComponent";
import { LoginLayout } from "./container/preAuth/authLayout/loginLayout";
import Home from "./container/preAuth/home/home";
import Login from "./container/preAuth/login/login";
// ...

export default function App() {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfileComponent />} />
        <Route path="settings" element={<SettingsComponent />} />
      </Route>
    </Routes>
  );
}