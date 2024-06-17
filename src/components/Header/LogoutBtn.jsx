import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandeler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        })
    }

    return(
        <button onClick={logoutHandeler} className="text-2xl px-6 py-2 duration-200 hover:bg-blue-200 rounded-full">
            Logout
        </button>
    );
}

export default LogoutBtn;