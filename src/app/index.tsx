import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { StoreProvider } from "./providers/StoreProvider";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
