import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Loader } from "@/components/lib/loader";
import { MainPage } from "./components/views/main-page";

import "@/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Suspense fallback={<Loader />}>
    <StrictMode>
      <div className="appLightTheme">
        <MainPage />
      </div>
    </StrictMode>
  </Suspense>
);
