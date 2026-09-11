import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import RootLayout from "./layout/RootLayout";

import UsageStartPage from "./pages/Usage/UsageStartPage";
import UsageEndPage from "./pages/Usage/UsageEndPage";
import SurveyPage from "./pages/Survey/SurveyPage";
import CompletePage from "./pages/Complete/CompletePage";

function App() {
  return (
    <BrowserRouter>
      <AppFrame>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/:toilet_code" element={<UsageStartPage />} />

            <Route path="/:toilet_code/usage" element={<UsageEndPage />} />

            <Route path="/:toilet_code/survey" element={<SurveyPage />} />

            <Route path="/:toilet_code/complete" element={<CompletePage />} />
          </Route>
        </Routes>
      </AppFrame>
    </BrowserRouter>
  );
}

export default App;

const AppFrame = styled.div`
  width: 100%;
  max-width: 371px;
  min-height: 770px;

  margin: 0 auto;

  background: #ffffff;

  position: relative;
  overflow-x: hidden;

  @media (max-width: 390px) {
    max-width: 100%;
    min-height: 100dvh;
  }
`;
