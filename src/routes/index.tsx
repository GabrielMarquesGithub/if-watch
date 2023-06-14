import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Room } from "./Room";
import { CreateRoom } from "./CreateRoom";
import { ErrorBoundary } from "./Error";

// fetch functions

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/create",
    element: <CreateRoom />,
  },
  {
    element: <Dashboard />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: "/room/:roomId",
            element: <Room />,
          },
        ],
      },
    ],
  },
]);
