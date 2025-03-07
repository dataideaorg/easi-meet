import HomePage from "./pages/HomePage";
import MeetingPage from "./pages/MeetingPage";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/404";
// import ProtectedRoute from "./components/ProtectedRoute";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      {/* Protected Meeting Route */}
      {/* <Route element={<ProtectedRoute />}>
        <Route path="meeting" element={<MeetingPage />} />
      </Route> */}
      <Route path="meeting" element={<MeetingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;