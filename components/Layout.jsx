import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>Mazen Store</Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
