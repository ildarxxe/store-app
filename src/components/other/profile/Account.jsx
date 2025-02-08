import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Menu from "./Menu";
import ProfileEdit from "./ProfileEdit";
import OrderList from "./OrderList";
import Favorites from "./Favorites";
import Logout from "./Logout";
import { useEffect } from "react";

function Account() {
    useEffect(() => {
        const link = document.querySelector(".logout");
        const modal_window = document.querySelector(".modal-window_wrap");
        const agreement = document.querySelector(".agreement");
        const refuse = document.querySelector(".refuse");

        if (link) {
            link.addEventListener("click", () => {
                if (modal_window) {
                    modal_window.style.display = "flex";
                }
            });
        } else {
            console.log("no link s  ");
        }

        if (refuse) {
            refuse.addEventListener("click", () => {
                if (modal_window) {
                    modal_window.style.display = "none";
                }
            });
        }

        if (agreement) {
            agreement.addEventListener("click", () => {
                if (modal_window) {
                    modal_window.style.display = "none";
                }
            });
        }
    }, []);

    return (
        <div className="profile">
            <Menu />
            <Routes>
                <Route path="/" element={<Navigate to="profile" />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile-edit" element={<ProfileEdit />} />
                <Route path="orders" element={<OrderList />} />
                <Route path="favorites" element={<Favorites />} />
            </Routes>
            <Outlet />
            <Logout />
        </div>
    );
}

export default Account;
