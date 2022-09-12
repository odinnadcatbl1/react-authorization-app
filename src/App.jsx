import Register from "./Register";
import Login from "./Login";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

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
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/lounge" element={<Lounge />} />

            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default App;
