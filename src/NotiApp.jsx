import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const NotiApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
