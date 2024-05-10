import HomePage from "./Pages/Home/HomePage";
import "./App.css";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddNewPage from "./Pages/NewIdea/AddNewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new",
    element: <AddNewPage />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="flex flex-col items-center justify-center p-4 md:p-10 ">
        <div className="max-w-2xl w-full items-center">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
