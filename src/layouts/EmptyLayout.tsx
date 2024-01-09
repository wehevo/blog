import React from "react";
import styled from "styled-components";

export function EmptyLayout({
  children
}: React.PropsWithChildren): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
