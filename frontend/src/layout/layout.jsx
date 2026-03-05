import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className="flex flex-col flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
