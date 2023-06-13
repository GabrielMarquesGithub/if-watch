import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import ThemeProvider from "./assets/theme/ThemeProvider.tsx";
import GlobalStyle from "./assets/styles/global.ts";
import { RoomProvider } from "./contexts/roomContext.tsx";
import { BackgroundAnimation } from "./components/BackgroundAnimation/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BackgroundAnimation objectsQuantity={30} />
      <GlobalStyle />
      <RoomProvider>
        <App />
      </RoomProvider>
    </ThemeProvider>
  </React.StrictMode>
);
