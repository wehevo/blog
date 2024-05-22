import React from "react";
import Header from "@/components/App/Header";
import HeaderMenu from "@/components/App/HeaderMenu";

export function AppLayout({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <HeaderMenu />
      {children}
    </>
  );
}
