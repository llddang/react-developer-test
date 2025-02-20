import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/config/ProtectedRoute";
import ProfilePage from "@/pages/ProfilePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <ProtectedRoute /> },
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
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute, ...protectedRoute]);

  return <RouterProvider router={router} />;
}
