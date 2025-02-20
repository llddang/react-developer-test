import RootLayout from "@/components/layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const publicRoute = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <>home</> },
      { path: "sign-in", element: <>sign-in</> },
      { path: "sign-up", element: <>sign-up</> },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute]);

  return <RouterProvider router={router} />;
}
