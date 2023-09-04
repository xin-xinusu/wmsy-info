import React from "react";
import Head from "next/head";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutWrapper } from "./LayoutStyles.js";
import { HeaderVariant } from "./layout.standard.js";

export const Layout = (props) => {
  const { children, title, variant = HeaderVariant.LIGHT } = props;

  return (
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        {/* TODO: check "content" prop below */}
        <meta name="description" content="Whimsy" />
      </Head>
      <Header variant={variant} />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

