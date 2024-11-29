import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StaticText from "./pages/StaticText";
import DynamicText from "./pages/DynamicText";
import PassingDefault from "./pages/PassingDefault";
import Context from "./pages/Context";
import { NavLink } from "react-router";
import { cn } from "./lib/utils";
import Nesting from "./pages/Nesting";
import ObjectAndArray from "./pages/ObjectAndArray";

const App: React.FC = () => {
  const routes = [
    {
      path: "/",
      title: "Static Text",
      component: <StaticText />,
    },
    {
      path: "/dynamic",
      title: "Dynamic Text",
      component: <DynamicText />,
    },
    {
      path: "/passing-default",
      title: "Passing Default Value",
      component: <PassingDefault />,
    },
    {
      path: "/context",
      title: "Context",
      component: <Context />,
    },
    {
      path: "/nesting",
      title: "Nesting",
      component: <Nesting />,
    },
    {
      path: "/objects-arrays",
      title: "Objects and Arrays",
      component: <ObjectAndArray />,
    },
  ];

  return (
    <Router>
      <div className="flex min-h-screen h-full">
        <aside className="w-1/4 bg-gray-200 p-4">
          <nav>
            <h1 className="text-3xl font-bold mb-10 mt-2 text-blue-800">
              React i18next
            </h1>

            <ul className="space-y-1">
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      cn(
                        "text-blue-600 block w-full p-2 rounded-md hover:bg-blue-100 transition transition-background",
                        isActive && "!bg-white font-bold"
                      )
                    }
                  >
                    {route.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-3/4 p-4">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
