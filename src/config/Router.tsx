import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/config/ProtectedRoute";
import ProfilePage from "@/pages/ProfilePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";
import ResultDetailPage from "@/pages/ResultDetailPage";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "results/:type", element: <ResultDetailPage /> },
    ],
  },
];

const protectedRoute = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <RootLayout />,
        children: [
          { path: "profile", element: <ProfilePage /> },
          { path: "test", element: <TestPage /> },
        ],
      },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute, ...protectedRoute]);

  return <RouterProvider router={router} />;
}
