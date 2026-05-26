import "../../global.css"

import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/authContext";


export default function Layout() {
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