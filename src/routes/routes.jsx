import { createBrowserRouter } from "react-router-dom";
import ListUserPageComponent from "../components/pages/list-user/list-user.page.component";
import CreateUserPageComponent from "../components/pages/create-user/create-user.page.component";
import EditUserPageComponent from "../components/pages/edit-user/edit-user.page.component";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <ListUserPageComponent></ListUserPageComponent>
    },
    {
        path: "/user/list",
        element: <ListUserPageComponent></ListUserPageComponent>,
    },
    {
        path: "/user/create",
        element: <CreateUserPageComponent></CreateUserPageComponent>,
    },
    {
        path: "/user/update",
        element: <EditUserPageComponent></EditUserPageComponent>,
    }
]);
export default routes;