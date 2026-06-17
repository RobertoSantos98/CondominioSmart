import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Href, router } from 'expo-router';

type MenuOptionsProps = {
    title: string,
    icone: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    navegar: Href
}

export default function MenuOptions({title, icone, navegar}: MenuOptionsProps) {
    return (

            <Pressable className="py-4 flex-row items-center gap-2 bg-transparent active:bg-slate-200" onPress={() => router.push(navegar)}>
                <MaterialCommunityIcons name={icone} size={24} color={"#334155"} style={{ marginHorizontal: 16 }} />
                <Text className='text-slate-700'>{title}</Text>
            </Pressable>

    );
}
