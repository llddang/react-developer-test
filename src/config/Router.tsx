import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/config/ProtectedRoute";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ProfilePage from "@/pages/auth/ProfilePage";
import TestPage from "@/pages/developer-test/TestPage";
import ResultDetailPage from "@/pages/developer-test/ResultDetailPage";

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
