import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController(); // для прерывания запроса

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get("./users", {
                    signal: controller.signal,
                });

                const userName = response.data.map((user) => user.username);
                console.log(response.data);
                isMounted && setUsers(userName);
            } catch (err) {
                console.log(err);
                navigate("/login", {
                    state: { from: location },
                    replace: true,
                });
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <article>
            <h2>Users List</h2>
            {users?.length ? (
                <ul>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
            ) : (
                <p>No users to display</p>
            )}
        </article>
    );
};

export default Users;
