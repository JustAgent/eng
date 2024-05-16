import {FC, PropsWithChildren, useState} from "react";
import {AuthPage} from "../../../pages/AuthPage";
import {Route, Routes} from "react-router-dom";
import {RegisterPage} from "../../../pages/RegisterPage";
import {LogInPage} from "../../../pages/LogInPage";

const isMockAuth = false

export const MockLogin = 'admin'
export const MockPassword = 'admin'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isAuth, setAuth] = useState<boolean>(false)

    if (!isMockAuth && !isAuth) return (
        <Routes>
            <Route path="/register" element={<RegisterPage onAuth={() => {
                setAuth(true)
            }}/>} />
            <Route path="/login" element={<LogInPage onAuth={() => {
                setAuth(true)
            }}/>} />
            <Route path="*" element={<AuthPage />} />
        </Routes>
    )

    return children
};