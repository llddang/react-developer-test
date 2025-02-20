import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const publicRoute = [
  { path: "/", element: <>home</> },
  {
    path: "/",
    element: (
      <>
        authLayout <Outlet />
      </>
    ),
    children: [
      { path: "sign-in", element: <>sign-in</> },
      { path: "sign-up", element: <>sign-up</> },
    ],
  },
];

export default function Router() {
  const router = createBrowserRouter([...publicRoute]);

  return <RouterProvider router={router} />;
}
