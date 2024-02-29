import Home from "./components/Home";
import Diagram from "./components/Diagram";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/Diagram',
        element: <Diagram />
    },
];


export default AppRoutes;