import { RouterProvider } from "react-router-dom";
import { MainRoutes } from "./routes/Mainroutes";

const App = () => {
  return (
    <>
      <RouterProvider router={MainRoutes} />
    </>
  );
};

export default App;
