import "semantic-ui-css/semantic.min.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/app.tsx";

/* globals document -- web browser */
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- index.html
ReactDOM.createRoot(document.querySelector(`#root`)!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
