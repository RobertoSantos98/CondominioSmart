import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface headerProps {
    title: string
}

export default function HeaderStack( { title }: headerProps) {

    const width = useSafeAreaInsets();


    return (
        <View className='bg-green-500 flex-row items-center px-4 justify-between border-b border-green-600' style={{ paddingTop: width.top }}>
            <TouchableOpacity onPress={() => router.back()}>
                <MaterialCommunityIcons name='keyboard-backspace' size={32} color={'#FFF'} />
            </TouchableOpacity>

            <Text className='text-white text-2xl p-4 font-bold'>{title}</Text>


        </View>
    );
}