import { Tabs, Redirect } from "expo-router";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import SignIn from "../signin";

import { useAuth } from "@/hooks/useAuth";
import { View } from "react-native";



export default function ProtectedLayout() {

    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
        return <SignIn />
    }

    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                height: 90,
                borderTopWidth: 0,
            },
            tabBarShowLabel: false,
            tabBarItemStyle: {},
            tabBarIconStyle: { flex: 1, width: 'auto' },
        }}>

            <Tabs.Screen name="index" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused) {
                        return (
                            <View className="bg-sky-50 p-2.5 rounded-b-full -top-2" style={{ elevation: 1 }}>
                                <View className="bg-lime-500 rounded-full p-2.5 items-center justify-center">
                                    <Octicons name="home-fill" size={24} color={focused ? "#FFF" : "#757575"} />
                                </View>
                            </View>
                        )
                    }

                    return (
                        <Octicons name="home" size={36} color={"#757575"} />
                    )
                },

            }} />

            <Tabs.Screen name="message" options={{
                title: "Message",
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name={focused ? "message-processing" : "message-processing-outline"} size={36} color={focused ? "#FFF" : "#757575"} />
                ),

            }}

            />

            <Tabs.Screen name="agenda" options={{
                title: "Agenda",
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name={focused ? "calendar-month-outline" : "calendar-month"} size={36} color={focused ? "#FFF" : "#757575"} />
                ),

            }}

            />

            <Tabs.Screen name="mais" options={{
                title: "Mais",
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name={focused ? "menu" : "menu"} size={36} color={focused ? "#FFF" : "#757575"} />
                ),

            }}

            />

        </Tabs>

    )
}

type ActivityTabProps = {
  nome: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};


function ActivityTab({ nome }: ActivityTabProps) {
    return (
        <View className="bg-sky-50 p-2.5 rounded-b-full -top-2" style={{ elevation: 1 }}>
            <View className="bg-lime-500 rounded-full p-2.5 items-center justify-center">
                <Octicons name={nome} size={24} color={"#FFF"} />
            </View>
        </View>
    )
}