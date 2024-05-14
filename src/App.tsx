import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/routes";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;