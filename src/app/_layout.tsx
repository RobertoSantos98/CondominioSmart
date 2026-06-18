import "../../global.css";
import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/authContext";
import { useState } from "react";
import SplashScreenAnimation from "./splash";

export default function Layout() {
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    if (!splashAnimationFinished) {
        return (
            <SplashScreenAnimation onFinish={() => setSplashAnimationFinished(true)} />
        );
    }

    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="signin" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(telas)" />
            </Stack>
        </AuthProvider>
    );
}