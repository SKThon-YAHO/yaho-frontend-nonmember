import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import RootLayout from "./layout/RootLayout.jsx";

import UsagePage from "./pages/Usage/UsagePage.jsx";
import SurveyPage from "./pages/Survey/SurveyPage.jsx";
import CompletePage from "./pages/Complete/CompletePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppFrame>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<UsagePage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/complete" element={<CompletePage />} />
          </Route>
        </Routes>
      </AppFrame>
    </BrowserRouter>
  );
}

export default App;

const AppFrame = styled.div`
  width: 100%;
  max-width: 361px;
  min-height: 770px;

  margin: 0 auto;
  background: #ffffff;

  position: relative;
  overflow-x: hidden;

  @media (max-width: 390px) {
    max-width: 100%;
    width: 100%;
    min-height: 100dvh;
  }
`;
