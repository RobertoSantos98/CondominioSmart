import { Tabs, Redirect } from "expo-router";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import SignIn from "../signin";

import { useAuth } from "@/hooks/useAuth";
import { StatusBar, View } from "react-native";



export default function ProtectedLayout() {

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
                                <View className="bg-green-500 rounded-full p-2.5 items-center justify-center">
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
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused){
                        return (
                            <ActivityTab name="message-processing"/>
                        )
                        
                    }

                    return <MaterialCommunityIcons name="message-processing-outline" size={36} color={focused ? "#FFF" : "#757575"} />
                },

            }}

            />

            <Tabs.Screen name="agenda" options={{
                title: "Agenda",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused) return <ActivityTab name="calendar-month"/>

                    return <MaterialCommunityIcons name="calendar-month-outline" size={36} color={focused ? "#FFF" : "#757575"} />
                },

            }}

            />

            <Tabs.Screen name="mais" options={{
                title: "Mais",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused) return <ActivityTab name="menu"/>

                    return <MaterialCommunityIcons name="menu" size={36} color={focused ? "#FFF" : "#757575"} />
                },

            }}

            />

        </Tabs>

    )
}

type ActivityTabProps = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};


function ActivityTab({ name }: ActivityTabProps) {
    return (
        <View className="bg-slate-100 p-2.5 rounded-b-full -top-2" style={{ elevation: 1 }}>
            <View className="bg-green-500 rounded-full p-2.5 items-center justify-center">
                <MaterialCommunityIcons name={name} size={24} color={"#FFF"} />
            </View>
        </View>
    )
}