import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import { Shimmer } from "react-shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";

//Chunking or bundle chunking
//code splitting
//lazy loading
//dynamic bundling
//dynamic import
//webpack

const Instamart = lazy(() => import("./components/Instamart"));

// upon on demand loading -> upon render -> react suspends loading of the component
// kyuki component ka bundle load hone mai time lagta hai, uske pehele react load karne lagta hai(eror)

const AppLayout = () => {
  const [user, setUser] = useState({ name: "Rahul" });

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <HeaderComponent />
        <Outlet />
        {/* //this will render the child components of AppLayout the
      content in outlet will be rendered based on the path */}
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, //WRONG PATH ERROR
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          //Nested Routes => /about/profile
          //Dont write /profile
          //Childrens are always rendered in outlet of parent
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id", //Dynamic route
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          //Suspense is used taki first render & bundle loading ka time gap issue na ho
          <Suspense
            fallback={
              //fallback is used to show something while the component is loading (Bundle chunk jab tak load hota hai tab tak ye show karega)
              <Shimmer width={250} height={300} className="margin-10" />
            }
          >
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
