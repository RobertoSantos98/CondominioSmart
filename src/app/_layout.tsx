import "../../global.css"

import { SplashScreen, Stack, useRouter } from "expo-router";
import { AuthProvider } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import SplashScreenAnimation from "./splash";
import { useAuth } from "@/hooks/useAuth";


export default function Layout() {

    const { isLoggedIn } = useAuth();
    const router = useRouter();

    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    useEffect(() => {

        if (!splashAnimationFinished) return;

        if (!isLoggedIn) {
            router.replace('/signin');
        } else {
            router.replace('/');
        }

    }, [isLoggedIn, splashAnimationFinished])

    if (!splashAnimationFinished) {
        return (
            <SplashScreenAnimation onFinish={() => { setSplashAnimationFinished(true) }} />
        )
    }



    return (
        <AuthProvider>
            <Stack>

                <Stack.Screen
                    name="signin"
                    options={{
                        title: "Entrar",
                        headerShown: false,
                        animation: "fade_from_bottom"
                    }}
                />

                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        animation: "none"
                    }}
                />

                <Stack.Screen
                    name="(telas)"
                    options={{
                        headerShown: false,
                        animation: "none"
                    }}
                />

            </Stack>
        </AuthProvider>
    )
}