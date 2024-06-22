import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import "./styles/global.sass"
import { IS_DEV } from "./utils/constants.ts"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter basename={IS_DEV ? "/" : `/${URL}`}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
