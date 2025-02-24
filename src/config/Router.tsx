import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/config/ProtectedRoute";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ProfilePage from "@/pages/auth/ProfilePage";
import TestPage from "@/pages/developer-test/TestPage";
import ResultDetailPage from "@/pages/developer-test/ResultDetailPage";
import ResultsPage from "@/pages/developer-test/ResultsPage";
import { Suspense } from "react";
import Loading from "@/components/commons/Loading";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      {
        path: "results/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ResultDetailPage />
          </Suspense>
        ),
      },
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
          {
            path: "results",
            element: (
              <Suspense fallback={<Loading />}>
                <ResultsPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute, ...protectedRoute]);

  return <RouterProvider router={router} />;
}
