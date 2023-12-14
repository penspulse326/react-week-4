import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetStyle } from "./GlobalStyled/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<><ResetStyle /><App /></>);
