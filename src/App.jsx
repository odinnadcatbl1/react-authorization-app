import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import LinkPage from "./components/LinkPage";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            {/* public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/linkpage" element={<LinkPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* private routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                <Route path="/editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path="/admin" element={<Admin />} />
            </Route>

            <Route
                element={
                    <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />
                }
            >
                <Route path="/lounge" element={<Lounge />} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default App;
