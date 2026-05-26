import '../../../global.css'

import { Stack, Redirect } from "expo-router";
import SignIn from "../signin";

import { useAuth } from "@/hooks/useAuth";



export default function ProtectedLayout() {

    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
        return <SignIn/>
    }

    return <Stack/>
}