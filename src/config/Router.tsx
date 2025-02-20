import RootLayout from "@/components/layouts/RootLayout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <>home</> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute]);

  return <RouterProvider router={router} />;
}
