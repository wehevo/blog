export type AppRoute = {
  path: string;
  element: JSX.Element;
  layout: (props: { children?: React.ReactNode }) => JSX.Element;
};
