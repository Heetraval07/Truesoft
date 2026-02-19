import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
