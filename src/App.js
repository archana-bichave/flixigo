import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import SectionPage from "./components/SectionPage";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: ":sectionId",
        element: <SectionPage />,
      },
    ],
  },
]);
function App() {
  return (
      <Provider store={store}>
        <div className="[--gutter-width:1rem]">
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
  );
}

export default App;
