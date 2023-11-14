import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@aws-amplify/ui-react/styles.css";
import config from "./aws-exports";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { BrowserRouter } from "react-router-dom";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </BrowserRouter>
);
