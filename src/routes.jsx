import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { ExploreTalent } from "./pages/ExploreTalent";
import { Jobs } from "./pages/Jobs";
import { Messages } from "./pages/Messages";
import { Notifications } from "./pages/Notifications";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { SavedPosts } from "./pages/SavedPosts";
import { Followers } from "./pages/Followers";
import { Following } from "./pages/Following";
import { Analytics } from "./pages/Analytics";
import { Settings } from "./pages/Settings";

import { AdminPanel } from "./pages/AdminPanel";
import { NotFound } from "./pages/NotFound";

import { DashboardLayout } from "./components/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  /* DASHBOARD ROUTES */

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "explore",
        element: <ExploreTalent />,
      },

      {
        path: "jobs",
        element: <Jobs />,
      },

      {
        path: "messages",
        element: <Messages />,
      },

      {
        path: "notifications",
        element: <Notifications />,
      },

      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "projects/:id",
        element: <ProjectDetail />,
      },

      {
        path: "saved",
        element: <SavedPosts />,
      },

      {
        path: "followers",
        element: <Followers />,
      },

      {
        path: "following",
        element: <Following />,
      },

      {
        path: "analytics",
        element: <Analytics />,
      },

      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "profile/:username",
        element: <Profile />,
      },
    ],
  },

  /* ADMIN */

  {
    path: "/admin",
    element: <AdminPanel />,
  },

  /* 404 */

  {
    path: "*",
    element: <NotFound />,
  },
]);