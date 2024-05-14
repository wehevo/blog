import React from "react";

export function EmptyLayout({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
