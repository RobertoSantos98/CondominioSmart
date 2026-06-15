import "../../global.css"

import { SplashScreen, Stack } from "expo-router";
import { AuthProvider } from "@/contexts/authContext";
import { useState } from "react";
import SplashScreenAnimation from "./splash";


export default function Layout() {

    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);


    if(!splashAnimationFinished) {
        return (
            <SplashScreenAnimation onFinish={() => {setSplashAnimationFinished(true)}} />
        )
    }



    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen
                    name="(protected)"
                    options={{
                        headerShown: false,
                        animation: "none"
                    }}
                />
                <Stack.Screen
                    name="signin"
                    options={{
                        title: "Entrar",
                        headerShown: false,
                        animation: "fade_from_bottom"
                    }}
                />
            </Stack>
        </AuthProvider>
    )
}