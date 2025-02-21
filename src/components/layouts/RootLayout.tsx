import { Outlet } from "react-router-dom";
import Header from "@/components/layouts/Header";

export default function RootLayout() {
  return (
    <div className="min-h-[100vh]">
      <Header />
      <main className="max-w-5xl m-10 lg:mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
