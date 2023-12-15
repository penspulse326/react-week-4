import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetStyle } from "./Styled/ResetStyle.tsx";
import { GlobalStyle } from "./Styled/GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </>);
