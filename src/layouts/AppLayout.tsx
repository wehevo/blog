import React from "react";
import Header from "@/components/App/Header";

export function AppLayout({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        {children}
      </div>
    </>
  );
}
