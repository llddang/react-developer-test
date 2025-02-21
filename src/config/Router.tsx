import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/config/ProtectedRoute";
import ProfilePage from "@/pages/ProfilePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";
import ResultPage from "@/pages/ResultPage";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
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
          { path: "result", element: <ResultPage /> },
        ],
      },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute, ...protectedRoute]);

  return <RouterProvider router={router} />;
}
