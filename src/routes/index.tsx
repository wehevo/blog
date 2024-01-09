import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { publicRoutes } from "@/routes/public";
import { privateRoutes } from "@/routes/private";
import { fallbackRoute } from "@/routes/fallback";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { AppRoute } from "@/types/basic";
import { styled } from "styled-components";

export function AppRoutes() {
  const parseRouteObjects = (routes: AppRoute[]): RouteObject[] => {
    return routes.map((route) => ({
      path: route.path,
      element: privateRoutes.includes(route)
        ? route.layout({
            children: <PrivateRoute>{route.element}</PrivateRoute>
          })
        : route.layout({ children: route.element })
    }));
  };

  const publicRouteObjects = parseRouteObjects(publicRoutes);
  const privateRouteObjects = parseRouteObjects(privateRoutes);
  const fallbackRouteObjects = parseRouteObjects(fallbackRoute);

  const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects
  ];

  const allRoutes = useRoutes(routes);

  return (
    <React.Fragment>
      <Container>{allRoutes}</Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;
