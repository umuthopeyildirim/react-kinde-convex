import React from "react";
import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithKinde } from "@umuthopeyildirim/convex-kinde-auth";
import App from "./App.jsx";
import "./index.css";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);
console.log(import.meta.env.VITE_KINDE_LOGOUT_URI);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URI}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI}
      audience="convex"
      isDangerouslyUseLocalStorage={true}
    >
      <ConvexProviderWithKinde client={convex}>
        <App />
      </ConvexProviderWithKinde>
    </KindeProvider>
  </React.StrictMode>
);
