import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-[100vh]">
      <header className="h-15 !p-4 shadow-md">header...</header>
      <main className="max-w-[1000px] m-10 lg:mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
