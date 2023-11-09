import React from "react";
import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import { useAuthFromKinde } from "./lib/useAuthFromKinde.js";
import App from "./App.jsx";
import "./index.css";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId="6557e00e8a2948c8956a82b425c40259"
      domain="https://luminarylightning.kinde.com"
      logoutUri="http://localhost:3000/"
      redirectUri="http://localhost:3000/"
      isDangerouslyUseLocalStorage={true}
    >
      <ConvexProviderWithAuth client={convex} useAuth={useAuthFromKinde}>
        <App />
      </ConvexProviderWithAuth>
    </KindeProvider>
  </React.StrictMode>
);
