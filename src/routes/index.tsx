import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Room } from "./Room";
import { CreateRoom } from "./CreateRoom";

// fetch functions

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateRoom />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/room/:roomId",
        element: <Room />,
      },
    ],
  },
]);
